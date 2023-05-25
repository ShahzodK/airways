export interface IDate {
    flight_no: string
    date: Date,
    prices: {
      adult: string,
      child: string,
      infant: string
    }
    departure_time: string,
    arrival_time: string,
    duration: string
}
