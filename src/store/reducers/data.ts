import {
  createSlice, 
  PayloadAction
} from "@reduxjs/toolkit";
import {Data as D} from "../../@type/store/reducers";

const initialState: D.InitialState = {
  count: 0,
  info: [],
  isLoading: false,
  next: null,
  previous: null,
};

const characters = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearInfo(state) {
      state.info = initialState.info;
    },
    saveDataPagination(state, action: {payload: {count: number, next: string | null, previous: string | null}}) {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    saveInfo(state, action: PayloadAction<D.StateGroup[]>) {
      action.payload.map((item) => state.info.push(item));
    },
    setIsLoading(state, action: PayloadAction<boolean>){
      state.isLoading = action.payload;
    },
  }
});

export const { 
  clearInfo,
  saveDataPagination,
  saveInfo,
  setIsLoading,
} = characters.actions;

export default characters.reducer;