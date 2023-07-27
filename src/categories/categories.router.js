const router = require('express').Router()
const categoriesServices = require('./categories.services')
const articlesServices = require('../articles/articles.services')



router.route('/')
    .get(categoriesServices.getAllCategories)

router.route('/:categoryId/articles')
    .get(articlesServices.getArticlesByCategoryId)
    .post(articlesServices.postArticle)

router.route('/:categoryId/articles/:articleId')
    .patch(articlesServices.updateArticle)
    .delete(articlesServices.deleteArticle)


module.exports = router
