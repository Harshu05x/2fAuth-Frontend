const HomePage = () => {
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex flex-col justify-center items-center gap-4">
          <img src="/Auth.svg" alt="auth" className=" h-[8rem]"/>
          <p className="text-3xl font-semibold text-center">
            Welcome to Two-Factor Authentication System
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
