import React from "react";

const UserCartComponent = ({
  cartCourses,
  setCartCourses,
  deleteCourseFromCartFunction,
  totalAmountCalculationFunction,
}) => {
  return (
    <div className={`cart ${cartCourses.length > 0 ? "active" : ""}`}>
      <h2>My Cart</h2>
      {cartCourses.length === 0 ? (
        <p className="empty-cart">Geek, your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartCourses.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p>Price: ${item.product.price}</p>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="remove-button"
                      onClick={() => deleteCourseFromCartFunction(item.product)}
                    >
                      Remove Product
                    </button>
                    <div className="quantity"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserCartComponent;
