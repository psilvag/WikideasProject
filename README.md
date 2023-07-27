
----------------------------------------WIKIIDEAS PROJECT ------------------------------

ROUTES:

Find all categories
GET:        api/v1/wikideas/categories/
----------------------------------------------------------------------------------------------------
Find  all  articles by category Id
GET:        api/v1/wikideas/categories/:categoryId/articles
----------------------------------------------------------------------------------------------------
Create a new article 
POST:      api/v1/wikideas/categories/:categoryId/articles
----------------------------------------------------------------------------------------------------
Update an article, require category Id and article Id
PATCH:    api/v1/wikideas/categories/:categoryId/articles/:articleId
----------------------------------------------------------------------------------------------------
Delete an article, require category Id and article Id
DELETE:  api/v1/wikideas/categories/:categoryId/articles/:articleId
----------------------------------------------------------------------------------------------------

Find all articles
GET:        api/v1/wikideas/articles/
----------------------------------------------------------------------------------------------------
Find article by Id
GET:        api/v1/wikideas/articles/:articleId
____________________________________________________________________________________________________
Update article categoryId 
PATCH:      api/v1/wikideas/articles/:articleId

