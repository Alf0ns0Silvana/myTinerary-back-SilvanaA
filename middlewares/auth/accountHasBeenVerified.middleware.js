export const accountHasBeenVerified = (req, res, next) => {
    if (req.user.verified) {
        return next()
    }
    return res.status(400).json({
        succes: true,
        message: 'User has not verified account'
    })
}