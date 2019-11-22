// const aComment = require("../models/CommentSchema");
const PreForm = require("../Models/mailSchema");

// getAllComments = (req, res) => {
//   console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");

//   aComment
//     .find()
//     .then(newForm => res.status(200).send(newForm))
//     .catch(err => res.status(400).send(err));
// };

postPreForm = (req, res) => {
  if (!req.body) {
    console.log("there is no body to send");
    return res.status(400).json({
      success: false,
      error: "There is an error on get all comments"
    });
  }
  const newForm = new PreForm(req.body);

  newForm
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: newForm._id,
        message: "Form submitted!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "Form not created!"
      });
    });
};

module.exports = {
  // getAllComments,
  postPreForm
  // postComment
};
