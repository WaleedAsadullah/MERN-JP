type Props = {
    index : number
    title : string
    value : number|string
    selectedOption? : any
}
function CheckBox(props : Props){
    const { index, title, value, selectedOption } = props
    const myCustomSelectedOption = () => {
        selectedOption(value)
    }
    return <>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id={'option'+index} value={value} onClick={myCustomSelectedOption} />
            <label className="form-check-label" htmlFor={'option'+index}>{index+1}. {title}</label>
        </div>
    </>
}
export default CheckBox