import Joi from "joi";
import User from "../../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import loginSchema from "../../validator/loginSchema.js";


async function loginController(req, res){


    // getting the request 
    // validating the request
    const {error, value} = loginSchema.validate(req.body)

    if(error){
        return res.json({error: error.details[0].message})
    }

    // checking into the database 
    const user = await User.findOne({email: req.body.email})

    if(!user){

        return res.json({message: "User not found!"})

    }

    // encrypting the password 
    const checkPassowrd = await bcrypt.compare(req.body.password, user.password)

    if(!checkPassowrd){
        return res.json({msg: "Password not matched !"})
    }

    // generating the token for user to login 
    const accessToken = jwt.sign(user.toObject(), process.env.JWT_SECRET_ACCESS_TOKEN)
 
    return res.json({accessToken: accessToken, user: {name: user.name, email: user.email, _id: user._id,  role: user.role}})


}


export default loginController 