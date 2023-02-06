import Product from "../../model/Product.js";

async function getAllProducts (req, res) {

    const products = await Product.find()

    return res.json(products)
}

export default getAllProducts;