import { SCREEN_URL } from "../constants/index";
import { Home, AboutUs, Product, Showcase, Solution } from "../pages";

export const layoutRoutes = [
  {
    path: SCREEN_URL.HOME,
    component: Home,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Home",
  },
  {
    path: SCREEN_URL.ABOUTUS,
    component: AboutUs,
    isHeader: true,
    isCta: false,
    isFooter: true,
    title: "About Us",
  },
  {
    path: SCREEN_URL.PRODUCT,
    component: Product,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Products",
  },
  {
    path: SCREEN_URL.SHOWCASE,
    component: Showcase,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Showcase",
  },
  {
    path: SCREEN_URL.SOLUTION,
    component: Solution,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Solution",
  },
];
