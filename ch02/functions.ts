function getProduct(): string {
  return 'Keyboard';
}

function getFullname(firstName: string, lastName: string): string {
  return `${this.firstName} ${this.lastName}`;
}

function printFullname(firstName: string, lastName: string): void {
  console.log(`${this.firstName} ${this.lastName}`);
}

function addtoCart(productId: number, quantity?: number) {
  const product = {
    id: productId,
    qty: quantity ?? 1
  };
}