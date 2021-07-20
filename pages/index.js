import Head from 'next/head'
import 'antd/dist/antd.css'
import Bio from "../components/bio"
import Devops from "../components/dewasp"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <title>Голишевский Федор</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i&subset=cyrillic" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      </Head>
      <Bio />
      <Devops />
    </div>
  )
}
