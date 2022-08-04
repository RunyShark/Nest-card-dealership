import { Injectable } from '@nestjs/common';
// export interface Cars {
//   id: number;
//   brand: string;
//   model: string;
// }
@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: 3,
      brand: 'Lambrohini',
      model: 'Infirno',
    },
  ];
  findAll() {
    return this.cars;
  }

  findOnenById(id) {
    return this.cars[id];
  }
}
