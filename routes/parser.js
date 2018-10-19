exports.parseHeaders = (req, res) => {  
    let ip = req.ip
    let languages = req.get('Accept-Language')
    let software = req.get('User-Agent')
    
    res.sendSuccess(ip, languages, software)
}