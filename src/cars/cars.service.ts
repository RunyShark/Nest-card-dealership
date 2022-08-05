import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 'a6481146-b03a-4109-9166-731f175ec6bd',
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: '384d5e42-d515-4328-85f5-9349ff199f37',
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: '45836168-4461-4b65-9862-9bf1d0c6ff96',
      brand: 'Lambrohini',
      model: 'Infirno',
    },
  ];
  findAll() {
    return this.cars;
  }

  findOnenById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Card with id  '${id}' not found`);

    return car;
  }

  AddCar(car: CreateCarDto) {
    // car.id = uuid();
    // this.cars.push(car);
    // return this.cars;
  }

  putCar(id: string, car) {
    const editCar = this.cars.find((car) => car.id === id);
    return editCar;
  }

  deleteCar(id: string) {
    //this.cars.slice(id);
  }
}
