import { createSlice } from '@reduxjs/toolkit'

const customizeSlice = createSlice({
  name: 'customize',
  initialState: {
    style:{
      input_width:'333',
      input_height:'52',
      input_border:'solid',
      input_border_radius:'2px',
      input_background_color:'#fff',
      button_variant:'plain',
      border_width:'1px',
      border_color:'#ccc',
      button_width:'1',
      button_height:'1',
      button_border:'dotted',
      button_background_color:'#ccc',
      button_text_color:'#000',
      direction:"vertical"
    }
  },
  reducers: {
    updateCustomize(state, action) {
      return {
        style: {
          ...state.style,
          ...action.payload,
        }
      }
    },
  },
})

export const { updateCustomize } = customizeSlice.actions
export default customizeSlice.reducer