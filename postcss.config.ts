// @ts-ignore
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: true,
      exclude: [/node_modules/],
      include: [/src/],
      landscape: false,
      landscapeUnit: 'vh',
    },
  }
}
