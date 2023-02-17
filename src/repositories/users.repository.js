const { prisma } = require('../services/prisma')

exports.createUser = async (data) => {
    const user = await prisma.usuarios.create({
        data
    })
    return user
}