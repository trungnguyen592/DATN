import { HomePage } from "../pages/HomePage/HomePage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHearder: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHearder: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHearder: true,
  },
  {
    path: "/type",
    page: TypeProductPage,
    isShowHearder: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
