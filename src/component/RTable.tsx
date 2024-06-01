interface Props {
    dataSource : any,
    columns : Array<{
        key:string,
        label:string
        customHTML?:any
    }>,
    loading?:boolean
}
export default function  RTable(props:Props){
    const {dataSource, columns, loading} = props
    return <>
    <table>
        <thead>
        <tr>
            {columns.map((item:any,index:number)=>{
                return <th key={index} >{item.label}</th>
            })} 
        </tr>
        </thead>
        <tbody>
            {dataSource.map((item:any,index:number)=>{
                return <tr> {columns.map((itemCol:any,indexCol:number)=>{
                    return <td key={index+indexCol} >{ (itemCol.customHTML) ? itemCol.customHTML(item) : item[itemCol.key]}</td>
                })} </tr>
            })}
        </tbody>
    </table>
    </>
}