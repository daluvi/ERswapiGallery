import {ResultGroup} from "../service/service";
import {Data as D} from "../store/reducers";

declare namespace CardCharacter {
  type Props = {id: string, item: D.CharacterState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace CardFilms {
  type Props = {id: string, item: D.FilmsState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace CardPlanets {
  type Props = {id: string, item: D.PlanetsState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace CardSpecies {
  type Props = {id: string, item: D.SpeciesState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace CardStarships {
  type Props = {id: string, item: D.StarshipsState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace CardVehicles {
  type Props = {id: string, item: D.VehiclesState};
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace InfoExtra {
  type Props = { info: ResultGroup[], title?: string};
  // type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  // type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

declare namespace Footer {
  type Props = {data: {count: number, next: string | null, previous: string | null}};
}

declare namespace Header {
  type Props = {data: {count: number, next: string | null, previous: string | null}};
  type OnChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  InfoExtra,
  Footer,
  Header,
  Pagination,
};