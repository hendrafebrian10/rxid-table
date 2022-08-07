import React, { Component } from 'react';
import "./RxidTable.css";

class RxidTable extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    handleShowMaxRow(event){
        console.log(event)

    }
    state = {  }
    render() { 
        return ( 
                <div className="container py-4">

                {/* HEADER */}
                <div className="row">

                    <div className="col-4 align-middle me-auto">
                    <h3 className="pt-1">PELANGGAN</h3>
                    </div>

                    <div className="col-xs-fluid col-sm-6">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                        <em className="fas fa-search"></em>
                        </span>
                        <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
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
                                <th>No</th>
                                {this.props.model.colums.map((colum, index) => {
                                    return(
                                        <th className="sortable" key={index}>
                                            <div className="th-content">
                                                <span className="th-text">{colum.header}</span>
                                                <span className="sort">
                                                    <em className="fas fa-sort"></em>
                                                </span>
                                            </div>
                                        </th>
                                    )
                                })}

                                {this.props.actions && (
                                    <th className="text-center">Action</th>
                                )}
                                
                                {/* <th >
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
                                </th> */}
                                {/* <th className="d-flex justify-content-center">
                                <div className="th-content">
                                    <span className="th-text">ACTION</span>
                                </div>
                                </th> */}
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.model.records.map((record, indexI) => {
                                    return ( 
                                        <tr key={indexI}>
                                            <td>{indexI + 1}</td>

                                            {this.props.model.colums.map((colum, indexJ) => {
                                                return (
                                                    <td key={indexI + "" + indexJ}>
                                                        {record[colum.field]}
                                                    </td>
                                                )
                                            })}

                                            {this.props.actions && (
                                                <td className="text-center">{this.props.actions(record)}</td>
                                                )
                                                    
                                            }      
                                        </tr>
                                    );
                                })}
                                
                            {/* <tr>
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
                            </tr> */}
                            </tbody>
                        </table>
                        </div>
                </div>


                </div> 

                {/* FOOTER */}
                <div className="row">

                    {/* SELECT NUMBET OF ROW */}
                    <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-6">
                        <select className="form-select" aria-label="Default select example"
                        value={10}
                        onChange={(event) => this.handleShowMaxRow(event)}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        </select>
                    </div>
                    

                    {/* PAGINATION */}
                    <div className="col-4 ms-auto">
                        <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div> 
                </div>

        );
    }
}
 
export default RxidTable;