import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { AiFillHeart } from "react-icons/ai";
import { FaQq } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./CardComponent.css";
import FactComponent from "../Fact/FactComponent";
import { CardActions, CardHeader, IconButton } from "@mui/material";
import { Context } from "../..";

interface ICardComponentProps {
  id: number;
  title: string;
  animal_type: string;
  lifespan: number;
  img: string;
  isLiked: boolean;
}

const CardComponent: React.FC<ICardComponentProps> = (
  props: ICardComponentProps
) => {
  const { id, title, animal_type, lifespan, img, isLiked } = props;
  const { store } = useContext(Context);

  const onLikeCardHandler = () => {
    store.changeIsLikedStatus(id);
  };

  const deleteCard = () => {
    store.deleteCard(id);
  };

  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 365, minWidth: 365 }}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={deleteCard}>
              <IoClose />
            </IconButton>
          }
        />
        <CardMedia component="img" height="220" image={img} alt={title} />
        <CardContent>
          <p className="card-title">{title}</p>
          <FactComponent
            logo={<FaQq className="fact-icon" />}
            text={animal_type}
            factTitle={"Animal type"}
          />
          <FactComponent
            logo={<GiSandsOfTime className="fact-icon" />}
            text={lifespan}
            factTitle={"Life span"}
          />
          <CardActions>
            <IconButton onClick={onLikeCardHandler}>
              <AiFillHeart
                className="like-icon"
                color={isLiked ? "#dfa6ed" : "lightgray"}
              />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
