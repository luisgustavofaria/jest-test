import { CartProvider } from '@/Hooks/useCart'
import RouterMounting from '@/errorNext/useClient'
import { GlobalStyle } from '@/styles/globals'
import theme from '@/styles/theme'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterMounting>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </QueryClientProvider>
      </RouterMounting>
    </ThemeProvider>
  )
}
