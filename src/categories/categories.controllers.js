const Categories = require('../models/category.models')

const getAllCategories = async () => {
     const allCategories = await Categories.findAll()
     return allCategories
}

// const createCategory = async (obj) => {
//     const newCategory= await Categories.create({
//            id:uuid.v4(),
//            nameCategory:obj.nameCategory   
//     })
//     return newCategory
// } 

// const deleteCategory = async (id) => {
//    const data= await Categories.destroy({
//         where:{
//             id:id
//         }
//    })
//    return data
// }


module.exports = {
     getAllCategories


}
