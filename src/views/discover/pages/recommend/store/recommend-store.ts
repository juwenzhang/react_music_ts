import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRecommendBannersRequest } from '@/views/discover/pages/recommend/request/recommend-request';
import { createRecommendFakerData } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import { type BannerDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import { BANNER_IMAGE_ARRAY } from '@/constants/banner';
import { localCache } from '@/utils';

interface RecommendResponse {
  banners?: BannerDataTemplateType[];
}

interface RecommendStoreType {
  banners: BannerDataTemplateType[];
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
    return rejectWithValue(bannersData as BannerDataTemplateType[]); // todo: also can use dispatch(changeBanners(bannersData));
  }
});

const recommendStore = createSlice({
  name: 'recommend',
  initialState: {
    banners: localCache.getCache(BANNER_IMAGE_ARRAY) || [],
  } as RecommendStoreType,
  reducers: {
    changeBanners(state, action) {
      state.banners = action.payload;
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
      });
  },
});

export default recommendStore.reducer;
export const { changeBanners } = recommendStore.actions;
export { fetchRecommendBanners };
