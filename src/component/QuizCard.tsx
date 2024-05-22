
import { useState } from 'react'
import CheckBox from './CheckBox'

type Props = {
    question : string
    options : Array<{
        title: string
        value : number|string
    }>
    updateIndex?:()=>void
    selectedOption?:any
}
function QuizCard(props : Props){
    const { question, options, updateIndex, selectedOption } = props
    const [disableBtn,UpdateDisable] = useState(true)
    const internalSelectedOption = (option:string) => {
        selectedOption(option)
        UpdateDisable(false)
    }
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                <div className="card-header bg-primary text-white text-center">
                    Quiz Title
                </div>
                <div className="card-body">
                    <h5 className="card-title">{question}</h5>
                    <div className="form-group">
                        {options.map((item,index)=>{
                            return <CheckBox
                            key={index}
                            index={index}
                            title={item.title}
                            value={item.value}
                            selectedOption={(option:string)=>{
                                internalSelectedOption(option)
                            }}
                            />
                        })}
                    </div>
                    <button className="btn btn-primary btn-block mt-2" disabled={disableBtn} onClick={updateIndex} >Submit</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
}
export default QuizCard;
 {{}}