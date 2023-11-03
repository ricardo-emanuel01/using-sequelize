# Using Sequelize as a migration manager

## Install dependencies
`npm install --save sequelize sequelize-cli sqlite3`

## Initialize `sequelize-cli`
`npx sequelize-cli init`

The command above will generate the structure to work with Sequelize as **migration manager**.

    .
    ├── config
    |   └── config.json()
    |
    ├── migrations
    │   └── <id>-<command>.js
    │
    ├── models
    |   ├── index.js
    |   └── <model-name>.js
    |
    └── seeders


## Create a model and a migration
`npx sequelize-cli model:generate --name User --attributes name:string,email:string`

The command above will generate a new model on `./models`

## Run migrations
`npx sequelize-cli db:migrate`

That command will create the database and the tables in `./models`
