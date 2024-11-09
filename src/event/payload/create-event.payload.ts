import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, Min } from 'class-validator';

export class CreateEventPayload {
  @IsInt()
  @ApiProperty({
    description: 'Host ID',
    type: Number,
  })
  hostId!: number;

  @IsString()
  @ApiProperty({
    description: 'Event title',
    type: String,
  })
  title!: string;

  @IsString()
  @ApiProperty({
    description: 'Event description',
    type: String,
  })
  description!: string;

  @IsInt()
  @ApiProperty({
    description: 'Category ID',
    type: Number,
  })
  categoryId!: number;

  @IsInt()
  @ApiProperty({
    description: 'City ID',
    type: Number,
  })
  cityId!: number;

  @IsDate()
  @ApiProperty({
    description: 'Event start time',
    type: Date,
  })
  startTime!: Date;

  @IsDate()
  @ApiProperty({
    description: 'Event end time',
    type: Date,
  })
  endTime!: Date;

  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'Maximum number of people',
    type: Number,
  })
  maxPeople!: number;
}
