/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import shopApi from '../api/shopApi';
import { ICustomizeStyle } from '../types';


export const fetchDataCustomize = createAsyncThunk('customize/fetchData', async () => {
  const response = await shopApi.getOne();
  return response.data;
});



const initialState: ICustomizeStyle = {
  style:  {
    input_width: 0,
    input_height: 0,
    input_border: '',
    input_border_radius: 0,
    input_background_color: '',
    button_variant: '',
    border_width: 0,
    border_color: '',
    button_width: 0,
    button_height: 0,
    button_border: '',
    button_background_color: '',
    button_text_color: '',
    direction: '',
    css:''
  },
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
      state.style = action.payload.customization
    })
  },
})

export const { updateCustomize } = customizeSlice.actions
export default customizeSlice.reducer