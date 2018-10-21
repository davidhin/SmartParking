var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Sending parking spaces
router.get('/getSpaces.json', function(req, res, next) {
  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT * from parking_spaces";
    connection.query(query, function(err, results) {
      res.json(results); // send response
    });
  });
});

// Sending Reviews
router.post('/getReviewByParkingID.json', function(req, res, next) {
   let parking_id = req.body.parking_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT * from reviews where parking_id=?";
    connection.query(query, [parking_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Getting account with email and password
router.post('/getAccount.json', function(req, res, next) {
   let email = req.body.email;
   let password = req.body.password;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT * from accounts where email=? and password=?";
    connection.query(query, [email, password], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Getting account with account id
router.post('/getAccountWithID.json', function(req, res, next) {
   let account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT * from accounts where account_id=?";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Getting past sessions tied to account
router.post('/getPastSessionWithID.json', function(req, res, next) {
   let account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;

    var query = "select se.date, se.startTime, se.endTime, se.cost, ps.type, ps.type, ps.address from session as se inner join parking_spaces as ps on se.parking_id = ps.parking_id where se.account_id=?;";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

module.exports = router;
