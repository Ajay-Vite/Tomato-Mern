import mongoose from 'mongoose'

export const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://Tomato-Ajay:secret999@tomato.3dgq7.mongodb.net/food-del')
    .then(()=>console.log('DB Connected'))
}