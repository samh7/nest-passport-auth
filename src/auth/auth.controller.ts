import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Request } from 'express';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("auth")
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @ApiOperation({ summary: "Logins users using email and password" })
  @ApiResponse({
    status: 201,
    description: "It will return the jwt token of the user",
    schema: {
      example: 'your-jwt-token-here',
    },
  })
  @ApiBody({
    description: 'Login credentials for the user',
    type: CreateAuthDto,
  })
  @Post("login")
  @UseGuards(LocalGuard)
  async login(@Req() req: Request) {
    return req.user
  }

  @ApiOperation({ summary: "Gets the staus of a user's jwt token" })
  @ApiResponse({
    status: 200,
    description: "It will return the decoded user object from the jwt token",
    schema: {
      example: {
        "id": 123456789,
        "email": "example@email.com",
        "iat": 1734898940,
        "exp": 1734902540
      }
    },
  })
  @Get("status")
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    return req.user
  }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @ApiOperation({ summary: "Returns a string for now" })
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
