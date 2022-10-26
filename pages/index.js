import Layout from '../components/Layout';
import HeroBackground from '../components/HeroBackground';
import HeroImg from '../public/assets/img/home-balloons.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="main">
      <section className="hero w-full bg-gray-100 relative">
        <HeroBackground /> {/* bg pattern */}
        <div className="hero-content w-1/2 absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl text-green-100 font-semibold font-thin font-serif -transform-y-8 relative z-10">Alex Budman</h1>
          <div className="image-container border border-red-500 -mt-8 ">
            <Image src={HeroImg} width={600} height={400} layout="responsive" priority />
          </div>
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