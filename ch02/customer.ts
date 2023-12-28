import { User } from './user';

export class Customer extends User {
  taxNumber: number;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}