const theme = {
  color: {
    primary: '#C20C0C',
    secondary: '#9B0909',
  },
  size: {},
  mixins: {
    wrap1: `
      width: 1100px,
      margin: 0 auto
    `,
  },
};
type ThemeTypeOne = typeof theme;
export { theme, type ThemeTypeOne };
