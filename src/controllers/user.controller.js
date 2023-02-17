const { createUser } = require('../repositories/users.repository')

exports.create = async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

