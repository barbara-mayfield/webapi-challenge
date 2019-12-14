module.exports = (req, res, next) => {
    console.log(`${req.ip} - ${req.protocol} - ${req.url} - ${req.method}}
    `)
    next();
}