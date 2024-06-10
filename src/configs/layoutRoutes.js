import { SCREEN_URL } from "../constants/index";
import {
  HomePage,
  AboutUsPage,
  ProductPage,
  ShowcasePage,
  SolutionPage,
} from "../pages";

export const layoutRoutes = [
  {
    path: SCREEN_URL.HOMEPAGE,
    component: HomePage,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Home",
  },
  {
    path: SCREEN_URL.ABOUTUSPAGE,
    component: AboutUsPage,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "About Us",
  },
  {
    path: SCREEN_URL.PRODUCTPAGE,
    component: ProductPage,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Products",
  },
  {
    path: SCREEN_URL.SHOWCASEPAGE,
    component: ShowcasePage,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Showcase",
  },
  {
    path: SCREEN_URL.SOLUTIONPAGE,
    component: SolutionPage,
    isHeader: true,
    isCta: true,
    isFooter: true,
    title: "Solution",
  },
];
