const Calenderlist = (props) => {
  return (
    <>
      <section class="calender-list">
        <h2>Class Calender List</h2>
        <table class="table table-sm">
          <thead class="thead">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Calender-List</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Class 1to8</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Class 9to10</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Export
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Calenderlist;
