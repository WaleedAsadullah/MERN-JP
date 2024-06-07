import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import ApiHandling from "../pages/ApiHandling";
import SingleProduct from "../pages/SingleProduct";

export default function AppRouter(){
    return <>
    {/* <BrowserRouter>
    <Routes>
        <Route path="products" element={<ShopPage/>}/>
        <Route path="products/:id" element={<SingleProduct/> }/>
        <Route path="api" element={<ApiHandling/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
}