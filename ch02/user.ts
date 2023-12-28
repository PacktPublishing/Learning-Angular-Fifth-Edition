export class User {
  private firstName: string = '';
  private lastName: string = '';
  private isActive: boolean = false;

  constructor(firstName: string, lastName: string, isActive: boolean = true) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  get active(): boolean {
    return this.isActive;
  }
}