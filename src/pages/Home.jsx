import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <>
    <div style={{height:'inherit',width:'100%',backgroundColor:'lightGrey'}}> 
      <Navbar />
      <Main />
      <Product />
      <Footer />
      </div>
    </>
  )
}

export default Home