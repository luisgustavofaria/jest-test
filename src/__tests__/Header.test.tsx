import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'
import { CartProvider, CartContextType, CartContext } from '@/Hooks/useCart'

// Mock implementation for useCart to use the mockToggleCart function
const mockToggleCart = jest.fn()

jest.mock('@/Hooks/useCart', () => ({
  ...jest.requireActual('@/Hooks/useCart'),
  CartProvider: ({ children }: { children: React.ReactNode }) => {
    const mockContextValue: CartContextType = {
      cartItems: [],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
      removeFromCart: jest.fn(),
      hiddenCart: true,
      toggleCart: mockToggleCart,
      clearCart: jest.fn(),
    }
    return (
      <CartContext.Provider value={mockContextValue}>
        {children}
      </CartContext.Provider>
    )
  },
}))

describe('Header', () => {
  test('should render', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    )

    expect(screen.getByTestId('Title01')).toBeInTheDocument()
  })

  test('should call toggleCart when CartButton is clicked', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    )

    const cartButton = screen.getByTestId('CartButton')

    fireEvent.click(cartButton)

    expect(mockToggleCart).toHaveBeenCalled()
  })
})
