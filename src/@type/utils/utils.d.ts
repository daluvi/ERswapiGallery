declare namespace Utils {
  type GetId = (url: string) => number;
  type AddActiveClass = (index: number) => void;
  type GetIndexOfActiveInPagination = () => number;
}
export {
  Utils
};