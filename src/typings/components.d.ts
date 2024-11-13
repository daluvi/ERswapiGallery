import {ResultGroup} from "@typings/service";
import {Data as D} from "@typings/reducers";
declare namespace CardCharacter {
  type Props = {id: string, item: D.CharacterState};
}

declare namespace CardFilms {
  type Props = {id: string, item: D.FilmsState};
}

declare namespace CardPlanets {
  type Props = {id: string, item: D.PlanetsState};
}

declare namespace CardSpecies {
  type Props = {id: string, item: D.SpeciesState};
}

declare namespace CardStarships {
  type Props = {id: string, item: D.StarshipsState};
}

declare namespace CardVehicles {
  type Props = {id: string, item: D.VehiclesState};
}

declare namespace Feature {
  type Props = {title: string, value: string, long?: boolean}
}

declare namespace Footer {
  type Props = {data: {count: number, next: string | null, previous: string | null}};
}

declare namespace Header {
  type Props = {data: {count: number, next: string | null, previous: string | null}};
  
}

declare namespace InfoExtra {
  type Props = { info: ResultGroup[], title?: string};
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace Pagination {
  type Props = {data: {count: number, next: string | null, previous: string | null}};
}

export {
  CardCharacter,
  CardFilms,
  CardPlanets,
  CardSpecies,
  CardStarships,
  CardVehicles,
  Feature,
  Footer,
  Header,
  InfoExtra,
  Pagination,
};