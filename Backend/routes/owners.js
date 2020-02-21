var express = require("express");
var router = express.Router();
var Owners = require("../models/owner").Owners;

router.get("/:id", (req, res) => {
  Owners.findById({ _id: req.params.id }, (err, Owners) => {
    if (err) throw err;

    // object of the Owners
    res.send(JSON.stringify(Owners));
  });
});

router.get("/", (req, res) => {
  Owners.find({}, (err, Owner) => {
    if (err) throw err;

    // object of the Owners
    res.send(JSON.stringify(Owner));
  });
});

router.post("/", (req, res) => {
  var newOwners = Owners({
    name: req.body.name,
    contact: req.body.contact,
    createdon: req.body.createdon,
    modified: req.body.modified
  });

  // save the Owners
  newOwners.save((err, Owners) => {
    if (err) throw err;

    res.send(JSON.stringify(req.body));
  });
});

router.put("/:id", (req, res) => {
  Owners.findByIdAndUpdate(
    req.body._id,
    {
      name: req.body.name,
      contact: req.body.contact,
      createdon: req.body.createdon,
      modified: Date.now()
    },
    (err, Owners) => {
      if (err) throw err;

      // we have the updated Owners returned to us
      res.send(Owners);
      console.log(Owners);
    }
  );
});

router.delete("/:id", (req, res) => {
  Owners.findByIdAndRemove(req.query.id, err => {
    if (err) throw err;

    // we have deleted the Owners
    res.send("Owners deleted!");
  });
});

module.exports = router;
