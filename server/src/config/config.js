import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('books_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log("Conectado!")
} catch(erro) {
    console.error("Não conectou :(", erro)
}