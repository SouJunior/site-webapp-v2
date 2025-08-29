import { RouteEnum2 } from './utils/enums/RouteEnum';
import DesignController from './pages/design/controller/index.controller';
import ProductController from './pages/product/controller/index.controller';
import TechRecruiterController from './pages/tech-recruiter/controller/index.controller';

export const routes = [
  { path: RouteEnum2.UI_UX_DESIGN, component: DesignController },
  { path: RouteEnum2.PRODUCT, component: ProductController },
  { path: RouteEnum2.TECH_RECRUITER, component: TechRecruiterController },
];
