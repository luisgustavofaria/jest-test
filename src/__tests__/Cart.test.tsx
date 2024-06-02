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

const mockContextValues: CartContextType = {
  cartItems: mockCartItems,
  hiddenCart: false,
  toggleCart: jest.fn(),
  addToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
}

const renderComponent = (contextValues = mockContextValues) => {
  render(
    <CartContext.Provider value={contextValues}>
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

  // test('calls toggleCart when close button is clicked', () => {
  //   renderComponent()

  //   fireEvent.click(screen.getByRole('button', { name: /x/i }))
  //   expect(mockContextValues.toggleCart).toHaveBeenCalled()
  // })

  // test('calls increaseQuantity and decreaseQuantity functions when buttons are clicked', () => {
  //   renderComponent()

  //   fireEvent.click(screen.getAllByText('+')[0])
  //   fireEvent.click(screen.getAllByText('-')[0])

  //   expect(mockContextValues.increaseQuantity).toHaveBeenCalledWith(1)
  //   expect(mockContextValues.decreaseQuantity).toHaveBeenCalledWith(1)
  // })

  // test('calls removeFromCart when remove button is clicked', () => {
  //   renderComponent()

  //   fireEvent.click(screen.getAllByRole('button', { name: /x/i })[1])

  //   expect(mockContextValues.removeFromCart).toHaveBeenCalledWith(1)
  // })
})
