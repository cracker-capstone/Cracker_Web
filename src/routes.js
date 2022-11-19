import Home from './Home';
import Intro from './Intro';
import Graph_Dotmap from './Graph_Dotmap'
import Graph_Barchart from './Graph_BarChart';
import Data_Image from './Data_Image';
import Data_Video from './Data_Video';
const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path:'/intro',
    component: Intro,
  },
  {
    path:'/graph-dotmap',
    component: Graph_Dotmap,
  },
  {
    path:'/graph-barchart',
    component: Graph_Barchart,
  },
  {
    path:'/data-image',
    component: Data_Image,
  },
  {
    path:'/data-video',
    component: Data_Video,
  },
  
]

export default routes;