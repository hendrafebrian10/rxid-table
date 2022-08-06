import './App.css';

function App() {
  return (
    <div className="App">

      <div className="container py-4">

          {/* HEADER */}
          <div className="row">

              <div className="col-4 align-middle me-auto">
                <h3 className="pt-1">PELANGGAN</h3>
              </div>

              <div className="col-xs-fluid col-sm-6">
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                    <em className="fas fa-search"></em>
                  </span>
                  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
              </div>
          </div>


          {/* BODY */}
          <div className="row mt-2">
            <div className="col">

              
                  <div className="table-responsive rxid-table ">
                    <table className="table table-striped table-light">
                      <thead>
                        <tr>
                          <th >
                            <div className="th-content">
                                <span className="th-text">ID</span>
                            </div>
                          </th>
                          <th className="sortable">
                            <div className="th-content">
                                <span className="th-text">NAME</span>
                                <span className="sort">
                                  <em className="fas fa-sort"></em>
                                </span>
                            </div>
                          </th>
                          <th className="sortable">
                            <div className="th-content">
                                <span className="th-text">ADDRESS</span>
                                <span className="sort">
                                  <em className="fas fa-sort"></em>
                                </span>
                            </div>
                          </th>
                          <th className="sortable">
                            <div className="th-content">
                                <span className="th-text">PHONE</span>
                                <span className="sort">
                                  <em className="fas fa-sort"></em>
                                </span>
                            </div>
                          </th>
                          <th className="sortable">
                            <div className="th-content">
                                <span className="th-text">PRICE</span>
                                <span className="sort">
                                  <em className="fas fa-sort"></em>
                                </span>
                            </div>
                          </th>
                          <th >
                            <div className="th-content">
                                <span className="th-text">ACTION</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>001</td>
                          <td>Reyhan juniardi jelek sekali</td>
                          <td>Blok e3 no 4</td>
                          <td>+6289719946011</td>
                          <td>120000</td>
                          <td className="text-center">
                              <button className="btn btn-sm">
                                <em className="fas fa-pen"></em>
                              </button>
                          </td>
                        </tr>
                        <tr>
                          <td>002</td>
                          <td>Vika</td>
                          <td>Blok e3 no 6</td>
                          <td>+6289719946012</td>
                          <td>150000</td>
                          <td className="text-center">
                              <button className="btn btn-sm">
                                <em className="fas fa-pen"></em>
                              </button>
                          </td>
                        </tr>
                        <tr>
                          <td>003</td>
                          <td>Hendra feb</td>
                          <td>Blok e3 no 8</td>
                          <td>+62854699462</td>
                          <td>2000000</td>
                          <td className="text-center">
                              <button className="btn btn-sm">
                                <em className="fas fa-pen"></em>
                              </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            </div>


          </div> 

          {/* FOOTER */}
          <div className="row">

              {/* SELECT NUMBET OF ROW */}
              <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-6">
                  <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                  </select>
              </div>
              

              {/* PAGINATION */}
              <div className="col-4 ms-auto">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
              </div>
          </div> 
      </div>

    </div>
  );
}

export default App;
