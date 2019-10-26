import {Entity, model, property} from '@loopback/repository';

@model()
export class Contact extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  constructor(data?: Partial<Contact>) {
    super(data);
  }
}

export interface ContactRelations {
  // describe navigational properties here
}

export type ContactWithRelations = Contact & ContactRelations;
