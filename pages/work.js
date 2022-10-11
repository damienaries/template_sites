import Layout from '../components/Layout'

export default function Work() {
    return ( 
        <div className="work-container h-full w-full bg-gray-100">
            <h1>Work Page</h1>
        </div>
     );
}

Work.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }