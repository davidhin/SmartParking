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

// Getting favs for account ID
router.post('/getFavsforAccountID.json', function(req, res, next) {
   let account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT parking_id from favourites where account_id=?;";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Insert favourite into database
router.post('/addFavourite.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let parking_id = req.body.parking_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "REPLACE into favourites values(?, ?);";
    connection.query(query, [account_id, parking_id], function(err, results) {
      res.send(''); // send response
    });
  });
});

// Remove favourite into database
router.post('/removeFavourite.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let parking_id = req.body.parking_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "DELETE from favourites where account_id=? and parking_id=?";
    connection.query(query, [account_id, parking_id], function(err, results) {
      res.send(''); // send response
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

// Sending Reviews
router.post('/postingReview.json', function(req, res, next) {
   let parking_id = req.body.parking_id;
   let account_id = req.body.account_id;
   let stars = req.body.stars;
   let review = req.body.review;
   let name = req.body.name;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "INSERT into reviews values(?, ?, ?, ?, ?)";
    connection.query(query, [account_id, parking_id, name, stars, review], function(err, results) {
      res.send(''); // send response
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

// Getting account name with account id
router.post('/getAccountNameWithID.json', function(req, res, next) {
   let account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT name from accounts where account_id=?";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Change Account Name
router.post('/changeAccountName.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let name = req.body.name;
   let password = req.body.password;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "UPDATE accounts SET name=? where account_id=? and password=?";
    connection.query(query, [name, account_id, password], function(err, results) {
      res.send(''); // send response
    });
  });
});

// Change Account Email
router.post('/changeAccountEmail.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let email = req.body.email;
   let password = req.body.password;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "UPDATE accounts SET email=? where account_id=? and password=?";
    connection.query(query, [email, account_id, password], function(err, results) {
      res.send(''); // send response
    });
  });
});

// Change Account Password
router.post('/changeAccountPassword.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let newPassword = req.body.newPassword;
   let password = req.body.password;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "UPDATE accounts SET password=? where account_id=? and password=?";
    connection.query(query, [newPassword, account_id, password], function(err, results) {
      res.send(''); // send response
    });
  });
});

// Getting past sessions tied to account
router.post('/getPastSessionWithID.json', function(req, res, next) {
   let account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;

    var query = "select se.date, se.startTime, se.endTime, se.cost, ps.type, ps.type, ps.address, ps.parking_id from session as se inner join parking_spaces as ps on se.parking_id = ps.parking_id where se.account_id=?;";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Getting payment options
router.post('/getPaymentOptions.json', function(req, res, next) {
    var account_id = req.body.account_id;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT payment_option from payment_options where account_id=?";
    connection.query(query, [account_id], function(err, results) {
      res.json(results); // send response
    });
  });
});

// Getting payment options
router.post('/addPaymentOption.json', function(req, res, next) {
    var account_id = req.body.account_id;
    var payment_option = req.body.payment_option;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "REPLACE into payment_options values(?, ?)";
    connection.query(query, [account_id, payment_option], function(err, results) {
      res.send(''); // send response
    });
  });
});

// Create new session
router.post('/createNewSession.json', function(req, res, next) {
   let account_id = req.body.account_id;
   let parking_id = req.body.parking_id;
   let startTime = req.body.startTime;
   let endTime = req.body.endTime;
   let date = req.body.date;
   let cost = req.body.cost;

  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "INSERT into session values(?, ?, ?, ?, ?, ?)";
    connection.query(query, [date, startTime, endTime, account_id, parking_id, cost], function(err, results) {
      res.json(results); // send response
    });
  });
});

module.exports = router;
