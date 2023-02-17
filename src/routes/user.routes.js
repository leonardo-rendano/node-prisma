const { create } = require('../controllers/user.controller')

exports.userRoutes = (app) => {
    app.post('/user', create)
}