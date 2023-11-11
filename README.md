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

### Endpoints:  
- `POST/register`
- `POST/login`
- `GET/user`
- `GET/user/:id`
- `PUT/user/:id`
- `DELETE/user/:id`

&nbsp;

### 1. POST/register  
_Request :_

+ __body__
```json
{
  {
    "firstName": "String",
    "lastName": "String",
    "age": "Number",
    "gender": "String",
    "email": "String",
    "password": "String"
  }
}
```

_Response ( 201 - Created )_  
```json
{
  {
    "firstName": "foo",
    "lastName": "bar",
    "age": 20,
    "gender": "male",
    "email": "foobar@gmail.com",
  }
}
```

_Response ( 400 - Bad Request )_
```json
{
  "message": "Data required"
}
```

&nbsp;


### 2. POST/login  
_Request :_

+ __body__
```json
{
  {
    "email": "String",
    "password": "String"
  }
}
```

_Response ( 200 - Created )_ 
```json
{
  {
    "token": "foo.bar"
  }
}
```

_Response ( 400 - Bad Request )_
```json
{
  "message": "Data required"
}
```

_Response ( 404 - Not Found )_
```json
{
  "message": "Data not found"
}
```

_Response ( 401 - Unauthorized )_
```json
{
  "message": "Wrong email or password"
}
```

&nbsp;

## 3. GET/user
_Request :_

+ __headers :__
```json
{
  "token": "string"
}
```

+ __query ( filter ) :__
```json
{
  "age": "Number",
  "gender": "String"
}
```

_Response (200 - OK) :_
```json
[
    {
        "id": 1,
        "firstName": "foo",
        "lastName": "bar",
        "age": 20,
        "gender": "male",
        "email": "foobar@gmail.com",
        "createdAt": "2023-11-11T09:21:26.192Z",
        "updatedAt": "2023-11-11T09:21:26.192Z"
    }
]
```

&nbsp;

## 4. GET/user/:id
_Request :_

+ __headers :__
```json
{
  "token": "string"
}
```

_Response (200 - OK) :_
```json
{
    "id": 1,
    "firstName": "foo",
    "lastName": "bar",
    "age": 20,
    "gender": "male",
    "email": "foobar@gmail.com",
    "createdAt": "2023-11-11T09:21:26.192Z",
    "updatedAt": "2023-11-11T09:21:26.192Z"
}

```

&nbsp;

## 5. PUT/user/:id
_Request :_

+ __headers :__
```json
{
  "token": "string"
}
```

+ __body :__
```json
{
  "firstName": "String",
  "lastName": "String",
  "age": "Number",
  "gender": "String"
}
```

_Response (200 - OK) :_
```json
{
    "message": "user with id 1 updated"
}

```

&nbsp;


## 6. DELETE/user/:id
_Request :_

+ __headers :__
```json
{
  "token": "string"
}
```

_Response (200 - OK) :_
```json
{
    "message": "user with id 1 deleted"
}
```

&nbsp;

### Global Error
_Response (401 - Unauthorized)_

```json
{
  "message": " Unauthorized"
}
```

_Response ( 404 - Not Found )_
```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```




