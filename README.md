# QueryCX Package
## Installation
#### Install Package
       $ npm install
#### Create .env file and add following environment variables:
      // Required:
      COSMOS_CONNECTION_STRING = "mongodb://your/connection/string/here/..."
  
      // Optional (required for test scripts only)
      TEST_DATABASE = "database-name"
      TEST_COLLECTION = "collection-name"

## Test Script
Make sure you have created the .env file and installed the package (See [Installation](#Installation)).

    $ npm run test
    
## Examples
    // Import Package
    const {Query} = require("@VanillaCX/QueryCX");

    // Create a MongoDB client
    const query = new Query({
        database: process.env.TEST_DATABASE,
        collection: process.env.TEST_COLLECTION
    });
### FindOne
    try {
        const result = await query.findOne({name: "VanillaCX"});
        console.log("findOne result:", result);

    } catch(error){
        console.log("findOne error", error);
    }
### UpdateOne
    try {
        const result = await query.updateOne({name: "VanillaCX"}, {site: "apple.com"});
        console.log("updateOne result:", result);

    } catch(error){
        console.log("updateOne error", error);
    }
### ReplaceOne
    try {
        const result = await query.replaceOne({site: "apple.com"}, {name: "VanillaCX", site: "google.com"});
        console.log("replaceOne result:", result);

    } catch(error){
        console.log("replaceOne error", error);
    }
### InsertOne
    try {
        const result = await query.insertOne({name: "VanillaCX", site: "google.com"});
        console.log("insertOne result:", result);

    } catch(error){
        console.log("insertOne error", error);
    }
### CountDocuments
    try {
        const result = await query.countDocuments({name: "VanillaCX", site: "google.com"});
        console.log("countDocuments result:", result);

    } catch(error){
        console.log("countDocuments error", error);
    }