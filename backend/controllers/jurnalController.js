const uploadJurnal = async (req, res) =>{
    try{
        return res.status(200).json({message: 'Jurnal uploaded successfully!'});
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports={
    uploadJurnal
}