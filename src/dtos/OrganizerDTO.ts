import { IEvent } from "./EventDTO";

export interface IOrganizer {
  id: string;
  name: string;
  img: string;
  entityType: "universidade" | "empresa";
  city: string;
  state: string;
  about: string;
  events?: IEvent[];
}
