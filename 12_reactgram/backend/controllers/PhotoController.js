const Photo = require("../models/Photo")
const User = require("../models/User")

const mongoose = require("mongoose")


//insert a photo, with an user related to it
const insertPhoto = async (req, res) => {

    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user
    const user = await User.findById(reqUser._id)

    //create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
        //subtitle
    });

    //If photo was created successfully, return data
    if (!newPhoto) {
        res.status(422).json({
            errors: ["Houve um problema, tente mais tarde"]
        });
        return;
    }
    res.status(200).json(newPhoto)
}

//Remove a photo from DB
const deletePhoto = async (req, res) => {

    const { id } = req.params //id da foto pela URL

    const reqUser = req.user // pegar usuario pela requisicao
    try {

        const photo = await Photo.findById(new mongoose.Types.ObjectId(id))  //pegar a foto no model

        //check if photo exists
        if (!photo) {
            res.status(404).json({ errors: ["Foto nao encontrada."] });
            return
        }

        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Ocorreu um erro."] })
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({ id: photo._id, message: "Foto excluida!" })
    } catch (error) {
        res.status(404).json({ errors: ["Foto nao encontrada."] });
        return
    }
};

//Get all photos
const getAllPhotos = async(req,res) => {
    const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

    return res.status(200).json(photos)
}

//Get user photos
const getUserPhotos = async(req,res) => {
    
    const {id} = req.params //pegar o id da URL

    const photos = await Photo.find({userId:id})
    .sort([["createdAt",-1]])
    .exec()

    return res.status(200).json(photos)
}

//get photo by ID
const getPhotoById = async(req,res) => {
    const {id} = req.params;

    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    //check if photo exists
    if(!photo){
        res.status(404).json({errors:["Foto nao encontrada"]})
        return
    }

    res.status(200).json(photo)
}; 

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
}
