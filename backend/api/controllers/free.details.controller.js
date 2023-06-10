const FreeDetails = require("../../models/FreeDetails");

const addFreeDetails = async (req, res) => {
  try {
    let {
      level,
      country,
      phoneNumber,
      city,
      desc,
      experience,
      formation,
      user,
    } = req.body;
    let profileImg = req.file.path ; 
    let newDetails = new FreeDetails({
      level,
      country,
      phoneNumber,
      city,
      desc,
      experience,
      formation,
      user,
      profileImage:profileImg
    });
    let result = await newDetails.save();
    return res.status(200).json({
      result: result,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

const getFreeDetails = async (req, res) => {
  let { id } = req.params;
  try {
    let result = await FreeDetails.findOne({ user: id });
    res.status(200).json({
      result: result,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addFreeDetails,
  getFreeDetails,
};
