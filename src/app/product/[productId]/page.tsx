import React from "react";

const OneProduct = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>OneProduct Detail{params.productId}</div>;
};

export default OneProduct;
