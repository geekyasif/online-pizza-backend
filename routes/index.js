import express from 'express';
import loginController from '../controllers/authContoller/loginController.js';
import registerController from '../controllers/authContoller/registerController.js';
import addProductToCart from '../controllers/cartController/addProductToCart.js';
import getCart from '../controllers/cartController/getCart.js';
import getCartById from '../controllers/cartController/getCartById.js';
import addNewProduct from '../controllers/productController/addNewProduct.js';
import deleteSingleProduct from '../controllers/productController/deleteSingleProduct.js';
import getAllProducts from '../controllers/productController/getAllProductsController.js';
import getSingleProduct from '../controllers/productController/getSingleProduct.js';
import updateSingleProduct from '../controllers/productController/updateSingleProduct.js';

const router = express.Router()



// auth routes 
router.post('/register', registerController)
router.post('/login', loginController)
// router.post('logout',)

// porduct routes
router.post('/products', addNewProduct)
router.get('/products', getAllProducts)
router.get('/products/id/:id', getSingleProduct)
router.put('/products/id/:id', updateSingleProduct)
router.delete('/products/id/:id', deleteSingleProduct)

// cart routes
router.post('/cart', addProductToCart)
router.get('/cart', getCart)
router.get('/cart/user-id/:id', getCartById)


//oder route
// router.post('/order', )


export default router


