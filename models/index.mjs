import sequelizePackage from 'sequelize';
import allConfig from '../config/config.mjs';

import initUserModel from './user-model.mjs';
import initGameModel from './games-model.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
