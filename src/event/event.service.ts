import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventRepository } from './event.repository';
import { CreateEventPayload } from './payload/create-event.payload';
import { EventDto } from './dto/event.dto';
import { CreateEventData } from './type/create-event-data.type';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async createEvent(payload: CreateEventPayload): Promise<EventDto> {
    const host = await this.eventRepository.getHostById(payload.hostId);
    if (!host) {
      throw new NotFoundException('해당 호스트는 존재하지 않는 유저입니다.');
    }

    const city = await this.eventRepository.getCityById(payload.cityId);
    if (!city) {
      throw new NotFoundException('해당 이벤트의 도시가 존재하지 않습니다.');
    }

    const category = await this.eventRepository.getCategoryById(
      payload.categoryId,
    );
    if (!category) {
      throw new NotFoundException(
        '해당 이벤트의 카테고리가 존재하지 않습니다.',
      );
    }

    const createData: CreateEventData = {
      hostId: payload.hostId,
      title: payload.title,
      description: payload.description,
      categoryId: payload.categoryId,
      cityId: payload.cityId,
      startTime: payload.startTime,
      endTime: payload.endTime,
      maxPeople: payload.maxPeople,
    };

    const event = await this.eventRepository.createEvent(createData);

    return EventDto.from(event);
  }
}
