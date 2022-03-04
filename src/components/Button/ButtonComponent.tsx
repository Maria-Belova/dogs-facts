import React, { useContext } from "react";
import { Button, styled, ButtonProps } from "@mui/material";
import { observer } from "mobx-react-lite";
import { MdPets } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Context } from "../..";
import "./ButtonComponent.css";

const ColorBtn = styled(Button)<ButtonProps>({
  color: "black",
  backgroundColor: "white",
  borderColor: "#dfa6ed",
  "&:hover": {
    borderColor: "#c158f3",
  },
});

interface IButtonComponentProps {
  onBtnClick: () => void;
}

const ButtonComponent: React.FC<IButtonComponentProps> = (
  props: IButtonComponentProps
) => {
  const { onBtnClick } = props;
  const { store } = useContext(Context);

  return (
    <div className="btn-container">
      <ColorBtn
        onClick={onBtnClick}
        variant="outlined"
        endIcon={store.isSortButton ? <MdPets /> : <AiFillHeart />}
      >
        {store.isSortButton ? "Show all cards" : "Show only liked cards"}
      </ColorBtn>
    </div>
  );
};

export default observer(ButtonComponent);
