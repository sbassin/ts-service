import { Model } from 'objection';

export default class Dictionary extends Model {
  readonly id!: number;
  word!: string;
  created_at!: Date;
  updated_at!: Date;

  // Table name is the only required property.
  static tableName = 'dictionary';

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      word: { type: 'string' },
      created_at: { type: 'Date' },
      updated_at: { type: 'Date' }
    }
  };
}