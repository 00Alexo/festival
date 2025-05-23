const userModel = require('../models/userModel');
const jurnalModel = require('../models/jurnalModel');

const uploadJurnal = async (req, res) =>{
    try{
        const {content, images, username} = req.body;
        if(!content || !images || !username){
            return res.status(400).json({error: 'All fields are required!'});
        }

        const user = userModel.findOne({username: username});
        if(!user){
            return res.status(404).json({error: 'Utiliaztor invalid!'});
        }

        jurnalModel.create({
            content: content,
            images: images,
            username: username
        })

        return res.status(200).json({message: 'Postare adaugata cu succes!'});
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getJurnale = async (req, res) =>{
    try{
        const jurnale = await jurnalModel.find().sort({createdAt: -1});
        return res.status(200).json(jurnale);
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports={
    uploadJurnal,
    getJurnale
}