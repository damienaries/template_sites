import Head from 'next/head';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Layout = ({children}) => {
    const pageTitle = `Alex Budman | ${children.type.name}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="LA based Alex Budman video portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
                <main className="main w-full">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;