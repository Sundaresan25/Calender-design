const Days = (props) => {
  return (
    <>
      <section class="days">
        <div class="container">
          <h2>Select Working days</h2>
          <div class="weekDays-selector">
            <input type="checkbox" id="weekday-mon" class="weekday" />
            <label for="weekday-mon">M</label>
            <input type="checkbox" id="weekday-tue" class="weekday" />
            <label for="weekday-tue">T</label>
            <input type="checkbox" id="weekday-wed" class="weekday" />
            <label for="weekday-wed">W</label>
            <input type="checkbox" id="weekday-thu" class="weekday" />
            <label for="weekday-thu">T</label>
            <input type="checkbox" id="weekday-fri" class="weekday" />
            <label for="weekday-fri">F</label>
            <input type="checkbox" id="weekday-sat" class="weekday" />
            <label for="weekday-sat">S</label>
            <input type="checkbox" id="weekday-sun" class="weekday" />
            <label for="weekday-sun">S</label>
          </div>
          <button type="button" class="btn btn-danger">
            Apply
          </button>
        </div>
      </section>
    </>
  );
};

export default Days;
