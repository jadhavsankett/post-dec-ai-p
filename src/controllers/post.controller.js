const postmodel = require('../models/post.model');
const genreteCaption = require('../service/ai.service');


async function createPostController(req , res) {
    const file = req.file;
    // console.log('recive the file ',file)

    const base64Image = new Buffer.from(file.buffer).toString('base64');

    const caption = await genreteCaption(base64Image)

    res.json({
      caption
    })
}


module.exports = {
    createPostController
}