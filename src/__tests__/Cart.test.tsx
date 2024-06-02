import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CartContext, CartContextType } from '@/Hooks/useCart'
import Cart from '@/components/Cart/Cart'
import '@testing-library/jest-dom'

// Mocking the CartContext
const mockCartItems = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    photo: '/product1.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
    photo: '/product2.jpg',
    quantity: 2,
  },
]

const mockToggleCart = jest.fn()
const mockRemoveFromCart = jest.fn()

const mockCartContext: CartContextType = {
  cartItems: mockCartItems,
  hiddenCart: false,
  toggleCart: mockToggleCart,
  addToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: mockRemoveFromCart,
  clearCart: jest.fn(),
}

const renderComponent = () => {
  render(
    <CartContext.Provider value={mockCartContext}>
      <Cart />
    </CartContext.Provider>
  )
}

describe('Cart Component', () => {
  test('renders cart with correct items and total price', () => {
    renderComponent()

    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
    expect(screen.getByText('R$100')).toBeInTheDocument()
    expect(screen.getByText('R$200')).toBeInTheDocument()
    expect(screen.getByText('R$500.00')).toBeInTheDocument() // Total price
  })

  test('calls toggleCart when close button is clicked', () => {
    renderComponent()

    const toggleCart = screen.getByTestId('toggleCart')

    fireEvent.click(toggleCart)

    expect(mockToggleCart).toHaveBeenCalled()
  })

  test('calls increaseQuantity and decreaseQuantity functions when buttons are clicked', () => {
    renderComponent()

    fireEvent.click(screen.getAllByText('+')[0])
    fireEvent.click(screen.getAllByText('-')[0])

    expect(mockCartContext.increaseQuantity).toHaveBeenCalledWith(1)
    expect(mockCartContext.decreaseQuantity).toHaveBeenCalledWith(1)
  })

  test('calls removeFromCart when remove button is clicked', () => {
    renderComponent()

    const removeFromCartButton = screen.getAllByTestId('RemoveItem')[0]

    fireEvent.click(removeFromCartButton)

    expect(mockRemoveFromCart).toHaveBeenCalledWith(1)
  })
})
