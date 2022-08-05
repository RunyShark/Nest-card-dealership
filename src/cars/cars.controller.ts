import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return {
      car: this.carsService.findOnenById(id),
    };
  }

  @Post()
  AddNewCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  UpdateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() car,
  ) {
    return 'Patch';
  }

  @Delete(':id')
  DeleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return 'Delete';
  }
}
