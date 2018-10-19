const router = require('express').Router()
const parser = require('./parser')

function index (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
}
router.get('/', index)

router.get('/api/whoami', parser.parseHeaders)
module.exports = router