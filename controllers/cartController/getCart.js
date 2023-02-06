import Cart from "../../model/Cart.js";

async function getCart(req, res){

    const cart = await Cart.find()

    res.json(cart)

}

export default getCart;