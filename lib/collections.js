import { Mongo } from 'meteor/mongo';

const To_dos = new Mongo.Collection('to-dos');

export {To_dos};
