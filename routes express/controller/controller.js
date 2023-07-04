exports.home = (req, res) => {
    res.json({
        message: 'I am home page'
    })
}
exports.about = (req, res) => {
    res.json({
        message: 'I am about page'
    })
}
exports.contact = (req, res) => {
    res.json({
        email: `support@pwskills.com`
    })
}