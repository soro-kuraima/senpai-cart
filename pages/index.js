import Layout from "../components/Layout";
import Product from "../components/Product";
import FeaturedSection from "../components/FeaturedSection";
import { data } from "../lib/data";


export default function Home() {
  const products = [...data.products]

  return (
    <>
      <Layout>
        <div className="">
          <FeaturedSection />
        </div>
        <div className="home-main p-1 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {
            products.map((product) => {
              //console.log(product)
              return (
                <Product key={product.id} productData={product} />
              )
            })
          }
        </div>
      </Layout>
    </>
  );
}
