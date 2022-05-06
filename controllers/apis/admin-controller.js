// controller 是一種 object
const { Restaurant, Category } = require('../../models')
// const { imgurFileHandler } = require('../../helpers/file-helpers')

const adminController = {
  getRestaurants: (req, res, next) => {
    Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(restaurants => res.json({ restaurants }))
      .catch(err => next(err))
  }
}

module.exports = adminController
