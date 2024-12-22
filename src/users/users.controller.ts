import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

// @ApiTags("users")
@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) { }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
