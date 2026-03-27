import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import PropTypes from 'prop-types'

export function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
