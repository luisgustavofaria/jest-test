import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'
import { CartProvider, CartContext } from '@/Hooks/useCart'

const mockToggleCart = jest.fn()

const mockCartContext = {
  cartItems: [],
  hiddenCart: true,
  toggleCart: mockToggleCart,
  addToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
}

const renderComponent = () => {
  render(
    <CartContext.Provider value={mockCartContext}>
      <Header />
    </CartContext.Provider>
  )
}

describe('Header', () => {
  test('should render', () => {
    renderComponent()

    expect(screen.getByTestId('Title01')).toBeInTheDocument()
  })

  test('should call toggleCart when CartButton is clicked', () => {
    renderComponent()

    const cartButton = screen.getByTestId('CartButton')

    fireEvent.click(cartButton)

    expect(mockToggleCart).toHaveBeenCalled()
  })
})
