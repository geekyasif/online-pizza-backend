import Product from "../../model/Product.js"

async function getSingleProduct (req, res) {
    const id = req.params.id

    console.log(id)

    const product = await Product.findById({_id: id})

    return res.json(product)
}

export default getSingleProduct