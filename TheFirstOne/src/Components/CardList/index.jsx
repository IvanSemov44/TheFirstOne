import React from "react";
import Card from "../Card";
import HorizontalScroll from "../HorizontalScroll";

const CardList = () => {
  return (
    <div>
      <HorizontalScroll>
        <Card>
          <h2>Title 1</h2>
          <p>Description</p>
        </Card>
        <Card>
          <h2>Title 2</h2>
          <p>Description</p>
        </Card>
        <Card>
          <h2>Title 3</h2>
          <p>Description</p>
        </Card>
      </HorizontalScroll>
    </div>
  );
};

export default CardList;
