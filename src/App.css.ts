import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  margin: 0,
  color: '#fff',
  fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
  backgroundImage: 'linear-gradient(to bottom, #020917, #101725)',
});

export const content = style({
  display: 'flex',
  minHeight: '100vh',
  lineHeight: '1.1',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  'h1': {
    fontSize: '3.6rem',
    fontWeight: 700,
  },
  'p': {
    fontSize: '1.2rem',
    fontWeight: 400,
    opacity: 0.5,
  },
});
