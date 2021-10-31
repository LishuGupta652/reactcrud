import {React , Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state= {
      employeeData: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtname.value;
    let age = this.refs.txtage.value;

    let newEmployee= {
      "name" : name,
      "age": age,
    }
    employeeData.push(newEmployee);

    this.setState([
      employeeData
    ])

    this.refs.form.reset();
  }

  handleDelete = (e) => {
    let employeeData=  this.state.employeeData;
    employeeData.splice(e,1);
    this.setState({
      employeeData
    })
  }

  render(){
    let employeeData = this.state.employeeData;

    return(<div>

      <form ref="form">
        <label htmlFor="name">Name</label>
        <input type="text" ref="txtName" placeholder="Enter your name" />
        <br />
        <label htmlFor="age">Age</label>
        <input type="text" ref="txtAge" placeholder="Ente your age" />
        <br />
        <button onClick={e=>this.handleSubmit(e)}type="submit" >Submit</button>
      </form>
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
        </thead>
        {employeeData.map((emp, idx) => {
          <tr key={idx}>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td onClick={e => this.handleEdit(e)}>Edit</td>
            <td onClick={e =>this.handleDelete(e)}>Delete</td>
          </tr>
        })}
      </table>
    </div>
    )
  }
}

export default App;