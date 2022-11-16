import {Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";

const Router = () => (
        <Routes> 
            <Route index element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        </Routes>
)

export default Router