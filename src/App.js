import './App.css';
import { useState} from 'react';
function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState([]);
  const [stat, setStat] = useState(true);

  function store(e) {
    e.preventDefault();
    data.push({
      Name: name,
      Email: email,
      Phone: phone,
      Address: address
    });
    console.log(data);
    alert("Entry Recorded!");
  }

  function Members(e) {
    e.preventDefault();
    setStat(false);
  }
  if (stat) {
    return (
      <div className="App">
        <div className="outer">

          <div id="alpha" >
          <form onSubmit={store}>
            <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} className="letter"  required /><br />
            <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} className="letter" required/><br />
            <input type="text" placeholder='Phone Number' onChange={(e) => { setPhone(e.target.value) }} className="letter"required /><br></br>
            <input type="text" placeholder='Address'  className="letter"  onChange={(e) => { setAddress(e.target.value) }}required /><br/>
            <input type="submit" id="submit" className='butt' value="Add Member"></input>

            {/* <input type="submit" id="submit" value="Add Member" onChange={(e) => { set(e.target.value) }}></input> */}


          </form>

          </div>
          <br />


          {/* <button  type="submit" id="submit" value="Add Member" className='butt'>Add member</button> */}

        </div>
        {/* <button id="outbutt">View Member List</button> */}
        <input type="submit" id="showData" value="View Member List" onClick={Members}></input>

      </div>
    );
  }
  else {
    return (
      <div className="App">
        <div id="container">
          <p id="Heading">Member List</p>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Address</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <input type="submit" className="outbutt" value="View Member List" onClick={Members}></input>
      </div>
    );
  }
}

export default App;
