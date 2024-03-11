import  jwt  from "jsonwebtoken";
import dotenv  from "dotenv";

dotenv.config();

export const generateToken = (id, userType) => {
    return jwt.sign(
        { id, userType }, 
        process.env.JWT_KEY, 
        {expiresIn: "1d",}
        );
};


export const verifyToken = (token) => {
    try {
        
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        return decodedToken;

    } catch (error) {
        console.log("No token here & Error: ", error);
    }
}