import { Routes, Route } from "react-router-dom";
import { DefaultTemplate } from "../templates/DefaultTemplate/DefaultTemplate";
import { allRoutes } from "./routes";
import { Home } from "../pages/Home";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route key="/" index element={<Home />} />
        {allRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </Routes>
  );
}
