import {Sequelize} from "sequelize";
require('dotenv').config();

const 
{
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DIALECT
}=process.env;

const cnx = new Sequelize(
                    DATABASE_NAME, 
                    DATABASE_USERNAME, 
                    DATABASE_PASSWORD, {
                        dialect:DIALECT
                    }
                );


export default cnx;
