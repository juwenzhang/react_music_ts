const useGetImageColor = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Failed to get canvas context');
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const colorMap: { [key: string]: number } = {};

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // 忽略透明度较低的像素
        if (a < 128) continue;

        const color = `rgb(${r},${g},${b})`;
        colorMap[color] = (colorMap[color] || 0) + 1;
      }

      let mainColor = '';
      let maxCount = 0;

      for (const color in colorMap) {
        if (colorMap[color] > maxCount) {
          mainColor = color;
          maxCount = colorMap[color];
        }
      }

      resolve(mainColor);
    };

    img.onerror = () => {
      reject('Failed to load image');
    };
  });
};

export default useGetImageColor;
