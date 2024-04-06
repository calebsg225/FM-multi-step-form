import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <NavBar />
        <div className="form-interaction-container">
          <Form />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
