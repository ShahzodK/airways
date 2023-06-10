export interface ITicket {
    arrival_time: string,
    date: Date,
    departure_time: string,
    disabled: boolean,
    duration: string,
    price: string,
    flight_no: string,
    passengers: string[],
    seats: string[],
    reserved_tickets: string[]
}