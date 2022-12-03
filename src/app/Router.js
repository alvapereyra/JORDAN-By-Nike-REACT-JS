import {Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";

const Router = () => (
        <Routes> 
            <Route index element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
)

export default Router