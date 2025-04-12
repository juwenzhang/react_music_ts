import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getRecommendBannersRequest,
  getRecommendHotRequest,
} from '@/views/discover/pages/recommend/request/recommend-request';
import {
  type BannerDataTemplateType,
  createRecommendFakerData,
} from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import {
  createRecommendHotData,
  type HotDataTemplateType,
} from '@/views/discover/pages/recommend/faker/recommend-fakerHot';
import { BANNER_IMAGE_ARRAY } from '@/constants/banner';
import { hotDataLocal } from '@/constants/hot';
import { localCache } from '@/utils';

interface RecommendResponse {
  banners: BannerDataTemplateType[];
}

interface RecommendStoreType {
  banners: BannerDataTemplateType[];
  recommendHot: HotDataTemplateType[];
}

const fetchRecommendBanners = createAsyncThunk<
  BannerDataTemplateType[],
  void,
  { rejectValue: BannerDataTemplateType[] }
>('recommend/fetchRecommendBanners', async (_, { rejectWithValue }) => {
  // todo: use try...catch to ensure the request is successful
  try {
    const response: { data: RecommendResponse } =
      await getRecommendBannersRequest();
    let bannersData: BannerDataTemplateType[] = [];

    if (response && response.data.banners) {
      bannersData = response.data.banners;
    }
    localCache.setCache(BANNER_IMAGE_ARRAY, bannersData);
    return bannersData; // todo: also can use dispatch(changeBanners(bannersData));
  } catch (error) {
    console.error('Failed to fetch banners:', error);
    const bannersData =
      localCache.getCache(BANNER_IMAGE_ARRAY) ||
      createRecommendFakerData().banners;
    localCache.setCache(BANNER_IMAGE_ARRAY, bannersData);
    return rejectWithValue(bannersData as BannerDataTemplateType[]);
    // todo: also can use dispatch(changeBanners(bannersData));
  }
});

const fetchRecommendHot = createAsyncThunk<
  HotDataTemplateType[],
  void,
  { rejectValue: HotDataTemplateType[] }
>('recommend/fetchRecommendHot', async (_, { rejectWithValue }) => {
  const res: { data: HotDataTemplateType[] } = await getRecommendHotRequest();
  if (res && res.data) {
    const hotData = res.data;
    localCache.setCache(hotDataLocal, hotData);
    return hotData;
  } else {
    console.warn('No data returned from getRecommendHotRequest');
    const fallbackData =
      localCache.getCache(hotDataLocal) || createRecommendHotData().hotData;
    localCache.setCache(hotDataLocal, fallbackData);
    return rejectWithValue(fallbackData as HotDataTemplateType[]);
  }
});

const recommendStore = createSlice({
  name: 'recommend',
  initialState: {
    banners: localCache.getCache(BANNER_IMAGE_ARRAY) || [],
    recommendHot: localCache.getCache(hotDataLocal) || [],
  } as RecommendStoreType,
  reducers: {
    changeBanners(state, action) {
      state.banners = action.payload;
    },
    changeRecommendHot(state, action) {
      state.recommendHot = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendBanners.pending, (state) => {
        console.log('fetchRecommendBanners pending');
        state.banners = [];
      })
      .addCase(fetchRecommendBanners.fulfilled, (state, action) => {
        state.banners = action.payload;
      })
      .addCase(fetchRecommendBanners.rejected, (state, action) => {
        state.banners = action.payload || [];
      })
      .addCase(fetchRecommendHot.fulfilled, (state, action) => {
        state.recommendHot = action.payload || [];
      })
      .addCase(fetchRecommendHot.rejected, (state, action) => {
        state.recommendHot = (action.payload || []) as HotDataTemplateType[];
      });
  },
});

export default recommendStore.reducer;
export const { changeBanners, changeRecommendHot } = recommendStore.actions;
export { fetchRecommendBanners, fetchRecommendHot };
