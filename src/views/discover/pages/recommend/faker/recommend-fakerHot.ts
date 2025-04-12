import { faker } from '@faker-js/faker';
import { hotImageHeight, hotImageWidth } from '@/constants/hot';

type HotDataTemplateType = ReturnType<typeof HotDataTemplate>;

const HotDataTemplate = () => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    imageUrl: faker.image.urlPicsumPhotos({
      width: hotImageWidth,
      height: hotImageHeight,
    }),
    description: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    likeNumber: 10000000000,
  };
};

function createRecommendHotData() {
  return {
    hotData: Array.from({ length: 300 }, () =>
      HotDataTemplate(),
    ) as HotDataTemplateType[],
  };
}

export { type HotDataTemplateType, createRecommendHotData };
