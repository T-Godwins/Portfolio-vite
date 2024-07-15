import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card/Card.jsx'
import Headshot from './Card/Headshot.jsx'
import Navigation from './Navigation/Navigation.jsx'



function App(){

  return(
    <>
    <Headshot/>
    <Navigation/>
    <Headshot/><Headshot/>
    <Card/>
    <Header/>
    <Footer/>
    <Card/>
    </>
  );
}

export default App
