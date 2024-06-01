import env from 'dotenv'
import envvar from 'env-var';

// require('dotenv').config();
// const {get} = require('env-var');

//con la nueva forma ES6
env.config();

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }