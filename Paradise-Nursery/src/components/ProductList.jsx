import { useState } from "react";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/CartSlice";

const ProductList = () => {

  const dispatch = useDispatch();

  const [cartCount, setCartCount] = useState(0);

  const [addedItems, setAddedItems] = useState([]);

  const plants = [

    {
      id: 1,
      name: "Snake Plant",
      price: 10,
      category: "Indoor Plants",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 2,
      name: "Spider Plant",
      price: 15,
      category: "Indoor Plants",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 3,
      name: "Aloe Vera",
      price: 20,
      category: "Succulents",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 4,
      name: "Cactus",
      price: 12,
      category: "Succulents",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 5,
      name: "Peace Lily",
      price: 18,
      category: "Air Purifying Plants",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 6,
      name: "Money Plant",
      price: 25,
      category: "Air Purifying Plants",
      image: "https://via.placeholder.com/150"
    }
  ];

  const categories = [

    "Indoor Plants",
    "Succulents",
    "Air Purifying Plants"
  ];

  // Redux dispatch logic
  const handleAddToCart = (plant) => {

    dispatch(addItem(plant));

    setAddedItems([
      ...addedItems,
      plant.id
    ]);

    setCartCount(cartCount + 1);
  };

  return (

    <div>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "green",
          color: "white"
        }}
      >

        <h2>Paradise Nursery</h2>

        <div>

          <a
            href="/"
            style={{
              color: "white",
              marginRight: "15px"
            }}
          >
            Home
          </a>

          <a
            href="/plants"
            style={{
              color: "white",
              marginRight: "15px"
            }}
          >
            Plants
          </a>

          <a
            href="/cart"
            style={{
              color: "white"
            }}
          >
            Cart 🛒 ({cartCount})
          </a>

        </div>

      </nav>

      <h1 style={{ textAlign: "center" }}>
        Our Plants
      </h1>

      {
        categories.map((category) => (

          <div key={category}>

            <h2>{category}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
              }}
            >

              {
                plants

                  .filter(
                    (plant) =>
                      plant.category === category
                  )

                  .map((plant) => (

                    <div
                      key={plant.id}

                      style={{
                        border: "1px solid gray",
                        padding: "15px",
                        width: "200px"
                      }}
                    >

                      <img
                        src={plant.image}
                        alt={plant.name}
                        width="150"
                      />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button

                        onClick={() =>
                          handleAddToCart(plant)
                        }

                        disabled={
                          addedItems.includes(plant.id)
                        }
                      >

                        {
                          addedItems.includes(plant.id)
                            ? "Added"
                            : "Add to Cart"
                        }

                      </button>

                    </div>
                  ))
              }

            </div>

          </div>
        ))
      }

    </div>
  );
};

export default ProductList;
