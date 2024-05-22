import { useState } from "react";

function UseStates(){
    const [value,newValue] = useState(100)
    const [valueTwo,newValueTwo] = useState(100)
    const [txt,setTxt] = useState('')
    const [txtEdit,setTxtEdit] = useState('')
    const [txtEditId,setTxtEditID] = useState(0)
    const [txtList, setTxtList] = useState<any>([])

    // console.log("test")
    // console.log(value)
    const del = (i:number) => {
        txtList.splice(i,1);
        setTxtList([...txtList])
    }
    const edit = (i:number,value:any) => {
        setTxtEdit(value)
        setTxtEditID(i)
    }
    const update = ()=> {
        // console.log(isEdit.index)
        txtList[txtEditId] = txtEdit
        setTxtList([...txtList])
    }
    return (
        
        <>
            {/* {console.log("work")} */}
            {/* <h1>{value}</h1>
            <h1>{valueTwo}</h1> */}
            {/* <button 
            onClick={()=>
                {newValue(value*2)
                    console.log("new")
                    newValueTwo(valueTwo*2)
                }}
            >Add</button> */}
            <hr></hr>
            {txt}
            <input type="text" onChange={(e)=>setTxt(e.target.value)} />
            <button onClick={()=>
            {
                txtList.push(txt)
                console.log(txtList)
                setTxtList([...txtList])
            }

            } >add</button>

            {txtList.map((item:any,index:any) =>
            {  
                return (<p key={index} >{item} <button onClick={()=>del(index)} >Delete</button>
                <button onClick={()=>edit(index,item)} >edit</button>
                </p>)
            })}

            <input type="text" value={txtEdit} onChange={(e)=>setTxtEdit(e.target.value)} />
            <button  onClick={()=>update()}>
            update
            </button>
        </>
    );
}

export default UseStates;