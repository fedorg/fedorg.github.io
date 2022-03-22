import Head from 'next/head'
import 'antd/dist/antd.css'
import Bio from "../components/bio-en"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <title>Fedor Golishevskii</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Bio />
    </div>
  )
}
