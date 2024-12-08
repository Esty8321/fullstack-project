//the connection to the database:
const mongoose=require('mongoose')
const connectToDB=async()=>{
   try{await mongoose.connect(process.env.DATABASE_URI)} 
   catch(err){console.log('dont succeed to connect for the database')}
}

module.exports=connectToDB