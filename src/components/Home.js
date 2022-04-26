import './pages.css';

const Home = () => {
  const para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo labore et dolore magna aliqua.';

  return (
    <section className="home-container">
      <h1>Welcome To Our page!</h1>
      <p>{para}</p>
    </section>
  );
};

export default Home;
