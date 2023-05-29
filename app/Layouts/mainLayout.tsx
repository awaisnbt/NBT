
import { Navbar } from "../components/page";
import { Footer } from "../components/page";
 
 function Mainlayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  );
}


export default Mainlayout
