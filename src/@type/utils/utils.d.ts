declare namespace Utils {
  type GetId = (url: string) => number;
  type AddActiveClass = (index: number) => void;
  type GetIndexOfActiveInPagination = () => number;
  type OpenFlip = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, id: string) => void;
  type CloseFlip = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>, id: string) => void;
  type OnErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => void;
  type OnChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export {
  Utils
};