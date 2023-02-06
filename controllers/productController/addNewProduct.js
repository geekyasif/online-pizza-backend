import Product from "../../model/Product.js"
import productSchema from "../../validator/productSchema.js";

async function addNewProduct (req, res) {


    const {error} = productSchema.validate(req.body)

    if(error){
        return res.json(error.details[0].message)
    }

    const newProduct = new Product({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        image: req.body.image
    })

    const savedProduct = await newProduct.save()

    return res.json({product: savedProduct})
}


export default addNewProduct