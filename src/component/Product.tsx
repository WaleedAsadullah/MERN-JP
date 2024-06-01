interface Props {
    title:string
    image:string
    price :any
    description : string
    category : string
    rating : any
}
export default function Product(props : Props){

    const {title, image, price, description, category, rating} = props
    return (
        <>  
        <div className="col-4" >
            <div className="card shadow mb-3 p-3" style={{maxWidth:'540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="Fjallraven - Foldsack No. 1 Backpack" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{height:100}} >{description}</p>
                        <p className="card-text"><small className="text-muted">Category: {category}</small></p>
                        <p className="card-text"><strong>${price}</strong></p>
                        <div className="d-flex">
                        <div className="mr-3">
                            <span className="font-weight-bold">Rating:</span>
                            <span>{rating.rate}</span>
                        </div>
                        <div>
                            <span className="font-weight-bold">Reviews:</span>
                            <span>{rating.count}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}