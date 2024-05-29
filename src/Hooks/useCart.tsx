import { IProduct } from '@/components/Products/Products'
import { ReactNode, createContext, useState, useEffect } from 'react'

export interface CartContextType {
  cartItems: IProduct[]
  addToCart: (product: IProduct) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  hiddenCart: boolean
  toggleCart: () => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const [hiddenCart, setHiddenCart] = useState(true)

  // Carregar itens do carrinho do localStorage
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      console.log(
        'Carregando itens do carrinho do localStorage:',
        storedCartItems
      )
      setCartItems(JSON.parse(storedCartItems))
    }
  }, [])

  // Salvar itens do carrinho no localStorage sempre que o estado do carrinho mudar
  useEffect(() => {
    if (cartItems.length > 0) {
      const stateJSON = JSON.stringify(cartItems)
      console.log('Salvando itens do carrinho no localStorage:', stateJSON)
      localStorage.setItem('cartItems', stateJSON)
    } else {
      localStorage.removeItem('cartItems')
    }
  }, [cartItems])

  const addToCart = (product: IProduct) => {
    const existingProduct = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (existingProduct !== -1) {
      // Se o produto já está no carrinho, aumenta a quantidade
      const updatedCartItems = [...cartItems]
      if (updatedCartItems[existingProduct].quantity < 10) {
        updatedCartItems[existingProduct].quantity++ // Aumenta a quantidade se for menor que 10
        setCartItems(updatedCartItems)
      }
    } else {
      // Se o produto não está no carrinho, adiciona-o com quantidade 1
      const newCartItem: IProduct = { ...product, quantity: 1 }
      setCartItems((prevItems) => [...prevItems, newCartItem])
    }
  }
  //console.log(cartItems)

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter((item) => item.id !== id)
      // Verifica se o carrinho está vazio após a remoção do item
      if (updatedCartItems.length === 0) {
        setHiddenCart(true) // Oculta o carrinho se estiver vazio
      }
      return updatedCartItems
    })
  }

  const toggleCart = () => {
    if (cartItems.length > 0) {
      setHiddenCart(!hiddenCart)
    }
  }

  const clearCart = () => {
    setCartItems([]) // Limpa o carrinho definindo cartItems como um array vazio
    setHiddenCart(true)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        hiddenCart,
        toggleCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
