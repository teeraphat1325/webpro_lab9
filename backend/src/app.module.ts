import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureModule } from './temperature/temperature.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TemperatureModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
