import React from 'react';
// import Field from './components/field';

class App extends React.Component {
  constructor() {
    super();
    // Temporarily mock data
    this.state = {data: [
      {id: 1, name: 'Apartment', cost: 1000},
      {id: 2, name: 'Cable', cost: 100},
      {id: 3, name: 'Light', cost: 60}
    ]};
  }

  update(e) {
    this.setState({});
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

        <div>
          <table>
            <tbody>
              {rows}
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <NewItem />
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

const NewItem = (props) => {
  return (
    <div>
      <h3>New Item</h3>
      <p>Name</p>
      <input type="text"/>
      <p>Cost</p>
      <input type="number"/>
      <button>Add</button>
    </div>
  );
}

export default App
