import { useLocation, useParams } from "react-router-dom";

function SingleProduct(){
    const params = useParams()
    const queryParams = useLocation()
    console.log(queryParams)
    console.log(params)
    return (
        <>
        </>
    );
}
export default SingleProduct;