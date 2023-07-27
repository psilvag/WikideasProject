const uuid = require('uuid')
const Articles = require('../models/articles.models')
const Categories = require('../models/category.models')

const findAllArticles = async () => {
  const articles = await Articles.findAll()
  return articles
}

const findArticleById = async (articleId) => {
  const data = await Articles.findOne({
    where: {
      id: articleId
    },
    include: {
      model: Categories,
      attributes: ['nameCategory']

    }
  })
  return data
}

const findAllArticlesByCategoryId = async (categoryId) => {
  const data = await Articles.findAll({
    include: {
      model: Categories,
      attributes: ['nameCategory']
    },
    where: {
      categoryId: categoryId
    }

  })
  return data
}

const createArticle = async (obj) => {
  const data = await Articles.create({
    id: uuid.v4(),
    title: obj.title,
    content: obj.content,
    categoryId: obj.categoryId
  })
  return data
}

const updateArticle = async (categoryId, articleId, obj) => {
  const data = await Articles.update(obj, {
    where: {
      categoryId: categoryId,
      id: articleId
    }
  })
  return data[0]
}

const updateCategoryArticle = async (articleId, obj) => {
  const data = await Articles.update(obj, {
    where: {
      id: articleId

    }
  })
  return data[0]
}



const deleteArticle = async (categoryId, articleId) => {
  const data = await Articles.destroy({
    where: {
      categoryId: categoryId,
      id: articleId
    }
  })
  return data
}

module.exports = {
  findAllArticles,
  findArticleById,
  findAllArticlesByCategoryId,
  createArticle,
  updateArticle,
  deleteArticle,
  updateCategoryArticle
}
