import { HomePage } from "../pages/HomePage/HomePage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

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
    path: "/:type",
    page: TypeProductPage,
    isShowHearder: true,
  },
  {
    path: "/signin",
    page: SignInPage,
    isShowHearder: true,
  },
  {
    path: "/signup",
    page: SignUpPage,
    isShowHearder: true,
  },
  {
    path: "/productdetail",
    page: ProductDetailPage,
    isShowHearder: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
