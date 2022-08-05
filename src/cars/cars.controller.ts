import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
export interface Cars {
  id: number;
  brand: string;
  model: string;
}
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    return {
      car: this.carsService.findOnenById(+id),
    };
  }

  @Post()
  AddNewCar(@Body() car: any) {
    return car;
  }

  @Patch(':id')
  UpdateCar(@Body() id: number, car: Cars) {
    return 'Patch';
  }

  @Delete(':id')
  DeleteCar(@Param('id', ParseIntPipe) id: number) {
    return 'Delete';
  }
}
