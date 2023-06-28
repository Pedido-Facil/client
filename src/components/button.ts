import { styled } from '../../styled-system/jsx'
import { cva, type RecipeVariantProps } from '../../styled-system/css'
 
const buttonStyle = cva({
  base: {
    color: 'red',
    textAlign: 'center'
  },
  variants: {
    size: {
      small: {
        fontSize: '1rem'
      },
      large: {
        fontSize: '2rem'
      }
    }
  }
})


export type ButtonVariants = RecipeVariantProps<typeof buttonStyle> // { size?: 'small' | 'large' }
 
export const Button = styled('button', buttonStyle)