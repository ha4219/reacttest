import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';

const customer = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'jeong',
  'bir':'11',
  'gender':'male',
  'job':'dd',
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'jeong',
    'bir':'11',
    'gender':'male',
    'job':'dd',
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'jeong',
    'bir':'11',
    'gender':'male',
    'job':'dd',
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c=>{
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                bir={c.bir}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
