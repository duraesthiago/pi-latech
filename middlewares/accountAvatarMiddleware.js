const path = require('path');
const { check } = require('express-validator');


const avatarValidation = [
    check('avatar').custom((value, {req}) => { 
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if(!file){
            throw new Error('Você precisa escolher um arquivo');
        } else {
            let fileExtension =  path.extname(file.originalname);
            
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Os arquivos podem ter as extensões ${acceptedExtensions.join(', ')}`);
            }
        }
       
        return true;
    })
];
module.exports = avatarValidation;