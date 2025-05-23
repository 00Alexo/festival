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
            return res.status(404).json({error: 'Utilizator invalid!'});
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

const postComment = async (req, res) => {
    try {
        const { jurnalId, comment, username } = req.body;

        const user = await userModel.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ error: 'Utilizator invalid!' });
        }

        if (!jurnalId || !comment) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const jurnal = await jurnalModel.findByIdAndUpdate(jurnalId, {
            $push: {
                comments: {
                    comment: comment,
                    username: username,
                    isAuthenticated: true
                }
            }
        }, { new: true });

        if (!jurnal) {
            return res.status(404).json({ error: 'Postare invalidă!' });
        }

        return res.status(200).json({ message: 'Comentariul a fost adăugat cu succes!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

const postAnonymousComment = async (req, res) => {
    try {
        const { jurnalId, comment} = req.body;
        
        if (!jurnalId || !comment) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const jurnal = await jurnalModel.findByIdAndUpdate(jurnalId, {
            $push: {
                comments: {
                    comment: comment,
                    username: "Anonim",
                    isAuthenticated: false
                }
            }
        }, { new: true });

        if (!jurnal) {
            return res.status(404).json({ error: 'Postare invalidă!' });
        }

        return res.status(200).json({ message: 'Comentariul a fost adăugat cu succes!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

const getComments = async (req, res) =>{
    try{
        const { jurnalId } = req.params;

        if (!jurnalId) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const jurnal = await jurnalModel.findById(jurnalId);

        if (!jurnal) {
            return res.status(404).json({ error: 'Postare invalidă!' });
        }

        return res.status(200).json(jurnal.comments);
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

const likeJurnal = async (req, res) => {
    try {
        const { jurnalId } = req.params;
        const { username } = req.body;

        if (!jurnalId || !username) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const user = await userModel.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ error: 'Trebuie sa fii logat ca sa apreciezi o postare!' });
        }

        const jurnal = await jurnalModel.findById(jurnalId);

        if (!jurnal) {
            return res.status(404).json({ error: 'Postare invalidă!' });
        }

        if (jurnal.likes.includes(username)) {
            return res.status(400).json({ error: 'Deja ai apreciat aceasta postare!' });
        }

        jurnal.likes.push(username);
        await jurnal.save();

        return res.status(200).json({ message: 'Postare a fost apreciată!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    uploadJurnal,
    getJurnale,
    postComment,
    postAnonymousComment,
    getComments,
    likeJurnal
}