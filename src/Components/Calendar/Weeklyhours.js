const Weeklyhours = (props) => {
  return (
    <>
      <section class="weeklyhours">
        <div class="container">
          <h2>Class Weekly Hours</h2>
        </div>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">SUN</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">MON</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">TUE</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">WED</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">THU</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">FRI</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">SAT</th>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <input type="time" class="tim" name="appt" />
              </td>
              <td>
                <div class="expand-icon"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Weeklyhours;
