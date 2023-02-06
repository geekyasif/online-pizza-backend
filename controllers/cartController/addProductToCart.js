import Cart from "../../model/Cart.js";

async function addProductToCart(req, res) {

    const { userId, productId } = req.body;

    const userCart = await Cart.findOne({ userId: userId })

    if(userCart === null){

        const newAddCart = {
                    userId: userId,
                    products: []
                }
        
                newAddCart.products.push(productId)
                const addCart = new Cart(newAddCart)
                const productAddedToNewCart = await addCart.save()
        return res.json(productAddedToNewCart)

    }

    userCart.products.push(productId)
    const addedItemToExistCart  = await userCart.save()


    res.json({message: "Prodct added to cart sucessfully ", data: addedItemToExistCart})

}

export default addProductToCart;