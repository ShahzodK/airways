export interface ISearchForm {
  tripType: string,
  departure: string,
  destination: string,
  start: Date | null,
  end?: Date | null,
  passengers: string
}