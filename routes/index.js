const router = require("express").Router();
const apiRoutes = require("./api");
const { Traveler, Location, Trip } = require("../models");

router.use("/api", apiRoutes);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", content: "HELLO WORLD!" });
});

router.get("/travelers", async (req, res) => {
  const travelersBad = await Traveler.findAll();
  const travelers = travelersBad.map((a) => a.get({ plain: true }));
  console.log(travelers);
  res.render("travelers", { travelers });
});

module.exports = router;
