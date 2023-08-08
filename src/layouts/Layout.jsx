import Header from "../components/Header/Index";
import Footer from '../components/Footer/Index'

function Layout({children}) {
  return (
    <>
    <Header/>
       {children}
    <Footer/>
    </>
    
  )
}
export default Layout;


