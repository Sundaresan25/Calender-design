const Weekdays = (props) => {
  return (
    <>
      <section class="weekdays">
        <div class="container">
          <h2>Week Days Starts On</h2>
          <div class="row">
            <div class="col-md-6">
              <h2>From</h2>
              <div>
                <select
                  class="selectpicker btn"
                  aria-label="Default select example"
                  placeholder="123-45-678"
                  data-live-search="true"
                >
                  <option value="1">MON</option>
                  <option value="2">TUE</option>
                  <option value="3">WED</option>
                  <option value="4">THU</option>
                  <option value="1">FRi</option>
                  <option value="2">SAT</option>
                  <option value="3">SUN</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <h2>To</h2>
              <div>
                <select
                  class="selectpicker btn"
                  aria-label="Default select example"
                  data-live-search="true"
                >
                  <option value="1">MON</option>
                  <option value="2">TUE</option>
                  <option value="3">WED</option>
                  <option value="4">THU</option>
                  <option value="1">FRi</option>
                  <option value="2">SAT</option>
                  <option value="3">SUN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weekdays;
