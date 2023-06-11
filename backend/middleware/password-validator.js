const passwordValidator = require('password-validator');


const schema = new passwordValidator();


schema
.is().min(8)                                    
.is().max(100)                                  
.has().uppercase()                              
.has().lowercase()  
.has().digits()                                                           
.has().not().spaces()                           

module.exports= ((req, res, next) => {
    const password = req.body.password;
    if (!schema.validate(password)) {
        return res.status(400).json({ error: "Attention, mot de passe trop faible "+ schema.validate(password, {list: true }) })
    } else {
        next()
    };
  });