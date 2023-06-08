const SharpMulter=require('sharp-multer')
const multer=require ('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp':'webp'
};
const storage =  
 SharpMulter ({
              destination:(req, file, callback) =>callback(null, "images"),
              filename: (req, file, callback) => {
                const name = file.originalname.split(' ').join('_');
                const extension = MIME_TYPES[file.mimetype];
                callback(null, name + Date.now() + '.' + extension);
              },
              imageOptions:{
               fileFormat: "webp",
               quality: 20,               
                resize:{width: 500,height: 400},
            
               
                 }
           });
           module.exports = multer({storage: storage}).single('image');