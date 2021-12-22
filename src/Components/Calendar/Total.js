const Total = (props) => {
  return (
    <>
      <section class="total-result">
        <div class="container">
          <p>
            All(0)| Sundays(0)| Saturdays(0)| Public
            <span style={{ color: "#1db058" }}>(0)</span>| Culturals
            <span style={{ color: "#20b8da" }}>(0)</span>| Exams
            <span style={{ color: "#f8b50a" }}>(0)</span>| UnExp
            <span style={{ color: "#e20d14" }}>(0)</span>
          </p>

          <table class="table table-sm">
            <thead></thead>
            <tbody>
              <tr>
                <th scope="row">
                  <h2>Total Number Of Working Days</h2>
                </th>
                <td>210 Days</td>
              </tr>
              <tr>
                <th scope="row">
                  <h2>Total Working Hours</h2>
                </th>
                <td>1440 Hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="result-save">
        <div class="container">
          <button type="button" class="btn btn-danger">
            Save
          </button>
          <button type="button" class="btn btn-danger">
            Cancel
          </button>
        </div>
      </section>
    </>
  );
};

export default Total;
