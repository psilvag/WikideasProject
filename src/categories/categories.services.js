const categoriesControllers = require('./categories.controllers')


const getAllCategories = (req, res) => {
    categoriesControllers.getAllCategories()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
}


// const postCategory = (req, res) => {
//     const nameCategory = req.body.nameCategory
//     categoriesControllers.createCategory({nameCategory})
//     .then(data=>{
//         res.status(201).json(data)
//     })
//    .catch(err=>{
//       res.status(400).json({message:err.message, fields:{
//          nameCategory:'type string'
//       }
//       })
//     })
// }


// const deleteCategory = (req, res) => {
//     const idCategory = req.params.idCategory 
//     categoriesControllers.deleteCategory(idCategory)
//         .then((data) => {
//             if(data){
//                 res.status(204).json()
//             } else {
//                 res.status(404).json({message: `Category with id:${idCategory}, Not Found`})
//             }
//         })
//         .catch((err) => {
//             res.status(400).json({message: err.message})
//         })
// }



module.exports = {
    getAllCategories

}
