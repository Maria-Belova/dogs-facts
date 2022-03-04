import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from ".";
import ButtonComponent from "./components/Button/ButtonComponent";
import CardsGridComponent from "./components/CardsGrid/CardsGridComponent";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getCardsData();
  });

  const buttonClickHandler = () => {
    if (store.isSortButton) {
      store.showAllCards();
    } else {
      store.showOnlyLikedCards();
    }
  };

  return (
    <div>
      <div className="app">
        <div className="header">
          <img className="logo" src={logo} />
          <ButtonComponent onBtnClick={buttonClickHandler} />
        </div>
        <CardsGridComponent />
      </div>
    </div>
  );
}

export default observer(App);
