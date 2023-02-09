const color = {
  heart: '#ff4c4c',
  backgournd: '#F0F0F0',
  component: '#9EB2AE',
  highlight: '#1E5858',
  ivory: '99',
  yellow: '#F2AF5C',
  brown: '#D9814E',
  redBrown: '#BF522A',
  navy: '#004AAD',
  gray: '#F2F2F2',
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexSpaceBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

const base = {
  width: '1470px',
};

const fontSizes = {
  xs: '11px',
  s: '13px',
  m: '15px',
  l: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '28px',
};

const theme = {
  color,
  base,
  common,
  fontSizes,
};

export default theme;
