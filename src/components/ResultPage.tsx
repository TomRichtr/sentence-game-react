import React, { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetRedux } from "../actions/inputs";
import { InputState } from "../actions/inputs";

export const ResultPage = () => {
  const { who, what, where, when } = useSelector((state: InputState) => state);
  const dot = who && what && where && when ? "." : "";
  const history = useHistory();
  const dispatch = useDispatch();

  const startOver = (e: MouseEvent) => {
    dispatch(resetRedux());
    history.push("/");
  };

  const changeSentence = (e: MouseEvent) => {
    history.push("/");
  };

  return (
    <div className="main-container">
      <div className="result-container">
        <h1>Your sentence is:</h1>
        <h2>
          {who} {what} {where} {when}
          {dot}
        </h2>
        <div className="result-container__buttons">
          <button className="btn btn-primary" onClick={startOver}>
            Start Over
          </button>
          <button className="btn btn-warning" onClick={changeSentence}>
            Adjust the sentence
          </button>
        </div>
      </div>
    </div>
  );
};
