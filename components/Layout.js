import Head from 'next/head';
import Footer from './Footer.js';

const Layout = ({children}) => {
    const pageTitle = `Alex Budman | ${children.type.name}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="LA based Alex Budman video portfolio" />
            </Head>
            <main className="main w-full">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;