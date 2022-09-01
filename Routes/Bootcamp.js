const express = require("express");
const router = express.Router();
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../Controllers/Bootcamps");

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "Show all bootcamps" });
// });

// router.get("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Show bootcamps ${req.params.id}` });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "create a new bootcamp" });
// });

// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `update bootcamp ${req.params.id}` });
// });
// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// });

module.exports = router;
