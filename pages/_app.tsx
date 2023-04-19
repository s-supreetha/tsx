import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '../components/layout'
import BaseLayout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <BaseLayout> */}
  <Component {...pageProps} />
  {/* </BaseLayout> */}
  </>
  )
}
