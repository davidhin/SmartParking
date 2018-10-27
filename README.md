# Running App

1. `npm start`
2. Use `test` as email and password

# Initialise node

Run `npm install` if node_modules is not present

# Setting up the database

1. run `sudo npm install --save mysql` if you haven't already done so
2. Paste this code in your `app.js`. Change YOURPASSWORDHERE to your password used to access your mysql. 

```mysql
/* use mysql in this app */
var mysql = require('mysql');
var dbConnectionPool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'YOURPASSWORDHERE',
  database: 'Letoh'
});
app.use(function(req, res, next) {
  req.pool = dbConnectionPool;
  next();
});
```

3. **Important:** untrack app.js from git. This will prevent merge clashing since we have different passwords. Do this by using the command

```
git rm --cached app.js
```

4. Optional: Test that everything works. Start the server and go to http://localhost:3000/dbtest.json. You should see the users in the database. 



# Importing/Exporting the Database

1. Move sps.sql into the home directory
2. To import the database run the following command

```
mysql -u root -p --host=127.0.0.1 < sps.sql
```

3. If you want to export the database, do:

```
mysqldump -u root -p --host=127.0.0.1 --databases SPS > sps.sql
```

