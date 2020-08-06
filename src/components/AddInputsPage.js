import React,{useState} from 'react';
import {useDispatch} from "react-redux"
import {addInput} from "../actions/inputs"
import { Redirect } from "react-router-dom"

export const AddInputPage = () => {

    const [who,setWho] = useState ("")
    const [what,setWhat] = useState ("")
    const [when,setWhen] = useState ("")
    const [where,setWhere] = useState ("")
    const dispatch = useDispatch()
    const [toResult,setToResult] = useState (false)
    
    const submitForm = (e) => {
        e.preventDefault()
        if (!who || !what || !when || !where) {
            alert ("Missing entry, please fill all entries!")
        } else {
            dispatch(addInput({who,what,when,where}))
            setToResult (true)
        }
    }
    
    return (
        <div className="main-container">
            <form onSubmit={submitForm} className="input-form">
                <h1>Sentence Game</h1>
                <div class="form-group">
                    <label for="formGroupExampleInput">Who?</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"
                    value={who} onChange={(e) => setWho(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2" id={who==="" ? "hidden" : "formGroupExampleInput2" }>What?</label>
                    <input type="text" 
                    class="form-control" id={who==="" ? "hidden" : "formGroupExampleInput2" }
                    placeholder="Another input placeholder"
                    value={what} onChange={(e) => setWhat(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput3" id={what==="" ? "hidden" : "formGroupExampleInput3" }>When?</label>
                    <input type="text" 
                    class="form-control" id={what==="" ? "hidden" : "formGroupExampleInput3" }
                    placeholder="Another input placeholder"
                    value={when} onChange={(e) => setWhen(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput4" id={when==="" ? "hidden" : "formGroupExampleInput3" }>Where?</label>
                    <input type="text" 
                    class="form-control" id={when==="" ? "hidden" : "formGroupExampleInput4" }
                    placeholder="Another input placeholder"
                    value={where} onChange={(e) => setWhere(e.target.value)}/>
                </div>
                <button type="submit" 
                class="btn btn-primary">Generate a sentence</button>
                {toResult ? <Redirect to="/result" /> : null}
            </form>
        </div>
    )
}