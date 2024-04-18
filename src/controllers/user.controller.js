import asyncHandler from "../utils/asyncHandler"; 

const registerUser = asyncHandler(async(req, res)=>{
    res.status(200).json({
        status: "success",
        message: "User registered successfully",
        data: req.body
    })
})

export default registerUser;