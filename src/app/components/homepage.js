import Header from "./header";
import Main from "./main-content";
import Footer from "./footer";
export default function Homepage(){
    return(
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> 
            <Header />
            <Main />
            <Footer />
        </div>
    );
}