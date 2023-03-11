import { createSlice, } from "@reduxjs/toolkit";
import { TableThunk } from "../Thunk/TableThunk";

let initState = {
  allData: [],
  dataTable: [],
  pageTarget: 1,
};

let tableReducer = createSlice({
  name: 'table',
  initialState: initState,
  reducers: {
    searchingID: (state, action) => {
      if (action.payload.id !== 'undefined') {
        state.dataTable = state.allData.filter((e) => e.unit_id === action.payload.id)
      }

      // else {

      //     changePage({ page: state.pageTarget })
      //   }
    },

    changePage: (state, action) => {
      state.pageTarget = action.payload.page
      if (action.payload.page * 5 < state.allData.length) {
        state.dataTable = state.allData.slice(action.payload.page * 5 - 5, action.payload.page * 5)

      }
      else {
        state.dataTable = state.allData.slice(state.allData.length - 5, state.allData.length)


      }

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(TableThunk.pending, (state, action) => {
        // console.log("loading");

      })
      .addCase(TableThunk.fulfilled, (state, action) => {
        state.allData = action.payload
        state.dataTable = action.payload.slice(0, 5)
        // console.log("fulfilled");

      })
      .addCase(TableThunk.rejected, (state, action) => {
        console.log("rejected");

      })

  }


})
export default tableReducer.reducer

export const { searchingID, changePage } = tableReducer.actions
