// import Image from 'next/image';
import Layout from '../components/Layout'

export default function About({ author }) {

    return ( 
        <div className="about-container h-full w-full bg-gray-100 flex content-center">
            <div className="about-content w-11/12 lg:w-8/12 mx-auto py-8 px-12 shadow border border-red-500 flex w-full">
            <div className="left full md:w-1/3">
                <h1>{author.name}</h1>
                {/* <p>Author bio?</p> */}
                <h4>Email me <span className="">{author.email}</span></h4>
                <h4>@{author.website}</h4>
            </div>
            <div className="right flex-1 border border-green-500">
                <div className="w-full h-full bg-green-200">
                    image placeholder
                </div>
            </div>
            </div>
        </div>
     );
}

About.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  export async function getStaticProps(props) {
    const author = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());

    return {
      props: {
        author,
      } 
    }
  }