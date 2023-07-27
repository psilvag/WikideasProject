
const db = require("../utils/database")
const { DataTypes } = require("sequelize")
const Categories = require("./category.models")

// Articles Models
const Articles = db.define('articles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 80]
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            key: "id",
            model: Categories
        }
    }

})

module.exports = Articles