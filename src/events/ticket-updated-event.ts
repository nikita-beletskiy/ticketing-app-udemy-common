import { Subjects } from './base/Subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: { id: string; title: string; price: number; userId: string };
}
