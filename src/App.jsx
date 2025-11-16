import { Route, Routes } from "react-router-dom"
import { AppLayout } from "./layout/AppLayout"
import { Home } from "./pages/home/Home"
import { ProductDetail } from "./pages/product-detail/ProductDetail"
import { About } from "./pages/about/About"
import { Shop } from "./pages/shop/Shop"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<h1 className='container text-8xl'>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
