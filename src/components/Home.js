import './pages.css';

const Home = () => {
  const para = 'Description: Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations, Read a random math-related quote. By building this application, you will learn how to use React. How to build the "Math magicians" website.   The core functionality is a calculator. At the very beginning your website will contain only the simple UI presented below, but it will be able to perform all math operations.';

  return (
    <section className="container-home">
      <h1>Welcome To Our Page!</h1>
      <p>{para}</p>
    </section>
  );
};

export default Home;
