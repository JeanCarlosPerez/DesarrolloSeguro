import { Users } from "../models/user.js";

// metodos para el CRUD

//Mostrar todos los registros

export const getAllUser =  async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrat un registro


export const getOneUser = async (req, res) => {
    const id = req.params.id
    try {
        const users = await Users.find({_id:id})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"not found", error})
    }
}

//Crear un registro

export const createUser = async (req, res) => {
    try {
        const user =  await Users.create(req.body)
        res.status(200).json({message:'Registro creado correctamente', user})
    } catch (error) {
        res.json({message:error.message})
    }
}

//Modificar un registro


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, lastName, userName, email, password, roles } = req.body;

    try {
        let hashedPassword;

        // Si se proporciona un nuevo password, hashearlo
        if (password) {
            hashedPassword = await Users.encryptPassword(password);
        }

        // Construir el objeto de datos actualizados del usuario
        const updatedUserData = {
            name,
            lastName,
            userName,
            email,
            // Si hay un nuevo password, almacenar el hash; de lo contrario, mantener el existente
            password: hashedPassword || undefined,
        };

        // Actualizar el usuario en la base de datos
        const user = await Users.updateOne({ _id: id }, updatedUserData);

        res.status(200).json({ message: "User successfully updated", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};


//Eliminar un registro


export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await Users.deleteOne({_id:id},req.body) 
        res.status(200).json({message:"User Satisfactorily Deleted", id})
    } catch (error) {
        res.status(500).json({message:"not found", error})
    }
}
