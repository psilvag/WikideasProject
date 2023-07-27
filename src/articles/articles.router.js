
const router = require('express').Router()
const articlesServices = require('./articles.services')

router.route('/')
    .get(articlesServices.getAllArticles)

router.route('/:articleId')
    .get(articlesServices.getArticleById)
    .patch(articlesServices.updateCategoryIdArticle)

module.exports = router
















