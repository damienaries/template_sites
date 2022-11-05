import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
    return (
        <Html>
            <Head>
                <meta name="description" content="LA based Alex Budman video portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;600&family=Figtree:wght@300;400;600&display=swap" rel="stylesheet"/>
            </Head>
            <Main />
            <NextScript />
        </Html>
    )
}