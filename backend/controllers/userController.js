const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
.is().min(8)
.has().uppercase()
.has().lowercase()
.has().digits(1)

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const signup = async(req, res) =>{
    try{
        const {username, password, confirmPassword} = req.body;
        const saltRounds = 12; let errorFields = [];

        if (!username) errorFields.push({field: "username", error: "Acest camp este obligatoriu!"});
        if (!password) errorFields.push({field: "pass", error: "Acest camp este obligatoriu!"});
        if (!confirmPassword) errorFields.push({field: "cpass", error: "Acest camp este obligatoriu!"});

        if (errorFields.length > 0) 
            return res.status(400).json({error: 'Toate campurile sunt obligatorii!', errorFields: errorFields});

        const existingUser = await userModel.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
        if(existingUser){
            errorFields.push({field: "username", error: "Usernameul este deja folosit!"});
            return res.status(400).json({ error: 'Acest username este deja folosit!', errorFields: errorFields});
        }

        if(!schema.validate(password)){
            errorFields.push({field: "pass", error: "Parola nu are minim 8 caractere, o litera mare si o cifra!"});
            errorFields.push({field: "cpass", error: ""});
            return res.status(400).json({error: 'Parola nu are minim 8 caractere, o litera mare si o cifra!', errorFields: errorFields})
        }

        if(password !== confirmPassword){
            errorFields.push({field: "pass", error: "Parolele nu sunt identice!"});
            errorFields.push({field: "cpass", error: ""});
            return res.status(400).json({error:"Parolele nu sunt identice", errorFields: errorFields});
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const data = {
            username: username.toLowerCase(),
            password: hashedPassword,
            displayName: username,
        }

        const user = await userModel.create(data);
        const token = createToken(user._id);

        res.status(200).json({username:data.username, token});
    }catch(error){
        console.error(error.message);
        return res.status(400).json(error.message);
    }
}

const signin = async(req, res)=>{
    try{
        const {username, password} = req.body;
        let errorFields = [];

        if (!username) errorFields.push({field: "username", error: "Acest camp este obligatoriu!"});
        if (!password) errorFields.push({field: "pass", error: "Acest camp este obligatoriu!"});
        if (errorFields.length > 0) {
            return res.status(400).json({error: 'Toate campurile sunt obligatorii!', errorFields: errorFields});
        }


        const user = await userModel.findOne({username: username.toLowerCase()});

        if(user){
            const passMatch = await bcrypt.compare(password, user.password);

            if(passMatch){
                const token = createToken(user._id)

                res.status(200).json({username:user.username, token});
            }
            else{
                errorFields.push({field: "pass", error: "Parola incorecta!"});
                return res.status(400).json({error: 'Parola incorecta!', errorFields});
            }
        }
        else
            return res.status(400).json({error: 'Contul nu exista!', errorFields: [{field:"username", error:"Acest cont nu exista!"}]} );
    }catch(error){
        console.error(error.message);
        return res.status(400).json(error.message);
    }
}

module.exports={
    signup, 
    signin
}
