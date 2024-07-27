import { createSlice } from '@reduxjs/toolkit'
export interface CounterState {
    count: number
} 
const initialState: CounterState = {
    count: 23,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {state.count += 1},
    decrement: (state) => {state.count -= 1},

  },
}) 
export const { increment, decrement } = counterSlice.actions // useDispatch --> دستیابی مقادیر

export default counterSlice.reducer // useSelector مقدار این خط رو میاره 