import Layout from '../components/Layout';
import HeroBackground from '../components/HeroBackground';

export default function Home() {
  return (
    <div className="main">
      <section className="hero w-full bg-gray-100 relative">
          <HeroBackground />
        <div className="hero-content w-1/2 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 class="text-6xl text-green-100 font-semibold font-thin font-serif -transform-y-8">Alex Budman</h1>
        </div>
      </section>
    </div>  
  )
}

Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}