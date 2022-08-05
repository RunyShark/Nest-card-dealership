import { Injectable, NotFoundException } from '@nestjs/common';
export interface Cars {
  id: number;
  brand: string;
  model: string;
}
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

  findOnenById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Card with id  '${id}' not found`);

    return car;
  }

  AddCar(car: Cars) {
    const newCar = this.cars.push(car);
    return newCar;
  }

  putCar(id: number, car: Cars) {
    const editCar = this.cars.find((car) => car.id === id);
    return editCar;
  }

  deleteCar(id: number) {
    this.cars.slice(id);
  }
}
