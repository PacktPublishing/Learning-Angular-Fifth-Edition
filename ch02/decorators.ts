function CreationDate(iso: boolean) {
  return function(target: Function) {
    return class extends Cart {
      constructor() {
        super();
        const date = new Date();
        this.created = iso ? date.toISOString() : date.toString()
      }
    };
  }
}

function Persist(target: any, key: string) {
  localStorage.setItem(key, new Date().toString());
}

function Discount(amount: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalFunc = descriptor.value;
    descriptor.value = (...args: number[]) => {
      const discount = args[0] - (args[0] / 100) * amount;
      return originalFunc.apply(this, [discount, args[1]]);
    };
  }
}

function Log(target: any, key: string, index: number) {
  console.log(`Param ${index} in method ${key} has been decorated`);
}

@CreationDate(true)
class Cart {
  created: string;
  
  @Persist
  id: number;

  @Discount(10)
  calculateCost(price: number, @Log quantity: number) {
    const cost = price * quantity;
  }
}