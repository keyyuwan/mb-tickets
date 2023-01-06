export interface IUserTickets {
  id: string;
  number: number;
  event: {
    title: string;
    img: string;
    date: string;
    address: string;
    isActive: boolean;
  };
  organizer: {
    name: string;
  };
  ticket: {
    lot: number;
  };
  user: {
    name: string;
    surname: string;
    cpf: string;
  };
}
