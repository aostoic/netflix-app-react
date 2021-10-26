# Netflix App React

[Movie Database API](https://netflix-api-example.herokuapp.com).
[netflix demo react link](https://netflix-app-react.herokuapp.com).

### Install

```bash
$ npm install
```

### Install BackEnd

[gitHub backEnd](https://github.com/aostoic/netflix-api).

follow the instructions

### Set environment variables

The `.env` configuration file is created for local executions only. The environment variables of the service must be added here, that is, values that can change over time.

```txt
REACT_APP_URLBACKEND = 'localhost:3030'
```

to have the 2 environments running local

or

```txt
REACT_APP_URLBACKEND = https://netflix-api-example.herokuapp.com
```

if you want you can also run the backend deployed in heroku

### Local Execution

```bash
$ npm run dev
```

Once the service is running, it will be accessible through `http://localhost:3000`.

you need to have the backend environment running
