# User Dummy API

## > JSON Web Server Ver.

#### How to run API on Localhost  

+ **Install Needed Package**
```
npm install -g json-server
```

+ **Open Directory**
```
cd json-web-server
```

+ **Run Server**
```
json-server --watch user-dummy.json
```

&nbsp;

## > Sequelize Ver.

__*Info: I'm using Dbeaver for GUI Database Management__

#### How to run API on Localhost  

+ **Install Sequelize Globally**
```
npm install -g sequelize-cli
```

+ **Install Nodemon Globally**
```
npm install -g nodemon
```

+ **Open Directory**
```
cd postgres-sequelize-dbeaver
```

+ **Set Config**
```json
{
  "development": {
    "username": "postgres", // <---- username in dbeaver
    "password": "postgres", // <---- password in dbeaver
    "database": "user_dummy_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

+ **Install Needed Package**
```
npm install
```

+ **Create Database**
```
sequelize db:create
```

+ **Migrate Sequelize Model**
```
sequelize db:migrate
```

+ **Seed User Table**
```
sequelize db:seed:all
```

+ **Run server using Nodemon**  
you can run it by using Nodemon or Node
```
nodemon app.js
```
  or
```
node --watch app.js
```   


