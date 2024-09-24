import { sequelize } from "./config/config.js"

sequelize.sync({alter: true}).then(() => {
    console.log("Banco está sincronizado.")
}).catch((error) => {
    console.error(`Deu esse erro ao sincronizar: ${error}`)
})