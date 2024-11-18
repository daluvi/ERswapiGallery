type results_commonProperties = {
  created: string,
  edited: string,
  url: string,
}

type transportation<Films, Pilots> = {
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  films: Films[],
  pilots: Pilots[],
}

type ResultVehicles<Films=string, Pilots=string> = results_commonProperties & transportation<Films, Pilots> & {
  vehicle_class: string,
}

type ResultStarships<Films=string, Pilots=string>  = results_commonProperties & transportation<Films, Pilots> & {
  hyperdrive_rating: string,
  MGLT: string,
  starship_class: string,
}

type ResultSpecies<Planets=string, Films=string, People=string> = results_commonProperties & {
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  skin_colors: string,
  hair_colors: string,
  eye_colors: string,
  average_lifespan: string,
  homeworld: Planets,
  language: string,
  films: Films[],
  people: People[],
}

type ResultPlanets<Films=string, Residents=string> = results_commonProperties & {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  films: Films[],
  residents: Residents[],
}

type ResultFilms<Species=string, Vehicles=string, StarShips=string, Characters=string, Planets=string> = results_commonProperties & {
  title: string,
  episode_id: number, 
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  species:    Species[],
  vehicles:   Vehicles[],
  starships:  StarShips[],
  characters: Characters[],
  planets:    Planets[],
}

type ResultCharacter<Planets=string, Species=string, Vehicles=string, StarShips=string, Films=string> = results_commonProperties & {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: Planets,
  species:    Species[],
  vehicles:   Vehicles[],
  starships:  StarShips[],
  films: Films[],
}

type StarWars_Response = {
  count: number,
  next: string | null,
  previous: string | null,
}

type StarWars_Response_people = StarWars_Response & {
  results: ResultCharacter[]
}
type ResultCharacter_processed = ResultCharacter<ResultPlanets[], ResultSpecies, ResultVehicles, ResultStarships, ResultFilms>
type StarWars_Response_people_processed = StarWars_Response & {
  results: ResultCharacter_processed[]
}

type StarWars_Response_films = StarWars_Response & {
  results: ResultFilms[]
}
type ResultFilms_processed = ResultFilms<ResultSpecies, ResultVehicles, ResultStarships, ResultCharacter, ResultPlanets>;
type StarWars_Response_films_processed = StarWars_Response & {
  results: ResultFilms_processed[]
}

type StarWars_Response_planets = StarWars_Response & {
  results: ResultPlanets[]
}
type ResultPlanets_processed = ResultPlanets<ResultFilms, ResultCharacter>
type StarWars_Response_planets_processed = StarWars_Response & {
  results: ResultPlanets_processed[]
}

type StarWars_Response_species = StarWars_Response & {
  results: ResultSpecies[]
}
type ResultSpecies_processed = ResultSpecies<ResultPlanets[], ResultFilms, ResultCharacter>
type StarWars_Response_species_processed = StarWars_Response & {
  results: ResultSpecies_processed[]
}

type StarWars_Response_starships = StarWars_Response & {
  results: ResultStarships[]
}
type ResultStarships_processed = ResultStarships<ResultFilms, ResultCharacter>;
type StarWars_Response_starships_processed = StarWars_Response & {
  results: ResultStarships_processed[]
}

type StarWars_Response_vehicles = StarWars_Response & {
  results: ResultVehicles[]
}
type ResultVehicles_processed = ResultVehicles<ResultFilms, ResultCharacter>;
type StarWars_Response_vehicles_processed = StarWars_Response & {
  results: ResultVehicles_processed[]
}

type StarWars_Response_minimal = StarWars_Response & {
  results: results_commonProperties[]
}

type ResultGroup = ResultCharacter | ResultFilms | ResultPlanets | ResultSpecies | ResultStarships | ResultVehicles | results_commonProperties;
type ResultGroup_processed = ResultCharacter_processed | ResultFilms_processed | ResultPlanets_processed | ResultSpecies_processed | ResultStarships_processed | ResultVehicles_processed;
type ResponseGroup = StarWars_Response_people | StarWars_Response_films | StarWars_Response_planets | StarWars_Response_species | StarWars_Response_starships | StarWars_Response_vehicles | StarWars_Response_minimal;
type ResponseGroup_processed = StarWars_Response_people_processed | StarWars_Response_films_processed | StarWars_Response_planets_processed | StarWars_Response_species_processed | StarWars_Response_starships_processed | StarWars_Response_vehicles_processed;
type GettingData = <TypoRes extends ResponseGroup | ResultGroup>(param: string, attempts?: number) => Promise<TypoRes>;
 
export {
  StarWars_Response_people,
  StarWars_Response_people_processed,
  StarWars_Response_films,
  StarWars_Response_films_processed,
  StarWars_Response_planets,
  StarWars_Response_planets_processed,
  StarWars_Response_species,
  StarWars_Response_species_processed,
  StarWars_Response_starships,
  StarWars_Response_starships_processed,
  StarWars_Response_vehicles,
  StarWars_Response_vehicles_processed,
  ResultFilms,
  ResultFilms_processed,
  ResultCharacter,
  ResultCharacter_processed,
  ResultPlanets,
  ResultPlanets_processed,
  ResultSpecies,
  ResultSpecies_processed,
  ResultStarships,
  ResultStarships_processed,
  ResultVehicles,
  ResultVehicles_processed,
  GettingData,
  ResultGroup,
  ResultGroup_processed,
  ResponseGroup,
  ResponseGroup_processed,
};