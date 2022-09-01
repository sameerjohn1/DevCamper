const Bootcamp = require("../model/Bootcamp");

// @desc Get all bootcamps
// @Routes Get/api/v1/bootcamps
// @acess Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc Get Single bootcamps
// @Routes Get/api/v1/bootcamps
// @acess Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamps ${req.params.id}` });
};

// @desc Create New bootcamps
// @Routes post/api/v1/bootcamp
// @acess Public

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  //   console.log(req.body);
};

// @desc Update bootcamps
// @Routes put/api/v1/bootcamp/:id
// @acess Public

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamps ${req.params.id}` });
};

// @desc Delete bootcamps
// @Routes Delete/api/v1/bootcamp/:id
// @acess Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamps ${req.params.id}` });
};
