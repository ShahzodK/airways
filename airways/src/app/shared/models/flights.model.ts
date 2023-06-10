import { IDate } from "./date.model";

export interface IFlights {
    flight_name: string,
    flight_no: string,
    departure: string,
    destination: string,
    seats_amount: number,
    columns: number,
    rows: string,
    dates: IDate[]
}
