import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import ShowCourseComponent from "./ShowCourseComponent";
import UserCartComponent from "./UserCartComponent";

const ShopCart = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "GFG T-Shirt",
      price: 499,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png",
    },
    {
      id: 2,
      name: "GFG Bag",
      price: "699",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg",
    },
    {
      id: 3,
      name: "GFG Hoodie",
      price: "799",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg",
    },
  ]);

  const [cartCourse, setCartCourse] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourse.find(
      (item) => item.product.id === GFGcourse.id
    );

    if (alreadyCourses) {
      const latestCartUpdate = cartCourse.map((item) =>
        item.product.id === GFGcourse.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartCourse(latestCartUpdate);
    } else {
      setCartCourse([...cartCourse, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const filterCourseFunction = courses.filter((courses) =>
    courses.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  const deleteCourseFromCartFunction = (GFGcourse) => {
    const updatedCart = cartCourse.filter(
      (item) => item.product.id !== GFGcourse.id
    );
    setCartCourse(updatedCart);
  };

  const totalAmoundCalculationFunction = () => {
    return cartCourse.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="shopApp">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={(event) =>
          setSearchCourse(event.target.value)
        }
      />
      <main className="app-main">
        <ShowCourseComponent
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />
        <UserCartComponent
            cartCourses={cartCourse}
            setCartCourses={searchCourse}
            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
            totalAmountCalculationFunction={totalAmoundCalculationFunction}
        />
      </main>
    </div>
  );
};

export default ShopCart;
