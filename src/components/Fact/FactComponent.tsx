import React from "react";
import "./FactComponent.css";

interface IFactComponentProps {
  logo: React.ReactElement;
  text: number | string;
  factTitle: string;
}

const FactComponent: React.FC<IFactComponentProps> = (
  props: IFactComponentProps
) => {
  const { logo, text, factTitle } = props;
  return (
      <div className="fact-container">
        {logo}
        <p className="fact-title">{factTitle}:</p>
        <p className="fact-text">{text}</p>
      </div>
  );
};

export default FactComponent;
