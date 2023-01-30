import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { fetchInstance } from '../../utils/api';

const initialState = {
  isLoaded: false,
  selectedReview: null,
  data: [],
};

export const readReviewListAsync = createAsyncThunk(
  'read/reviews',
  async (_, thunkAPI) => {
    try {
      const result = await fetchInstance('reviews/1', 'GET').then(res => {
        return res.reviewData;
      });
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const createReviewAsync = createAsyncThunk(
  'create/review',
  async (data, thunkAPI) => {
    try {
      const result = await fetchInstance('reviews', 'POST', data).then(res => {
        return res;
      });
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateReviewAsync = createAsyncThunk(
  'update/review',
  async (data, thunkAPI) => {
    try {
      const result = await fetchInstance(`reviews`, 'PATCH', data).then(res => {
        return res;
      });
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteReviewAsync = createAsyncThunk(
  'delete/review',
  async (reviewId, thunkAPI) => {
    try {
      const result = await fetchInstance(`reviews/${reviewId}`, 'DELETE').then(
        res => {
          return res;
        }
      );
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const reviewSlice = createSlice({
  name: 'reviewList',
  initialState,
  reducers: {
    selectReview(state, action) {
      state.selectedReview = action.payload;
      return;
    },
    resetSelectedReview(state) {
      state.selectedReview = null;
      return;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(readReviewListAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      })
      .addCase(updateReviewAsync.fulfilled, state => {
        state.isLoaded = false;
      })
      .addCase(deleteReviewAsync.fulfilled, state => {
        state.isLoaded = false;
      })
      .addCase(createReviewAsync.fulfilled, state => {
        state.isLoaded = false;
      }),
});

export const {
  addReview,
  deleteReview,
  updateReview,
  selectReview,
  resetSelectedReview,
  orderByDesc,
} = reviewSlice.actions;

export default reviewSlice;
