const router = require('express').Router()
const { register, verifyEmail, resendVerification, forgetPassword, resetPassword, signin } = require('../controllers/userController')
const { userRules, validationMethod } = require('../utils/ourValidator')


router.post('/register',userRules,validationMethod, register)
router.get('/verifyuser/:token',verifyEmail)
router.post('/resendverification',resendVerification)

router.post('/login',signin)

module.exports = router