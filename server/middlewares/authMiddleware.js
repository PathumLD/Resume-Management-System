import { clientLogin } from '../controller/authController.js';
import { verifyToken } from '../utils/jwtUtils.js';

export const authenticateClient = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(' ')[1];
        console.log("token: ", token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: No token provided'
            });
        }

        const decodedToken = verifyToken(token);
        console.log('decodedToken', decodedToken);
        console.log("userType :", decodedToken.userType);

        if (!decodedToken) 
        return res.status(401).json({
            success: false,
            message: 'Unauthorized : Invalid token'
        });

        // Checking if the user is a client or not
        if (!(decodedToken.userType === 'candidate' || decodedToken.userType === 'company')) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden'
            });
        }

        req.client = decodedToken;
        next();

    } catch (error) {
        res.status(401).json({ 
            success: false, 
            message: 'Unauthorized' 
        });
    }
}

