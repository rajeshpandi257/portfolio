import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
// import Calculator from "./components/Calculator";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Calculator /> */}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
