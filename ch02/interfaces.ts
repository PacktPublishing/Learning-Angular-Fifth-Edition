interface Product {
  name: string;
  price: number;
  getCategories: () => string[];
  description?: string;
}

class Keyboard implements Product {
  name: string = 'Keyboard';
  price: number = 20;

  getCategories(): string[] {
    return ['Computing', 'Peripherals'];
  }
}

function save<T>(data: T) {
  localStorage.setItem('Product', JSON.stringify(data));
}

const mic: Partial<Product> = {
  name: 'Microphone',
  price: 67
};

type Microphone = Pick<Product, 'name' | 'price'>;
const microphone: Microphone = {
  name: 'Microphone',
  price: 67
};

interface Order {
  products: Record<string, number>;
}