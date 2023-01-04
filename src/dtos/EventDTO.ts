export interface IEvent {
  id: string;
  title: string;
  img: string;
  description: string;
  city: string;
  state: string;
  address: string;
  date: string;
  isActive: boolean;
  organizer: {
    name: string;
    img: string;
    city: string;
    state: string;
  };
}
