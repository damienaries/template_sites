import Head from "next/head";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";

const Layout = ({ children }) => {
  const pageTitle = `Lorem Ipsum | ${children.type.name}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="LA based Alex Budman video portfolio"
        />
      </Head>
      <HomeBanner />
      <main className="main w-full overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
