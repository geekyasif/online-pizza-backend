import Joi from "joi";
import User from "../../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import registerSchema from "../../validator/registerSchema.js";


async function registerController (req, res) {

    
    // getting the data from the req 
    // validating the data with joi 
    const {error, value} = registerSchema.validate(req.body)

    if(error){
        return res.send(error.details[0].message)
    }


    // now checking into the databse 
    const userId = await User.exists({email: req.body.email})

    if(userId){
        return res.send("User is already registered!")
    }


    // encrypting the password 
    const hashedPassword = await bcrypt.hash(req.body.password, 10)


    // saving the user into the database 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    const id = await user.save()

    return res.json({user: id})
}


export default registerController;