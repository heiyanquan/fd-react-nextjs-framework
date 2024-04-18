import type { AppProps } from "next/app"

export default function PageApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
