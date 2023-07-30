// create and send token and save in the cookie

const sendToken =(user, statusCode, res)  => {

    // create jwt token
    const token = user.getJwtToken();

    // option for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPI*24* 60* 1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie('token', token, options).json({
        sucess:true,
        token,
        user
    })



}

module.exports = sendToken;



