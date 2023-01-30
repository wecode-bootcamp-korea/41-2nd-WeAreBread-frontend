const color = {
  ivory: '#F2D399',
  yellow: '#F2AF5C',
  brown: 'D9814E',
  redBrown: '#BF522A',
  navy: '#004AAD',
  gray: '#F2F2F2',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,

  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
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
