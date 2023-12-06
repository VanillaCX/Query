require('dotenv').config();

const { MongoClient } = require('mongodb');
const connectionString = process.env.QUERYCX_CONNECTION_STRING;
const mongoClient = new MongoClient(connectionString);


class Query {
    constructor({database, collection} = {}){
        this.database = mongoClient.db(database);
        this.collection = this.database.collection(collection);
    }

    static flattenDocument(document){
        return document;
    }

    static sanitiseQuery(query){
        // Do Validation checks of QUERY
        const valid = true;
        const error = new TypeError("Missing Query");
        const sanitised = (valid) ? query : null;

        if(!valid && error){
            throw error;
        }

        return sanitised;
    }

    static sanitiseDocument(document, {flatten = false} = {}){
        const valid = true;
        const error = new TypeError("Missing Query");
        const sanitised = (valid) ? document : null;

        if(!valid){
            throw error || new Error("SYNTAX_PROBLEM");
        }

        return (flatten) ? Query.flattenDocument(sanitised) : sanitised;
    }

    async countDocuments(filter){
        const sanitisedQuery = Query.sanitiseQuery(filter);
        
        return await this.collection.countDocuments(sanitisedQuery);
    }

    async insertOne(document){

        const sanitisedDocument = Query.sanitiseDocument(document);
        
        return await this.collection.insertOne(sanitisedDocument);
    }

    
    async findOne(filter){

        const sanitisedFilter = Query.sanitiseQuery(filter);
        
        return await this.collection.findOne(sanitisedFilter);
    }

    async updateOne(filter, docFrag){

        const sanitisedQuery = Query.sanitiseQuery(filter);
        const sanitisedDocument = Query.sanitiseDocument(docFrag, {flatten: true});

        return this.collection.updateOne(sanitisedQuery, {$set: sanitisedDocument});
        
    }

    async replaceOne(filter, docFrag){

        const sanitisedQuery = Query.sanitiseQuery(filter);
        const sanitisedDocument = Query.sanitiseDocument(docFrag);

        return this.collection.replaceOne(sanitisedQuery, sanitisedDocument);
        
    }
    
}


module.exports = { Query }