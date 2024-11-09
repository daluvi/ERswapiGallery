import { 
  ResultCharacter_processed,
  ResultFilms_processed,
  ResultPlanets_processed,
  ResultSpecies_processed,
  ResultStarships_processed,
  ResultVehicles_processed,
} from "@typings/service";

declare namespace Data {
  type CharacterState = ResultCharacter_processed & {id?: number};
  type FilmsState =     ResultFilms_processed & {id?: number};
  type PlanetsState =   ResultPlanets_processed & {id?: number};
  type SpeciesState =   ResultSpecies_processed & {id?: number};
  type StarshipsState = ResultStarships_processed & {id?: number};
  type VehiclesState =  ResultVehicles_processed & {id?: number};

  type StateGroup = CharacterState | FilmsState | PlanetsState | SpeciesState | StarshipsState | VehiclesState;

  type InitialState = {
    info: StateGroup[],
    count: number,
    next: string | null,
    previous: string | null,
    isLoading: boolean,
  }
}
export {
  Data
};