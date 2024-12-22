import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from './logger/logger.module';
import { LoggerMiddleware } from './middelware/logger.middleware';

@Module({
  imports: [AuthModule,

    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: "mysql",
      "database": process.env.DATABASE,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      entities: [User],
      synchronize: true,
    }),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: {
        expiresIn: "1h"
      }
    })
    ,

    UsersModule,

    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
