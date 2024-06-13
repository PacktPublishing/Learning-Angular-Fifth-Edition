import { User } from './user';

class Customer extends User {
  taxNumber: number;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}