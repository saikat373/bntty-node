
const tokenVerify = (req, res, next) => {
    const clientHeader = req.headers.client_id;
    const secretHeader = req.headers.client_secret;
    if (clientHeader != process.env.CLIENT_TOKEN && secretHeader != process.env.CLIENT_SECRET) {
        return res.status(401).json({ status: false,message: "Unauthorized" });
    }
    next();
}

module.exports = tokenVerify