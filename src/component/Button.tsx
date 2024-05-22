type Props = {
    label: string;
    onMyClick?: () => void
  };

function Button(props:Props){
    return <button className="btn btn-warning rounded-0 mx-2 my-2" >{props.label ?? ''}</button>
}

function ButtonNew(props:Props){
    return <button className="btn btn-danger rounded-0 mx-2 my-2" onClick={props.onMyClick
    } >{props.label ?? ''}</button>
}
export{ Button, ButtonNew}     