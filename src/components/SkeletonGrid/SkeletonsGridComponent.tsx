import React from "react";
import SkeletonComponent from "../Skeleton/SkeletonComponent";
import "../CardsGrid/GridComponent.css";

const SkeletonsGridComponent: React.FC = () => {
  return (
    <div className="main-container">
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </div>
  );
};

export default SkeletonsGridComponent;
