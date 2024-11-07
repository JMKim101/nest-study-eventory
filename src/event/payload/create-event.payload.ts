import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateEventPayload {
  @IsInt()
  @ApiProperty({
    description: 'host ID',
    type: Number,
  })
  hostId!: number;
}
