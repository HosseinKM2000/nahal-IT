import './App.css';
import { Route , Routes } from 'react-router';
// import components
import Articles from './components/Articles/Articles';
import Article from './components/Articles/Article/Article';
import ExEcWebsite from './components/Services/ExEcWebsite/ExEcWebsite';
import SaleReadyTemplate from './components/Services/SaleReadyTemplate/SaleReadyTemplate';
import ExWebDesign from './components/Services/ExWebDesign/ExWebDesign';
import Seo from './components/Services/Seo/Seo';
import Business from './components/Services/Business/Business';
import SocalMedia from './components/Services/SocalMedia/SocalMedia';
import MotionGraphic from './components/Services/MotionGraphic/MotionGraphic';
import Graphic from './components/Services/Graphic/Graphic';
import Proposal from './components/Services/Proposal/Proposal';
import MobileApplication from './components/Services/MobileApplication/MobileApplication';
import PremierEditing from './components/Services/PremierEditing/PremierEditing';
import SoundEditing from './components/Services/SoundEditing/SoundEditing';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App flex justify-center items-center">
      <Routes>
        <Route element={<Articles/>} path='/articles'/>
        <Route element={<Article/>} path='/articles/article'/>
        <Route element={<ExEcWebsite/>} path='/services/فروش-سایت-اختصاصی-و-اقتصادی'/>
        <Route element={<SaleReadyTemplate/>} path='/services/فروش-قالب-سایت' />
        <Route element={<ExWebDesign/>} path='/services/طراحی-سایت-اختصاصی' />
        <Route element={<Seo/>} path='/services/سئو-وب-سایت' />
        <Route element={<Business/>}  path='/services/خدمات-کسب-و-کار'/>
        <Route element={<SocalMedia/>} path='/services/خدمات-شبکه-های-اجتماعی'/> 
        <Route element={<MotionGraphic/>} path='/services/موشن-گرافیک'/>
        <Route element={<Graphic/>} path='/services/گرافیک'/>
        <Route element={<Proposal/>} path='/services/تدوین-پروپوزال'/>
        <Route element={<MobileApplication/>} path='/services/اپلیکیشن-موبایل'/>
        <Route element={<PremierEditing/>} path='/services/خدمات-پریمیر-تدوین-فیلم'/>
        <Route element={<SoundEditing/>} path='/services/خدمات-تدوین-صدا-و-صدا-گذاری'/>
        <Route element={<ContactUs/>} path='/contact'/>
      </Routes>
    </div>
  );
}

export default App;
