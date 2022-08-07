import { Fragment } from 'react';
import './App.css';
import { RxidTable, TableModel } from './Rxid-Table';

function App() {

  const model = new TableModel([
    // {
    //   header : 'No',
    //   field: 'id'
    // },
    {
      header : 'Name',
      field : 'name'
    },
    {
      header : 'Address',
      field : 'address'
    },
    {
      header : 'Phone',
      field : 'phone'
    },
    {
      header : 'Price',
      field : 'price'
    }
  ]);

  const users = [
      {
        id: 1,
        name: 'Reyhan',
        address: 'Blok e3 no 4',
        phone: '+628971994601',
        price: 120000
      },
      {
        id: 2,
        name: 'Vika',
        address: 'Blok e3 no 5',
        phone: '+628971994602',
        price: 130000
      },
      {
        id: 3,
        name: 'Hendra',
        address: 'Blok e3 no 6',
        phone: '+628971994603',
        price: 130000
      },
      {
        id: 1,
        name: 'Reyhan',
        address: 'Blok e3 no 4',
        phone: '+628971994601',
        price: 120000
      },
      {
        id: 2,
        name: 'Vika',
        address: 'Blok e3 no 5',
        phone: '+628971994602',
        price: 130000
      },
      {
        id: 3,
        name: 'Hendra',
        address: 'Blok e3 no 6',
        phone: '+628971994603',
        price: 130000
      },
      {
        id: 1,
        name: 'Reyhan',
        address: 'Blok e3 no 4',
        phone: '+628971994601',
        price: 120000
      },
      {
        id: 2,
        name: 'Vika',
        address: 'Blok e3 no 5',
        phone: '+628971994602',
        price: 130000
      },
      {
        id: 3,
        name: 'Hendra',
        address: 'Blok e3 no 6',
        phone: '+628971994603',
        price: 130000
      },
      {
        id: 1,
        name: 'Reyhan',
        address: 'Blok e3 no 4',
        phone: '+628971994601',
        price: 120000
      },
      {
        id: 2,
        name: 'Vika',
        address: 'Blok e3 no 5',
        phone: '+628971994602',
        price: 130000
      },
      {
        id: 3,
        name: 'Hendra',
        address: 'Blok e3 no 6',
        phone: '+628971994603',
        price: 130000
      }
  ];

  model.setRecords(users);

  const handleEdit = (record) => {
    console.log('come from handleEdit');
    console.log(record);
  }

  const handleDelete = (record) => {
    console.log('come from handledelete');
    console.log(record);
  }

  const userAction = (record) => {
    return(
      <Fragment>
      <button className="btn btn-sm btn-warning mx-2" onClick={() => handleEdit(record)}>
          <em className="fas fa-pen"></em>
      </button>
      <button className="btn btn-sm btn-danger mx-2" onClick={() => handleDelete(record)}>
          <em className="fas fa-trash"></em>
      </button>
      </Fragment>
    )
  };

  return (
    <div className="App">

      <RxidTable model={model} actions={userAction}/>

    </div>
  );
}

export default App;
