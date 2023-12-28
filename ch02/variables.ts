// Primitive types
const product: string = 'Keyboard';
const price: number = 100;
const isActive: boolean = true;
const categories: string[] = ['Computing', 'Multimedia'];

// Any
let order: any;
function setOrderNo() {
  order = '0001';
}

// Custom types
type Categories = 'computing' | 'multimedia';
const category: Categories = 'computing';
