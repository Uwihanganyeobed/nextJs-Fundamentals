import React from "react";
import { notFound } from "next/navigation";
const Review = ({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) => {
   if(parseInt(params.reviewId) >1000){
      notFound();
   }
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default Review;
