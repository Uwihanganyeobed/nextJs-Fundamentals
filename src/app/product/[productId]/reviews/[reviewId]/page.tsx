"use client"
import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

const Review = ({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) => {
    // const random = getRandomInt(2)

    // if(random === 1){
    //   throw new Error("Error loading review")
    // }
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
