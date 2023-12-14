const {validationResults} = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResults(req)

    if (errors.isEmpty()){
        return next()
    }

    const extractedErros = []

    errors.array().map((err) => extractedErros.push(err.msg))

    return res.status(422).json({
        errors: extractedErros
    })

    module.exports = validate
}