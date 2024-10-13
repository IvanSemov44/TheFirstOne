import React from "react";

const ShowCourseComponent = ({
  filterCourseFunction,
  addCourseToCartFunction,
}) => {
  return (
    <div className="product-list">
      {filterCourseFunction.length === 0 ? (
        <p className="no-result">Sorry Geek, No Matching Product Found</p>
      ) : (
        filterCourseFunction.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Prise:${product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addCourseToCartFunction(product)}
            >
              Add To Shopping Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowCourseComponent;
