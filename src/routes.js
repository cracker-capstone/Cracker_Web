import Home from './pages/Home';
import Intro from './pages/Intro';
import GraphDotmap from './pages/GraphDotmap'
import GraphBarchart from './pages/GraphBarchart';
import DataImage from './pages/DataImage';
import DataVideo from './pages/DataVideo';
//라우터 경로 모아둔 파일

const routes = [
  {
    path:'/Cracker-Web/',
    component: Home,
  },
  {
    path:'/Cracker-Web/intro',
    component: Intro,
  },
  {
    path:'/Cracker-Web/graph-dotmap',
    component: GraphDotmap,
  },
  {
    path:'/Cracker-Web/graph-barchart',
    component: GraphBarchart,
  },
  {
    path:'/Cracker-Web/data-image',
    component: DataImage,
  },
  {
    path:'/Cracker-Web/data-video',
    component: DataVideo,
  },
  
]

export default routes;