# ModuleTemplate
1) Install Package
  $ npm install
2) Create .env file and add following environment variables:
  - Needed to connect to Cosmos DB
  -- QUERYCX_CONNECTION_STRING = "mongodb://..."
  - Needed for the test scripts 
  -- QUERYCX_DATABASE = "database-name"
  -- QUERYCX_COLLECTION = "database-collection"
3) npm run test