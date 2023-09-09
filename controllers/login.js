const rootDir = require('../util/path')

exports.contactUs = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views','contactUs.html'))
}

exports.successful = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}