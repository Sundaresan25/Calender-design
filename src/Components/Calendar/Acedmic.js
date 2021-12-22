const Acdemic = (props) => {
  return (
    <>
      <section class="acdemic">
        <div class="container">
          <h2>Acedemic year</h2>
          <div class="row">
            <div class="col-md-6">
              <h2>From</h2>
              <input class="dat" type="date" value="" />
            </div>
            <div class="col-md-6">
              <h2>To</h2>
              <input class="dat" type="date" value="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acdemic;
