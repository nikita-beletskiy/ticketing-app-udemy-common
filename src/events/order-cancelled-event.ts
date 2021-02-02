import { Subjects } from './base/Subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: { id: string; version: number; ticket: { id: string } };
}
