import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  test('should render', () => {
    render(<Header />)

    expect(screen.getByText('MKS')).toBeInTheDocument()
  })
})
