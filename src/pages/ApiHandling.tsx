import { Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import RTable from "../component/RTable"
export default function ApiHandling(){
    const [userList, updateUserList]:any = useState([])
    const [loading, updateLoading]:any = useState([])

    const getData = () => {
        axios.get('/users')
        .then((response)=>{
            updateUserList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    const postData = () => {
        axios.post('/todos',{
            userId:1,
            title:'ABC',
            completed:true
        })
        .then((response)=>{
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return <>
    <Button variant="contained" className="m-3" onClick={getData} >Get Api</Button>
    <Button variant="contained" className="m-3" onClick={postData} >Post Api</Button>
    <RTable
        dataSource={userList}
        columns={[
            {key:'name',label:'Name'},
            {key:'email',label:'Email'},
            {key:'button',label:'button',customHTML:((row : any) => <Button variant="contained" onClick={(row)=>{
                console.log(row)
            }} > Delete</Button>)}
        ]}
    />
    </>
}