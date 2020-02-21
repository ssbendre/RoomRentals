var express = require("express");
var router = express.Router();
var Users = require("../models/user").Users;

router.get("/:id", (req, res) => {
  Users.findById({ _id: req.params.id }, (err, Users) => {
    if (err) throw err;

    // object of the Users
    res.send(JSON.stringify(Users));
  });
});

router.get("/", (req, res) => {
  Users.find({}, (err, Owner) => {
    if (err) throw err;

    // object of the Users
    res.send(JSON.stringify(Owner));
  });
});

router.post("/", (req, res) => {
  var newUsers = Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  // save the Users
  newUsers.save((err, Users) => {
    if (err) throw err;

    res.send(JSON.stringify(req.body));
  });
});

router.put("/:id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    },
    (err, Users) => {
      if (err) throw err;

      // we have the updated Users returned to us
      res.send(Users);
      console.log(Users);
    }
  );
});

router.delete("/:id", (req, res) => {
  Users.findByIdAndRemove(req.query.id, err => {
    if (err) throw err;

    // we have deleted the Users
    res.send("Users deleted!");
  });
});

module.exports = router;
