import mongoose from 'mongoose';

export const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://jeancperez09:jF7Ytex6OvYmxaAy@cluster0.brovcvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DataBase Connected")
    } catch (error) {
        console.log(error)
    }
}