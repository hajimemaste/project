import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { layoutRoutes } from "../configs";
import LayoutContainer from "../components/organisms/LayoutContainer";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {layoutRoutes.map(
          ({ path, component, isHeader, isCta, isFooter, title }) => (
            <Route
              key={title}
              path={path}
              element={
                <LayoutContainer
                  component={component}
                  isHeader={isHeader}
                  isCta={isCta}
                  isFooter={isFooter}
                />
              }
            />
          )
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
