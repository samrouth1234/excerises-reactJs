import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLst from './componnets/ProductLst';
import Navbar from './componnets/Navbar';

 function App() {
  return (
    <>
      <div className="App">
          <Navbar />
          <ProductLst />
      </div>
    </>
  )
}
export default App;