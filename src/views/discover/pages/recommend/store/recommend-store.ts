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
  BannerDataTemplateType[], // 返回值类型
  void
>('recommend/fetchRecommendBanners', async (_, { rejectWithValue }) => {
  try {
    const response: { data: RecommendResponse } =
      await getRecommendBannersRequest();
    const { banners } = response.data;
    if (Array.isArray(banners)) {
      return banners;
    }
    return [];
  } catch (error) {
    console.error('Error fetching recommend banners:', error);
    const BannerData =
      localCache.getCache(BANNER_IMAGE_ARRAY) ||
      createRecommendFakerData().banners;
    localCache.setCache(BANNER_IMAGE_ARRAY, BannerData);
    return rejectWithValue(BannerData);
  }
});

const recommendStore = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
  } as RecommendStoreType,
  reducers: {
    setBanners(state, action) {
      state.banners = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendBanners.fulfilled, (state, action) => {
        state.banners = action.payload;
      })
      .addCase(fetchRecommendBanners.rejected, (state, action) => {
        if (action.payload) {
          state.banners = action.payload as BannerDataTemplateType[];
        } else {
          state.banners = [];
        }
      });
  },
});

export default recommendStore.reducer;
export { fetchRecommendBanners };
