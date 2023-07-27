

const Categories = require('./category.models')
const Articles = require('./articles.models')

const initModels = () => {
    Categories.hasMany(Articles)
    Articles.belongsTo(Categories)
}

module.exports = initModels