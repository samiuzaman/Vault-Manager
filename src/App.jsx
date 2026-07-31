import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import BookmarkForm from "./Main/BookmarkForm";
import Main from "./Main/Main";

function App() {
  return (
    <>
      <Header />
      <main>
        <BookmarkForm />
        <Main/>
      </main>
      <Footer />
    </>
  );
}

export default App;
