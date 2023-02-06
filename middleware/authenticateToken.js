function authenticateToken(req, res, next) {

    const accessToken = req.headers['authorization'].split(' ')[1]

    if (accessToken == null) return res.sendStatus(401)

    jwt.verify(accessToken, process.env.JWT_SECRET_ACCESS_TOKEN, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(401)
        req.user = user
        next()

    })


}

export default authenticateToken;