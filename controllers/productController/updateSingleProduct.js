import Joi from "joi";
import Product from "../../model/Product.js";
import productSchema from "../../validator/productSchema.js";

async function updateSingleProduct (req, res) {

    const {error} = productSchema.validate(req.body)

    if(error){
        return res.status(401).send(error.details[0].message)
    }

    const { name, price, size, image} = req.body

    let updatedProduct;

    try{

        updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, {
            name,
            price,
            size,
            image
        },
        {new: true}
    )



    }catch(err){

        return res.status(401).send(err)
    }

    return res.json(updatedProduct)
}   

export default updateSingleProduct;