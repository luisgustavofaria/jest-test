import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Products from '../../src/components/Products/Products'
import { CartContext } from '@/Hooks/useCart'
import axios, { AxiosResponse } from 'axios'
import '@testing-library/jest-dom'

// Mocking axios.get
// jest.mock('axios')

// Mocking the CartContext
const mockAddToCart = jest.fn()
const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    photo: 'product1.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
    photo: 'product2.jpg',
    quantity: 1,
  },
]

const mockCartContext = {
  cartItems: mockProducts,
  hiddenCart: true,
  toggleCart: jest.fn(),
  addToCart: mockAddToCart,
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
}

const renderComponent = () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={mockCartContext}>
        <Products />
      </CartContext.Provider>
    </QueryClientProvider>
  )
}

describe('Products', () => {
  test('renders without error', async () => {
    // Mocking axios.get to resolve with mock products
    // ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
    //   { data: { products: mockProducts } } as AxiosResponse<any>
    // )

    renderComponent()

    // Ensure loading state is shown initially

    await waitFor(() => {
      expect(screen.getByTestId('FooterContainer')).toBeInTheDocument()
    })
  })
  // expect(screen.getAllByTestId('loading-shimmer')).toHaveLength(8)

  // // Ensure products are displayed after loading
  // await waitFor(() => {
  //   expect(screen.queryByTestId('loading-shimmer')).not.toBeInTheDocument()
  //   expect(screen.getAllByTestId('product-card')).toHaveLength(2)
  // })

  // test('calls addToCart function when Add to Cart button is clicked', async () => {
  //   // Mocking axios.get to resolve with mock products
  //   ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
  //     { data: { products: mockProducts } } as AxiosResponse<any>
  //   )

  //   renderComponent()

  //   await waitFor(() => {
  //     fireEvent.click(screen.getAllByText('COMPRAR')[0]) // Click on the first Add to Cart button
  //     fireEvent.click(screen.getAllByText('COMPRAR')[1]) // Click on the second Add to Cart button
  //   })

  //   // Ensure addToCart function is called with the correct product details
  //   expect(mockAddToCart).toHaveBeenCalledTimes(2)
  //   expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0])
  //   expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[1])
  // })

  // Additional test cases can be added here
})
