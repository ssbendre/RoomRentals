var express = require("express");
var router = express.Router();
var Rooms = require("../models/owner").Rooms;

router.get("/:id", (req, res) => {
  Rooms.findById({ _id: req.params.id }, (err, Rooms) => {
    if (err) throw err;

    // object of the Rooms
    res.send(JSON.stringify(Rooms));
  });
});

router.get("/", (req, res) => {
  Rooms.find({}, (err, Owner) => {
    if (err) throw err;

    // object of the Rooms
    res.send(JSON.stringify(Owner));
  });
});

router.post("/", (req, res) => {
  var newRooms = Rooms({
    description: req.body.description,
    location: req.body.location,
    rent: req.body.rent,
    owner: req.body.owner
  });

  // save the Rooms
  newRooms.save((err, Rooms) => {
    if (err) throw err;

    res.send(JSON.stringify(req.body));
  });
});

router.put("/:id", (req, res) => {
  Rooms.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description,
      location: req.body.location,
      rent: req.body.rent,
      owner: req.body.owner
    },
    (err, Rooms) => {
      if (err) throw err;

      // we have the updated Rooms returned to us
      res.send(Rooms);
      console.log(Rooms);
    }
  );
});

router.delete("/:id", (req, res) => {
  Rooms.findByIdAndRemove(req.query.id, err => {
    if (err) throw err;

    // we have deleted the Rooms
    res.send("Rooms deleted!");
  });
});

module.exports = router;
