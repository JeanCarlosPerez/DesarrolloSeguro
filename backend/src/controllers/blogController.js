import {Blog} from '../models/blog.js'

// metodos para el CRUD

//Mostrar todos los registros

export const getAllBlogs =  async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrat un registro


export const getBlog = async (req, res) => {
    const id = req.params.id
    try {
        const blogs = await Blog.find({_id:id})
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({message:"not found", error})
    }
}

//Crear un registro

export const createBlog = async (req, res) => {
    try {
        const blog =  await Blog.create(req.body)
        res.json({"message":'Registro creado correctamente'})
    } catch (error) {
        res.json({message:error.message})
    }
}

//Modificar un registro


export const updateBlog = async (req, res) => {
    const id = req.params.id
    try {
        await Blog.updateOne({_id:id},req.body) 
        res.status(200).json({message:"Blog Satisfactorily Modified", id})
    } catch (error) {
        res.status(500).json({message:"not found", error})
    }
}

//Eliminar un registro


export const deleteBlog = async (req, res) => {
    const id = req.params.id
    try {
        await Blog.deleteOne({_id:id},req.body) 
        res.status(200).json({message:"Blog Satisfactorily Deleted", id})
    } catch (error) {
        res.status(500).json({message:"not found", error})
    }
}
