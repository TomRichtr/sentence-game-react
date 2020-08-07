import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {addInput} from "../actions/inputs"
import { useHistory } from "react-router-dom"

export const AddInputPage = () => {
    const [inputValue, setInputValue] = useState({who: '',  what: '', when: '', where: ''});
    const [initializedInput, setInitializedInput] = useState({
        who: false,
        when: false,
        where: false,
        what: false
    })
    
    const changeInputValue = (inputName, e) => {
        setInputValue({...inputValue, [inputName]: e.target.value});
        setInitializedInput({...initializedInput, [inputName]: true});
    }

    const {who,what,where,when} = useSelector (state => state)


    useEffect(() => {
        console.log (who)
        if( who && what && where && when) {
            setInitializedInput({
                who: true,
                when: true,
                where: true,
                what: true
            })
            setInputValue ({
                who: who,
                when: when,
                where: where,
                what: what 
            })

        } 
    }, []);


    const dispatch = useDispatch()
    const history = useHistory ()
    
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addInput({...inputValue}))
        history.push("/result");
    }

    return (
        <div className="main-container">
            <form onSubmit={submitForm} className="input-form">
                <h1>Sentence Game</h1>
                
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" 
                    placeholder="Who?"
                    value={inputValue.who} 
                    onChange={changeInputValue.bind(null, 'who')}
                />
                </div>
                <div className={initializedInput.who ? "form-group" : "form-group hidden"}>
                    <input type="text" 
                    className="form-control" id="formGroupExampleInput2"
                    placeholder="What?"
                    value={inputValue.what} 
                    onChange={changeInputValue.bind(null, 'what')}
                />
                </div>
                <div className={initializedInput.what ? "form-group" : "form-group hidden"}> 
                    <input type="text" 
                    className="form-control" id="formGroupExampleInput3"
                    placeholder="When?"
                    value={inputValue.when} 
                    onChange={changeInputValue.bind(null, 'when')}
                />
                </div>
                <div className={initializedInput.when ? "form-group" : "form-group hidden"}>
                    <input type="text" 
                    className="form-control" id="formGroupExampleInput4"
                    placeholder="Where?"
                    value={inputValue.where} 
                    onChange={changeInputValue.bind(null, 'where')}
                />
                </div>
                <button 
                    type="submit"
                    hidden={
                        !initializedInput.who || 
                        !initializedInput.what || 
                        !initializedInput.when || 
                        !initializedInput.where ? true : false}
                    disabled={!inputValue.who ||
                        !inputValue.what ||
                        !inputValue.when ||
                        !inputValue.where ? true : false}
                    className="btn btn-primary input">Generate a sentence!
                </button>
            </form>
        </div>
    )
}