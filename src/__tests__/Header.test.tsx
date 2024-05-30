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

    expect(screen.getByTestId('Title01')).toBeInTheDocument()
  })

  // test('should call toggleCart when CartButton is clicked', () => {
  //   render(
  //     <CartProvider>
  //       <Header />
  //     </CartProvider>
  //   )

  //   expect(screen.getByText('MKS')).toBeInTheDocument()
  // })
})
