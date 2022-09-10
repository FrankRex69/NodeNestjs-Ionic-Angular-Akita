import { Module } from '@nestjs/common';
import { ProvaGeneraleService } from './prova-generale.service';
import { ProvaGeneraleController } from './prova-generale.controller';

@Module({
  controllers: [ProvaGeneraleController],
  providers: [ProvaGeneraleService]
})
export class ProvaGeneraleModule {}
