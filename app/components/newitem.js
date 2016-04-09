import React from 'react';

class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {name: '', cost: ''}
  }

  handleNameChange(e) {
   this.setState({name: e.target.value})

  }

  handleCostChange(e) {
    this.setState({cost: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name.trim()
    let cost = Number(this.state.cost.trim());
    if (!name || !cost) {
      return;
    }

    this.props.onItemSubmit({name: name, cost: cost});
    this.setState({name: '', cost: ''})
  }

  render() {
    return (
      <div>
        <h3>New Item</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Item Name"  value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          <input type="number" placeholder="Item Cost"  value={this.state.cost} onChange={this.handleCostChange.bind(this)} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default NewItem
