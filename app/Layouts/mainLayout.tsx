
import { Header, Navbar ,Footer } from "../components";

 
 function Mainlayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header/>
    <Navbar/>
    {children}
    <Footer/>
    </>
  );
}


export default Mainlayout
