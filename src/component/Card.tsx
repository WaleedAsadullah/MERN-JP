type Props = {
    imgUrl: string;
  };
function Card(props: Props){
    return (
        <div className="card d-flex" style={{width:"18rem"}}>
            <img className="card-img-top" src={props.imgUrl} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}
export default Card;