import Cart from "../../model/Cart.js";
import Product from "../../model/Product.js";

async function getCartById(req, res) {

    const { id } = req.params


    const cart = await Cart.findOne({ userId: id })

    // console.log(cart.products)
    
    const cartProduct = await Product.find({ _id: { $in: cart.products}})

    res.json({ cartProduct })

}


export default getCartById;