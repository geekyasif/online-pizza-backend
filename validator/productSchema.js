import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required(),
    size: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string().required()
})


export default productSchema;