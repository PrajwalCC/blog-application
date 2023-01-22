import mongoose from "mongoose";
mongoose.set('strictQuery', true);
export default async function connect(){
    mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}