import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'
import { CartProvider, CartContext } from '@/Hooks/useCart'

const mockToggleCart = jest.fn()

const mockCartContextValue = {
  cartItems: [],
  hiddenCart: true,
  toggleCart: mockToggleCart,
  addToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
}

describe('Header', () => {
  test('should render', () => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Header />
      </CartContext.Provider>
    )

    expect(screen.getByTestId('Title01')).toBeInTheDocument()
  })

  test('should call toggleCart when CartButton is clicked', () => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Header />
      </CartContext.Provider>
    )

    const cartButton = screen.getByTestId('CartButton')

    fireEvent.click(cartButton)

    expect(mockToggleCart).toHaveBeenCalled()
  })
})
