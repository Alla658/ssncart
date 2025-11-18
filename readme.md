### Env Variables

Rename the `.env.example` file to `.env` and add the following
Create a db called mydb in mongodb compass. (add users as default collection)

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
JWT_SECRET=ABC!abc@123
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install

cd frontend
npm install
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy

### Run

```
# Run frontend (:3000) & backend (:5000)

```
npm run dev
```
