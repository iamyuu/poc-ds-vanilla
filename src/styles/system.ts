import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from "./theme";

const colors = {
  'blue-50': vars.color['blue-50'],
  'blue-100': vars.color['blue-100'],
  'blue-200': vars.color['blue-200'],
  'gray-700': vars.color['gray-700'],
  'gray-800': vars.color['gray-800'],
  'gray-900': vars.color['gray-900'],
  // etc.
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors
    // etc.
  },
	shorthands: {
		bg: ['background']
	}
});

const space = {
  none: vars.space.none,
  small: vars.space.small,
  medium: vars.space.medium,
  large: vars.space.large
  // etc.
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end'
    ],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space
    // etc.
  },
  shorthands: {
    p: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
});

export const system = createSprinkles(colorProperties, responsiveProperties);

export type System = Parameters<typeof system>[0];
