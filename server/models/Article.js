const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        complete: { type: Boolean, default: false }
    },
    { timestamps: true }
)


module.exports=mongoose.model('Articl',articleSchema)