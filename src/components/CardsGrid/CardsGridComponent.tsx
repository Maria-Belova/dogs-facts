import React, { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import CardComponent from "../Card/CardComponent";
import SkeletonsGridComponent from "../SkeletonGrid/SkeletonsGridComponent";
import "./GridComponent.css";

const CardsGridComponent: React.FC = () => {
  const { store } = useContext(Context);
  
  if (store.isLoading) {
    return (
      <SkeletonsGridComponent/>
    )
  }
  
  return (
    <div className="main-container">
      {store.cardsData?.map((data) => {
        return <CardComponent id={data.id} title={data.name} animal_type={data.animal_type} lifespan={data.lifespan} img={data.image_link} isLiked={data.isLiked}/>;
      })}
    </div>
  );
};

export default observer(CardsGridComponent);
