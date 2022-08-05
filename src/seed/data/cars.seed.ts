import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interface/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'c8',
  },
  {
    id: uuid(),
    brand: 'Larborhini',
    model: 'Gallardo',
  },
];
