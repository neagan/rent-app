import React from 'react';
import NewItem from './components/newitem';
// import Field from './components/field';

class App extends React.Component {
  constructor() {
    super();
    // Temporarily mock data
    this.id = 1;
    this.state = {data: [
      // {id: 1, name: 'Apartment', cost: 1000},
      // {id: 2, name: 'Cable', cost: 100},
      // {id: 3, name: 'Light', cost: 60}
    ]};
  }

  handleItemSubmit(item) {
    item.id = this.id;
    this.id++;
    console.log(item);
    let data = this.state.data;
    data.push(item);
    this.setState({data: data});
  }

  render() {
    let total = 0;
    let rows = this.state.data.map(item => {
      total += item.cost;
      return <ItemRow key={item.id} data={item} />
    });

    return (
      <div>
        <h1>Rent Calculator</h1>

        <table>
          <tbody>
            {rows}
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>

        <NewItem onItemSubmit={this.handleItemSubmit.bind(this)} />
      </div>
    )
  }
}

const ItemRow = (props) => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.cost}</td>
    </tr>
  );
}

// const NewItem = (props) => {
//   return (
//     <div>
//       <h3>New Item</h3>
//       <p>Name</p>
//       <input type="text"/>
//       <p>Cost</p>
//       <input type="number"/>
//       <button>Add</button>
//     </div>
//   );
// }

export default App
