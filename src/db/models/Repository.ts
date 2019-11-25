import { Model } from 'objection';
let GUID = require('node-uuid');

const Knex = require('knex')
const connection = require('../knexfile')

export class Repository extends Model {
  readonly id!: string;
  name!: string;
  created_at!: Date;
  updated_at!: Date;

  // Table name is the only required property.
  static tableName = 'repositories';

  constructor(name: string) {
    super();
    this.id = GUID.v4();
    this.name = name;
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      created_at: { type: 'Date' },
      updated_at: { type: 'Date' }
    }
  };
}