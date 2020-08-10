import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addInput } from "../actions/inputs";
import { useHistory } from "react-router-dom";
import { InputState } from "../actions/inputs";
import { useTranslation } from "react-i18next";

interface UseFormInputs {
  who: string;
  when: string;
  what: string;
  where: string;
}

type useFormKeys = keyof UseFormInputs;

export const AddInputPage = () => {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, errors } = useForm<UseFormInputs>();
  const onSubmit = (data: InputState) => {
    dispatch(addInput(data));
    history.push("/result");
  };

  const fields: useFormKeys[] = ["who", "what", "when", "where"];

  const [initializedInput, setInitializedInput] = useState({
    who: true,
    when: false,
    where: false,
    what: false,
  });

  const changeInputValue = (inputName: string) => {
    setInitializedInput({ ...initializedInput, [inputName]: true });
  };

  const result = useSelector((state: InputState) => state);

  useEffect(() => {
    if (result.who !== "") {
      setInitializedInput({
        who: true,
        when: true,
        where: true,
        what: true,
      });
      reset(result);
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form">
        <h1>{t("input-page.title")}</h1>
        <div className="form-group">
          {fields.map((el, i = 0) => (
            <div className="">
              <input
                type="text"
                name={el}
                ref={register({ required: true })}
                className="form-control"
                id="formGroupExampleInput"
                placeholder={t(`input-page.inputs.${el}`)}
                onChange={changeInputValue.bind(null, el)}
              />
              {errors[el] && <p>{t(`input-page.error-message`)}</p>}
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary input">
          {t("buttons.button-input")}
        </button>
      </form>
    </div>
  );
};
