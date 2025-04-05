import { faker } from '@faker-js/faker';
import { BANNER_IMAGE_HEIGHT, BANNER_IMAGE_WIDTH } from '@/constants/banner';

type BannerDataTemplateType = ReturnType<typeof BannerDataTemplate>;
type RecommendFakerDataType = ReturnType<typeof createRecommendFakerData>;
function BannerDataTemplate() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    imageUrl: faker.image.urlPicsumPhotos({
      width: BANNER_IMAGE_WIDTH,
      height: BANNER_IMAGE_HEIGHT,
    }),
    description: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}

function createRecommendFakerData() {
  return {
    banners: Array.from({ length: 10 }, () =>
      BannerDataTemplate(),
    ) as BannerDataTemplateType[],
  };
}

export {
  createRecommendFakerData,
  type BannerDataTemplateType,
  type RecommendFakerDataType,
};
