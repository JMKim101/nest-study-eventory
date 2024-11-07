import { ApiProperty } from '@nestjs/swagger';
import { EventData } from '../type/event-data.type';

export class EventDto {
  @ApiProperty({
    description: 'Event ID',
    type: Number,
  })
  id!: number;

  @ApiProperty({
    description: 'Host ID',
    type: Number,
  })
  hostId!: number;

  @ApiProperty({
    description: 'Event title',
    type: String,
  })
  title!: string;

  @ApiProperty({
    description: 'Event description',
    type: String,
  })
  description!: string;

  @ApiProperty({
    description: 'Category ID',
    type: Number,
  })
  categoryId!: number;

  @ApiProperty({
    description: 'City ID',
    type: Number,
  })
  cityId!: number;

  @ApiProperty({
    description: 'Event start time',
    type: Date,
  })
  startTime!: Date;

  @ApiProperty({
    description: 'Event end time',
    type: Date,
  })
  endTime!: Date;

  @ApiProperty({
    description: 'Maximum number of people',
    type: Number,
  })
  maxPeople!: number;

  static from(event: EventData): EventDto {
    return {
      id: event.id,
      hostId: event.hostId,
      title: event.title,
      description: event.description,
      categoryId: event.categoryId,
      cityId: event.cityId,
      startTime: event.startTime,
      endTime: event.endTime,
      maxPeople: event.maxPeople,
    };
  }
}
