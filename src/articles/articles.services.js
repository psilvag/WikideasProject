
const articlesControllers = require('./articles.controllers')

const getAllArticles = (req, res) => {
    articlesControllers.findAllArticles()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}

const getArticleById = (req, res) => {
    const articleId = req.params.articleId
    articlesControllers.findArticleById(articleId)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            }
            else {
                res.status(404).json({
                    message: `ArticleId ${articleId} not found`
                })
            }

        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}

const getArticlesByCategoryId = (req, res) => {
    const categoryId = req.params.categoryId
    if (categoryId >= 1 && categoryId <= 10) {
        articlesControllers.findAllArticlesByCategoryId(categoryId)
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json(data)
                }
                else {
                    res.status(200).json({
                        message: `CategoryId ${categoryId} is empty`
                    })
                }

            })

            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    }
    else {
        res.status(404).json({
            message: 'This category does not exist'
        })
    }
}

const postArticle = (req, res) => {
    const categoryId = req.params.categoryId
    const { title, content } = req.body
    articlesControllers.createArticle({ title, content, categoryId })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.messague,
                fields: {
                    title: 'String',
                    content: 'Text'
                }
            })
        })
}

const updateArticle = (req, res) => {
    const categoryId = req.params.categoryId
    const articleId = req.params.articleId
    const { title, content } = req.body
    articlesControllers.updateArticle(categoryId, articleId, { title, content })
        .then(data => {
            if (data) {
                res.status(200).json({ message: `Article edited succesfully with id: ${articleId}` })
            } else {
                res.status(404).json({ message: `Article with id: ${articleId}, not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}
const updateCategoryIdArticle = (req, res) => {
    const articleId = req.params.articleId
    const { title, content, categoryId } = req.body
    articlesControllers.updateCategoryArticle(articleId, { title, content, categoryId })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Category edited succesfully' })
            } else {
                res.status(404).json({ message: `Article with id: ${articleId}, not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}

const deleteArticle = (req, res) => {
    const categoryId = req.params.categoryId
    const articleId = req.params.articleId
    articlesControllers.deleteArticle(categoryId, articleId)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: `Category with id: ${categoryId}, not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}
module.exports = {
    getAllArticles,
    getArticleById,
    getArticlesByCategoryId,
    postArticle,
    updateArticle,
    deleteArticle,
    updateCategoryIdArticle

}

