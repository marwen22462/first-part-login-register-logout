const { check,validationResult } = require('express-validator')


exports.registerRules = () => [
    check('email', ' this field is required ').notEmpty(),
    check('email', ' this field should be a valid email ').isEmail(),
    check('password', ' this field is required ').notEmpty(),
    check('password', ' password should be a 6 character minimum ').isLength({min:6}),
    check('accountType', ' must choose a valid type ').notEmpty()
]

exports.commentRules = () => [
    check('body', ' this field is required ').notEmpty(),
    check('body', ' this field is required ').notEmpty(),
    // check('body', ' this field is required minimum 6 caracter').isLength({min:8})
]

const errorFormatter = ({ msg }) => {
    return `${msg }`}
exports.validator = (req, res, next)=>{
    const errors = validationResult(req).formatWith(errorFormatter)
    errors.isEmpty() ? next() : res.status(400).json({errors: errors.array() })
}
// exports.authType=(accountType) =>{
//     return (req, res, next) =>{
//         if(req.user.accountType !== accountType) {
//             res.status(401)
//             return res.status('Not Allowed only admin')
//         }
//         next()
//     }
// }