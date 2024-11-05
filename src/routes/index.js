import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrderPage from "../page/OrderPage/OrderPage";
import { ProductPage } from "../page/ProductPage/ProductPage";

export const route = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true  
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true   
    },
    {
        path: "/product",
        page: ProductPage,
        isShowHeader: true   
    },
    {
        path: "/*",
        page: NotFoundPage,
        isShowHeader: false    
    },
]