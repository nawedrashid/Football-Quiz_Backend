const jwt = require("jsonwebtoken");

const secret = "abcd";

const authVerify = async(req, res, next) => {
    try{
        const token = req.body.headers.authorization;
        const decode = jwt.verify(token, secret);
        req.user = {userId: decode.userId}
        return next();
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {authVerify}