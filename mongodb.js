//CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(databaseName);

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectId("61f15635526cb3dbc3c666aa"),
  //     },
  //     {
  //       $set: {
  //         name: "abc",
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  db.collection("users")
    .deleteMany({ name: "abc" })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
