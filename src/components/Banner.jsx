const Banner = ({ img }) => {
  return (
    <section className="section-title">
      <div className="container">
        <img src={img} alt="title" />
      </div>
    </section>
  );
};

export default Banner;
