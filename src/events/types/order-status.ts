export enum OrderStatus {
  // When the order has been created, but the ticket it is trying to order has not been reserved
  Created = 'created',

  // When the ticket the order is trying to reserve has already been reserved, when the user has cancelled the order or when the order expires before payment
  Cancelled = 'cancelled',

  // When the order has successfully reservered the ticket
  AwaitingPayment = 'awaiting:payment',

  // When the user has provided payment for the reserved ticket successfully
  Complete = 'complete'
}
