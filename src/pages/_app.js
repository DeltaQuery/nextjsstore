import 'styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Provider } from "react-redux"
import store from 'reducers/store'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return <Provider store={store}>
                {getLayout(<Component {...pageProps} />)}
                    </Provider>
}

export default MyApp
