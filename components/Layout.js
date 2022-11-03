import Head from 'next/head';
import Footer from './Footer.js';

const Layout = ({children}) => {
    const pageTitle = `Alex Budman | ${children.type.name}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="LA based Alex Budman video portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;600&family=Figtree:wght@300;400;600&display=swap" rel="stylesheet"/>
            </Head>
            <main className="main w-full">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;