import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("list/fetchList", async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e3e649ce61msh9d179687ba85493p1ac9f7jsn9f5dd7ec603d",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };

  return await fetch(
    "https://rawg-video-games-database.p.rapidapi.com/games?key=990a19f68f4c42f381d58fbeba2f814e",
    options
  ).then((res) => res.json());

});


const dataList = createSlice({
  name: "dataList",
  initialState: {
    items: [],
  },
  reducers: {
    copyData: (state, action) => {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.done = true;
      state.items = action.payload.results.map(game => {
        return {
          title: game.name,
          image: game.background_image,
          id: game.id,
          rating: game.rating,
          playtime: game.playtime,
          screenshots: game.short_screenshots,
          platforms: game.platforms
        }
      });
    }).addCase(fetchList.rejected, (state, action) => {
      console.log('rejected');
      // state.items = action.payload;
    }).addCase(fetchList.pending, (state, action) => {
      state.done = false;
      console.log('pending');
      // state.items = action.payload;
    })
  }
});
  

export const { copyData } = dataList.actions;

export default dataList.reducer;

