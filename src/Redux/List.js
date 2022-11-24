import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchList = createAsyncThunk('list/fetchList', async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e3e649ce61msh9d179687ba85493p1ac9f7jsn9f5dd7ec603d',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
    },
  };

  return fetch(
    'https://rawg-video-games-database.p.rapidapi.com/games?key=990a19f68f4c42f381d58fbeba2f814e',
    options,
  ).then((res) => res.json());
});

const dataList = createSlice({
  name: 'dataList',
  initialState: {
    items: [],
  },
  reducers: {
    copyData: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.done = true;
      state.items = action.payload.results.map((game) => ({
        title: game.name,
        image: game.background_image,
        id: game.id,
        rating: game.rating,
        playtime: game.playtime,
        screenshots: game.short_screenshots,
        platforms: game.platforms,
      }));
      state.favorites = action.payload.results.filter((game) => {
        if (game.id === 58175 || game.id === 32) {
          return true;
        }
        return false;
      });
      state.favorites = state.favorites.map((game) => ({
        title: game.name,
        image: game.background_image,
        id: game.id,
        rating: game.rating,
        playtime: game.playtime,
        screenshots: game.short_screenshots,
        platforms: game.platforms,
      }));
      const findgame1Index = action.payload.results.findIndex(
        (game) => game.id === 58175,
      );
      const findgame2Index = action.payload.results.findIndex(
        (game) => game.id === 32,
      );
      state.items.splice(findgame1Index, 1);
      state.items.splice(findgame2Index, 1);
    }).addCase(fetchList.rejected, () => {
    }).addCase(fetchList.pending, (state) => {
      state.done = false;
    });
  },
});

export const { copyData } = dataList.actions;

export default dataList.reducer;
