import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import './index.css'

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" }, { name: "Patis" }],
      input: ''
    };
  }

  onUpdate = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  addProduct = () => {
    if(this.state.input != ''){
      var newArray = this.state.groceries;
      newArray.push({name: this.state.input}) 
      console.log(this.state.groceries);
      this.state.groceries.push({name: this.state.input})
      this.setState({groceries:newArray}); 
    }
  }

  clearList = () => {
    this.setState({
      groceries: []
    })
  }
  render() {
    let groceriesComponents = [];
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    return (
      <div className='grocery-list'>
        <h2>Grocery List</h2>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Please enter your name"
              onChange={this.onUpdate}
              type="text"/>
            <button
              className="btn btn-block btn-success"
              type="button"
              onClick={this.addProduct}>
              Add New Product
            </button>
          </div>
        </form>
        <table>
          <tbody>
            {groceriesComponents}
          </tbody>
        </table>
        <form>
          <button
            className="btn btn-block btn-success"
            type="button"
            onClick={this.clearList}>
            Clear List
          </button>
        </form>
      </div>
    );
  }
}

export default GroceryList;