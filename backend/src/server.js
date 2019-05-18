/**
 * @author Filippo Finke
 */
const DB_NAME = "app";
const MONGODB = "mongodb://mongo1:27017,mongo2:27018/" + DB_NAME + "?replicaSet=rs0";
const PORT = 1337;

var http = require('http');
var os = require('os');
var mongodb = require('mongodb')
var db;
var message = "";

function connect() {
  var mongo = mongodb.MongoClient;
  mongo.connect(MONGODB, {
    useNewUrlParser: true,
    reconnectTries: 5,
    reconnectInterval: 50,
  }, function(err, database) {
    if (err) {
      message = "Error connecting to the mongodb server! " + err;
      console.log("Error connecting to the mongodb server!");
    }
    else
    {
      db = database.db(DB_NAME);
    }
  });
}
connect();

http.createServer(async function(req, res) {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*"
  });
  if (typeof db !== "undefined") {
    var object = {
      ip: req.connection.remoteAddress,
      url: req.url,
      timestamp: Math.floor(new Date() / 1000)
    };
    await insert(object).then(async function(result) {
      await getRequests().then(function(result) {
        var count = result.length;
        message = "Requests: " + count;
      }, function(err) {
        message = "Error getting requests! " + err;
        connect();
      });
    }, function(err) {
      message = "Error inserting request! " + err;
      connect();
    });
  }
  else
  {
    connect();
  }

  var response = {
    hostname: os.hostname(),
    message: message
  };
  res.end(JSON.stringify(response));

}).listen(8080);


async function getRequests() {
  return new Promise(function(resolve, reject) {
    db.collection("requests").find({}).toArray(function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

async function insert(object) {
  return new Promise(function(resolve, reject) {
    db.collection("requests").insertOne(object, function(err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}
