export interface IPassengersForm {
  passengers: IPassenger[];
  contacts: IPassengersContacts;
}

interface IPassengersContacts {
  country: string;
  phone: string;
  email: string;
  cardNumber: string;
}

export interface IPassenger {
  firstName: string;
  lastName: string;
  gender: string;
  date: Date;
  specialAssistance: boolean;
  baggage: boolean;
}
