import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Skeleton } from "@mui/material";
import "./SkeletonComponent.css";

const SkeletonComponent: React.FC = () => {
  return (
    <div className="skeleton-container">
      <Card sx={{ maxWidth: 365, minWidth: 365 }}>
        <Skeleton variant="rectangular" width={365} height={140} />
        <CardContent>
          <Skeleton variant="text" width={250} height={30} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width={150} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonComponent;
