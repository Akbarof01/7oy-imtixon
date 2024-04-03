import { CartContextProvider } from "./context/cartContext";
import Major from "./components/app/Major";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

function App() {
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="spiner">
      {
        loading?
        <RingLoader
        className="spinner"
        color={'orange'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <CartContextProvider>
      <Header />
      <Major />
      <Footer />
    </CartContextProvider>
      }
    </div>
  );
}

export default App;
