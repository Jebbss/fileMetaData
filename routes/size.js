'use strict';
module.exports = function(app) {
  const multer  = require('multer');
  const fs = require('file-system');
  const upload = multer({ dest: 'uploads/' });

  app.post('/get-file-size', upload.single('file'), function (req, res, next) {
    let file = req.file;
    let sizeReply = { 'size': file.size};
    fs.unlink(`./uploads/${file.filename}`, function(err) {
            if (err) throw err
            console.log('Successfully deleted file')
    });
    res.json(sizeReply);
  });

};
