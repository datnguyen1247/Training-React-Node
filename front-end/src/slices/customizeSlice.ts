/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customizationApi from '../api/customizationApi';
import { ICustomizeStyle } from '../types';
import { DEFAULT_CUSTOMIZE } from '../constants';


export const fetchDataCustomize = createAsyncThunk('customize/fetchData', async () => {
  const response = await customizationApi.get();
  return response.data;
});



const initialState: ICustomizeStyle = {
  style:  DEFAULT_CUSTOMIZE,
}

const customizeSlice = createSlice({
  name: 'customize',
  initialState,
  reducers: {
    updateCustomize(state, action) {
      const data = {...state.style,...action.payload}
      state.style = data
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataCustomize.fulfilled, (state, action:any) => {
      console.log(action.payload)
     
       state.style = action.payload || DEFAULT_CUSTOMIZE
    })
  },
})

export const { updateCustomize } = customizeSlice.actions
export default customizeSlice.reducer