import Header from "./pages/Header";
import Jon from "./pages/Jon";
import Posts from "./pages/Posts";
import Work from "./pages/Work";
import Carusel from "./pages/Carusel";
import Foiz from "./pages/Foiz";
import Footer from "./pages/Footer";
import Kego from "./pages/Kego";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Jon />
        <Posts />
        <Work />
        <Foiz />
        <Posts />
        <Carusel />
        <Kego/>
      </main>
      <Footer />
    </>
  )
}

export default App;