import Head from 'next/head'
import Link from 'next/link'
import 'antd/dist/antd.css'
import Devops from "../components/dewasp"
import { Row, PageHeader } from 'antd'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <meta charSet="utf-8" />
                <title>Голишевский Федор - цены</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div >
                <PageHeader
                    className="blacklink"
                    onBack={() => { document.location.href = "/" }}
                    title={<Link href="/">Назад</Link>}
                />
                <Row>
                    <div style={{ paddingTop: '100px' }} />
                </Row>
                <Row>
                    <h2 style={{ marginRight: 'auto', marginLeft: 'auto' }}>Цены на услуги</h2>
                </Row>
                <Devops />
                <Row>
                    <div style={{ paddingTop: '100px' }} />
                </Row>
            </div>
        </div>
    )
}
