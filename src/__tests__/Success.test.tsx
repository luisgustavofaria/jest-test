import { render, screen, fireEvent } from '@testing-library/react'
import { CartContext, CartContextType } from '@/Hooks/useCart'
import SuccessPage from '@/pages/success'
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

const mockClearCart = jest.fn()

const mockCartContext: CartContextType = {
  cartItems: mockCartItems,
  hiddenCart: false,
  toggleCart: jest.fn(),
  addToCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: mockClearCart,
}

const renderComponent = () => {
  render(
    <CartContext.Provider value={mockCartContext}>
      <SuccessPage />
    </CartContext.Provider>
  )
}

describe('SuccessPage Component', () => {
  test('renders success page with correct items', () => {
    renderComponent()

    expect(
      screen.getByText('Compra Realizada com Sucesso!')
    ).toBeInTheDocument()
    expect(screen.getByText('Itens do seu Pedido:')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
    expect(screen.getByText('Quantidade: 1')).toBeInTheDocument()
    expect(screen.getByText('Quantidade: 2')).toBeInTheDocument()
  })

  test('clears the cart when "Voltar para Home" button is clicked', () => {
    renderComponent()

    const backButton = screen.getByText('Voltar para Home')
    fireEvent.click(backButton)

    expect(mockClearCart).toHaveBeenCalled()
  })
})
