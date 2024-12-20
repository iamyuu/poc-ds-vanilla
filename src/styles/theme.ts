import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
  color: {
  'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'gray-700': '#374151',
    'gray-800': '#1f2937',
    'gray-900': '#111827'
  },
	space: {
		none: '0',
		small: '4px',
		medium: '8px',
		large: '16px'
	},
});
