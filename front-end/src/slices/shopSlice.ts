import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    id:1,
    shopify_domain:'dat-nt2.myshopify.com',
    shop_owner:'DAT NT2'
  },
  reducers: {
    
  },
})

export default shopSlice.reducer