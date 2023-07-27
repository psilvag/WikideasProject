const { DataTypes } = require('sequelize')
const db = require('../utils/database')

// Category models
const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nameCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 60]
        }
    }

})

async function seed() {
    try {
        await Categories.bulkCreate([
            { nameCategory: "Cultura y entretenimiento" },
            { nameCategory: "Ciencia y tecnología" },
            { nameCategory: "Viajes y turismo" },
            { nameCategory: "Salud y bienestar" },
            { nameCategory: "Alimentación y cocina" },
            { nameCategory: "Educación y desarrollo" },
            { nameCategory: "Negocios y finanzas" },
            { nameCategory: "Medio ambiente" },
            { nameCategory: "Política" },
            { nameCategory: "Deportes" }


        ])
        console.log("Categorias creadas exitosamente")
    }
    catch (err) {
        console.log(err);
    }
}
seed()
module.exports = Categories       