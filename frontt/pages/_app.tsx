import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
// provider alrededor de la app para manejar el estado global atravez del provider

  <Provider store={store}>
     <Component {...pageProps} />
  </Provider>)
}

export default MyApp
