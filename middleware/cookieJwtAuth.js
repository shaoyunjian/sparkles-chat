// middleware
const jwt = require("jsonwebtoken")

exports.cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = user
    next()
  } catch {
    res.clearCookie("token")
    return res.redirect("/")
  }
} 