import Home from './pages/Home';
import Intro from './pages/Intro';
import GraphDotmap from './pages/GraphDotmap'
import GraphBarchart from './pages/GraphBarchart';
import DataImage from './pages/DataImage';
import DataVideo from './pages/DataVideo';

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
    component: GraphDotmap,
  },
  {
    path:'/graph-barchart',
    component: GraphBarchart,
  },
  {
    path:'/data-image',
    component: DataImage,
  },
  {
    path:'/data-video',
    component: DataVideo,
  },
  
]

export default routes;