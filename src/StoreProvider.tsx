import { Provider } from 'react-redux'
import store from './stores'

export default function StoreProvider({
  children
}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
