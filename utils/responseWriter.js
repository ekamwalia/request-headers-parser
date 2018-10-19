module.exports = (req, res, next) => {
    res.sendError = (err, msg = 'Internal Server Error', status = 500) => {
        console.log('[ERROR] ', err)
        res.status(status).json({success: false, msg})
    }
    res.sendSuccess = (ipaddress, language, software) => {
        res.status(200).json({ipaddress, language, software})
    }
    next()
}