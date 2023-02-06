import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    size: {
      type: String,
      required: true  
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        get:  (image) => {
            return `http://localhost:3000/${image}`
        }
    }

},
    {
        timestamps: true, toJSON: {getters: true}, id: false
    }
)


export default mongoose.model('Product', productSchema)