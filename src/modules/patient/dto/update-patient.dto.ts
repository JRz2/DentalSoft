import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @ApiPropertyOptional({
        description: 'Estado del paciente (activo/inactivo)',
        example: 'true',
    })
    IsActive?: boolean;
}
