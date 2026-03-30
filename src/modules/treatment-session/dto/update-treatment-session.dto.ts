import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateTreatmentSessionDto } from './create-treatment-session.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTreatmentSessionDto extends PartialType(CreateTreatmentSessionDto) {
    @ApiPropertyOptional({ description: 'Marcar la sesión de tratamiento como completada' })
    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean;
}
