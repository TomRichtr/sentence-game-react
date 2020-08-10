import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput } from "../actions/inputs";
import { useHistory } from "react-router-dom";
import { InputState } from "../actions/inputs";

<<<<<<< HEAD
interface UseFormInputs {
  who: string;
  when: string;
  what: string;
  where: string;
}

type useFormKeys = keyof UseFormInputs;

export const AddInputPage = () => {
  const { register, handleSubmit, reset, errors } = useForm<UseFormInputs>();
  const onSubmit = (data: InputState) => {
    dispatch(addInput(data));
    history.push("/result");
  };

  const { t, i18n } = useTranslation();

  const fields: useFormKeys[] = ["who", "what", "when", "where"];
=======
export const AddInputPage = () => {
  const [inputValue, setInputValue] = useState<InputState>({
    who: "",
    what: "",
    when: "",
    where: "",
  });
>>>>>>> parent of 5845c5d... hooks form

  const [initializedInput, setInitializedInput] = useState({
    who: false,
    when: false,
    where: false,
    what: false,
  });

<<<<<<< HEAD
  const changeInputValue = (inputName: string) => {
=======
  const changeInputValue = (
    inputName: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue({ ...inputValue, [inputName]: e.target.value });
>>>>>>> parent of 5845c5d... hooks form
    setInitializedInput({ ...initializedInput, [inputName]: true });
  };

  const { who, what, where, when } = useSelector((state: InputState) => state);

  useEffect(() => {
<<<<<<< HEAD
    if (result) {
=======
    if (who && what && where && when) {
>>>>>>> parent of 5845c5d... hooks form
      setInitializedInput({
        who: true,
        when: true,
        where: true,
        what: true,
      });
<<<<<<< HEAD
      reset(result);
=======
      setInputValue({
        who,
        when,
        where,
        what,
      });
>>>>>>> parent of 5845c5d... hooks form
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

<<<<<<< HEAD
=======
  const submitForm = (e: any) => {
    e.preventDefault();
    dispatch(addInput(inputValue));
    history.push("/result");
  };

>>>>>>> parent of 5845c5d... hooks form
  return (
    <div className="main-container">
      <form onSubmit={submitForm} className="input-form">
        <h1>Sentence Game</h1>
        <h1>{t("Welcome to React")} </h1>

<<<<<<< HEAD
        {fields.map((el) => (
          <div className="form-group">
            <input
              type="text"
              name={el}
              ref={register({ required: true })}
              className="form-control"
              id="formGroupExampleInput"
              placeholder={`${el.replace(el[0], el.charAt(0).toUpperCase())}?`}
              onChange={changeInputValue.bind(null, el)}
            />
            {errors[el] && <p>Your input is required</p>}
          </div>
        ))}

=======
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Who?"
            value={inputValue.who}
            onChange={changeInputValue.bind(null, "who")}
          />
        </div>
        <div
          className={initializedInput.who ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="What?"
            value={inputValue.what}
            onChange={changeInputValue.bind(null, "what")}
          />
        </div>
        <div
          className={initializedInput.what ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="When?"
            value={inputValue.when}
            onChange={changeInputValue.bind(null, "when")}
          />
        </div>
        <div
          className={initializedInput.when ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput4"
            placeholder="Where?"
            value={inputValue.where}
            onChange={changeInputValue.bind(null, "where")}
          />
        </div>
>>>>>>> parent of 5845c5d... hooks form
        <button
          type="submit"
          hidden={
            !initializedInput.who ||
            !initializedInput.what ||
            !initializedInput.when ||
            !initializedInput.where
              ? true
              : false
          }
<<<<<<< HEAD
=======
          disabled={
            !inputValue.who ||
            !inputValue.what ||
            !inputValue.when ||
            !inputValue.where
              ? true
              : false
          }
>>>>>>> parent of 5845c5d... hooks form
          className="btn btn-primary input"
        >
          Generate a sentence!
        </button>
      </form>
    </div>
  );
};
