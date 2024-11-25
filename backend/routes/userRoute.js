const router = require('express').Router()
const { register, verifyEmail, resendVerification, signIn } = require('../controller/userController')
const { userRules, validationMethod } = require('../utils/ourValidator')


router.post('/register', register)
// router.get('/verifyuser/:token',verifyEmail)
// router.post('/resendverification',resendVerification)

router.post('/login',signIn)

module.exports = router