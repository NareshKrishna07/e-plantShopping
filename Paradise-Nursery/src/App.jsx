import { useState } from "react";

import "./App.css";

import ProductList from "./components/ProductList";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {

    setShowProductList(true);
  };

  return (

    <div className="landing-page">

      {
        !showProductList ? (

          <div>

            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery Plant Shop
            </p>

            <button
              onClick={handleGetStarted}
            >
              Get Started
            </button>

          </div>

        ) : (

          <ProductList />

        )
      }

    </div>
  );
}

export default App;
