import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'
import { CartProvider } from '@/Hooks/useCart'

describe('Header', () => {
  test('should render', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    )

    expect(screen.getByText('MKS')).toBeInTheDocument()
  })
})
