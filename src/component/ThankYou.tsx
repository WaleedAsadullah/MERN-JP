type Props = {
    message : string
}

function ThankYou(props : Props){
    return   <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="alert alert-success text-center" role="alert">
                    <p>{props.message}</p>
                    </div>
                </div>
                </div>
            </div>
}
export default ThankYou