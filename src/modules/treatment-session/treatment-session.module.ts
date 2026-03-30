import { Module } from '@nestjs/common';
import { TreatmentSessionService } from './treatment-session.service';
import { TreatmentSessionController } from './treatment-session.controller';

@Module({
  controllers: [TreatmentSessionController],
  providers: [TreatmentSessionService],
  exports: [TreatmentSessionService],
})
export class TreatmentSessionModule {}
