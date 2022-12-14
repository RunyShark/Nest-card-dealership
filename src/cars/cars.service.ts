import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: 'a6481146-b03a-4109-9166-731f175ec6bd',
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];
  findAll() {
    return this.cars;
  }

  findOnenById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Card with id  '${id}' not found`);

    return car;
  }

  AddCar(CreateCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...CreateCarDto,
    };
    this.cars.push(car);
    return car;
  }

  putCar(id: string, update: UpdateCarDto) {
    let updateCar = this.findOnenById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === update.id) {
        updateCar = {
          ...updateCar,
          ...UpdateCarDto,
          id,
        };
        return updateCar;
      }
      return car;
    });
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
