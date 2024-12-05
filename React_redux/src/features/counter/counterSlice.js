import { createSlice } from "@reduxjs/toolkit";
const initialstate = { count: 0 };
const counterslice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (aditya) => {
        aditya.count-=1;
    },
    reset: (state) => {
        state.count=0;
    },
  },
});

export const {increament , decreament , reset}=counterslice.actions;


const counterreducer = counterslice.reducer;
export default counterreducer;
