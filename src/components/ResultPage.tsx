import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetRedux } from "../actions/inputs";
import { InputState } from "../actions/inputs";
import { useTranslation } from "react-i18next";

export const ResultPage = () => {
  const { who, what, where, when } = useSelector((state: InputState) => state);
  const dot = who && what && where && when ? "." : "";
  const history = useHistory();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const startOver = () => {
    dispatch(resetRedux());
    history.push("/");
  };

  const changeSentence = () => {
    history.push("/");
  };

  return (
    <div className="main-container">
      <div className="result-container">
        <h1>{t("result-page.title")}</h1>
        <h2>
          {who} {what} {where} {when}
          {dot}
        </h2>
        <div className="result-container__buttons">
          <button className="btn btn-primary" onClick={startOver}>
            {t("buttons.button-start-over")}
          </button>
          <button className="btn btn-warning" onClick={changeSentence}>
            {t("buttons.button-adjust")}
          </button>
        </div>
      </div>
    </div>
  );
};
