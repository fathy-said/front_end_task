import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let TableThunk = createAsyncThunk('table/TableThunk', async (arg, ThunkApi) => {
  let { rejectWithValue } = ThunkApi

  try {
    let res = await axios.get(`http://localhost:3005/listings`)
    return res.data
  }


  catch (e) {
    return rejectWithValue(e.message)
  }

})