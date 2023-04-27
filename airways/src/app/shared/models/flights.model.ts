export interface IFlights {
    flight_name: string,
    flight_no: string,
    seats_amount: number,
    columns: number,
    rows: string[],
    dates: {
      date: Date,
      prices: {
        adult: string,
        child: string,
        infant: string
      }
    }[]
}
