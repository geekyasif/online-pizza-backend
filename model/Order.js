import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
},{timestamps: true})

export default mongoose.model('Order', orderSchema);