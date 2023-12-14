const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatorio")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no minimo 3 caracteres"),
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatorio")
            .isEmail()
            .withMessage("Insira um email valido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatoria")
            .isLength({ min: 5 })
            .withMessage("A senha precisa ter no minimo 5 caracteres"),
        body("confirmPassword")
            .isString()
            .withMessage("A confirmacao de senha é obrigatoria")
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("As senhas nao sao iguais")
                }
                return true
            })
    ]
}

module.exports = {
    userCreateValidation,
}