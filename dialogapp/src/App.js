import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from './Box';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buisnessShow: false,
      personalShow: true,
      personal: [{
        street: "Hariyazam colony",
        city: "nirsa",
        district: "Dhanbad",
        country: "India",
        primary: true
      }],
      buisness: [{
        street: "Global Axis B&C",
        city: "Bangalore",
        district: "Bangalore",
        country: "India",
        primary: true
      }]
    }
  }

  onPersonalAdd() {
    this.setState({ personalShow: true, buisnessShow: false });
  }

  onBuisnessAdd() {
    this.setState({ buisnessShow: true, personalShow: false });
  }

  onSelectRow(e) {
    alert("clicked"+e.target.cellIndex);
  }

  render() {
    return <div className='divContainer'><div>
      <div class="divbutton">
        <button class="clickme">clickMe</button>
      </div>
      <div>
        <button onClick={this.onPersonalAdd.bind(this)}>Personal Address</button>
        <button onClick={this.onBuisnessAdd.bind(this)}>Business Address</button>
      </div>
      {this.state.buisnessShow &&

        <>
          <table className="table1">
            <thead className='thead'>
            <tr>
              <th class="th1">Street</th>
              <th class="th1">city</th>
              <th class="th1" >District</th>
              <th class="th1">Country</th>
            </tr></thead>
            <tbody>
            {this.state.buisness.map((val, key) => {
              return <tr key={key} onClick={this.onSelectRow.bind(this)}>
                <td>{val.street}</td><td>{val.city}</td><td>{val.district}</td><td>{val.country}</td>
              </tr>
            })}
            </tbody>
          </table>
        </>

      }
      {this.state.personalShow &&

        <>
          <table className='table1'>
            <thead className='thead'>
              <tr>
                <th class="th1">Street</th>
                <th class="th1" >city</th>
                <th class="th1">District</th>
                <th class="th1">Country</th>
              </tr>
            </thead>
            <tbody>
              {this.state.personal.map((val, key) => {
                return (<tr key={key} onClick={this.onSelectRow.bind(this)}>
                  <td>{val.street}</td><td>{val.city}</td><td>{val.country}</td><td>{val.district}</td>
                </tr>)
              })}
            </tbody>
          </table>

        </>

      }
      <Box ></Box>
    </div></div>
  }
}


export default App;
