import Head from 'next/head';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Alex Budman Video</title>
            </Head>
            <Navbar />
            <main className="min-h-screen w-full">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;