const RESOURCE_PATH = '/vegetables'

const viewController = {
  index (req, res, next) {
    res.render('vegetables/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('vegetables/New')
  },
  edit (req, res, next) {
    res.render('vegetables/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('vegetables/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const vegetableId = req.params.id || res.locals.data.vegetable._id
    res.redirect(`${RESOURCE_PATH}/${vegetableId}`)
  }

}

module.exports = viewController
