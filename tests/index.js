const {Query} = require("../index.js");

const query = new Query({
    database: process.env.QUERYCX_DATABASE,
    collection: process.env.QUERYCX_COLLECTION
});

// FINDONE
(async () => {
    try {
        const result = await query.findOne({name: "VanillaCX"})
        console.log("findOne result:", result);
    
    } catch(error){
        console.log("findOne error", error);
    }
})();

// UPDATEONE
(async () => {
    try {
        const result = await query.updateOne({name: "VanillaCX"}, {site: "apple.com"})
        console.log("updateOne result:", result);
    
    } catch(error){
        console.log("updateOne error", error);
    }
})();

// REPLACEONE
(async () => {
    try {
        const result = await query.replaceOne({site: "apple.com"}, {name: "VanillaCX", site: "google.com"})
        console.log("replaceOne result:", result);
    
    } catch(error){
        console.log("replaceOne error", error);
    }
})();

// INSERTONE
(async () => {
    try {
        const result = await query.insertOne({name: "VanillaCX", site: "google.com"})
        console.log("insertOne result:", result);
    
    } catch(error){
        console.log("insertOne error", error);
    }
})();

// COUNTDOCUMENTS
(async () => {
    try {
        const result = await query.countDocuments({name: "VanillaCX", site: "google.com"})
        console.log("countDocuments result:", result);
    
    } catch(error){
        console.log("countDocuments error", error);
    }
})();
