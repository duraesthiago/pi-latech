


module.exports = [
    check('avatars').custom((value, {req}) => { 
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if(!file){
            throw new Error('Você precisa escolher um arquivo');
        } else {
            let fileExtension =  path.extname(file.originalname);
            
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`os arquivos podem ter as extensões ${acceptedExtensions.join(', ')}`);
            }
        }
       
        return true;
    })
];