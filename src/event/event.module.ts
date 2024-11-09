import { Module } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  controllers: [EventController],
  providers: [EventService, EventRepository],
})
export class EventModule {}
