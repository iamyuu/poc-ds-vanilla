import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { system } from "../styles/system";

export const button = recipe({
  base: {
    borderRadius: 6
  },

  variants: {
    color: {
      neutral: { background: 'whitesmoke' },
      brand: { background: 'blueviolet' },
      accent: { background: 'slateblue' }
    },
    size: {
      small: system({ p: 'small' }),
      medium: system({ p: 'medium' }),
      large: system({ p: 'large' })
    },
    rounded: {
      true: { borderRadius: 999 }
    }
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: 'neutral',
        size: 'large'
      },
      style: {
        background: 'ghostwhite'
      }
    }
  ],

  defaultVariants: {
    color: 'accent',
    size: 'medium',
    rounded: false
  }
});

export type ButtonVariants = RecipeVariants<typeof button>;