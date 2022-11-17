import Head from 'next/head';
import HomeBanner from './HomeBanner';
import Footer from './Footer';

const Layout = ({children}) => {
    const pageTitle = `Alex Budman | ${children.type.name}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="LA based Alex Budman video portfolio" />
            </Head>
            <HomeBanner />
            <main className="main w-full overflow-x-hidden">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;