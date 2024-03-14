import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
            '50': '#fff8eb',
            '100': '#ffecc6',
            '200': '#ffd788',
            '300': '#ffbc4a',
            '400': '#ff9d14',
            '500': '#f97e07',
            '600': '#dd5902',
            '700': '#b73b06',
            '800': '#942c0c',
            '900': '#7a250d',
            '950': '#461102',
        }
      }
    }
  }
}
