import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema

const cartSchema = Schema({

   userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"

   },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],

},

{
    timestamps: true
})

export default mongoose.model('Cart', cartSchema);