import { useState } from "react";
const Holidays = (props) => {
  const [addHoliday, setAddHoliday] = useState(true);
  const [holidayList, setHolidayList] = useState();
  const Ui = (props) => {
    return (
      <>
        <div class="table-responsive-md">
          <table class="table table-striped  table-sm">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name of the holiday</th>
                <th scope="col">From Date</th>
                <th scope="col">To Date</th>
                <th scope="col">No of days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="expand-icon"></div>
                </th>
                <td>
                  <input class="inputbox" type="text" id="fname" name="fname" />
                </td>
                <td>
                  <input class="dat" type="date" value="2017-06-01" />
                </td>
                <td>
                  <input class="dat" type="date" value="2017-06-01" />
                </td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const holidayHandler = () => {
    console.log("onlcick");
  };

  return (
    <>
      <section class="holidays">
        <div class="container">
          <div class="text">
            <a class="buttons">Add Holidays</a>
            <a class="buttons" onClick={holidayHandler}>
              Public
            </a>
            <a class="buttons" onClick={Ui}>
              Cultrals
            </a>
            <a class="buttons" onClick={Ui}>
              Exams
            </a>
            <a class="buttons" onClick={Ui}>
              Unexp
            </a>
          </div>
          {addHoliday && <Ui />}
        </div>
      </section>
    </>
  );
};

export default Holidays;
