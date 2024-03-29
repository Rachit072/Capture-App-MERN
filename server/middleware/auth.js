import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Unauthorized - No Authorization header' });
        }

        const token = authorizationHeader.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

export default auth;
