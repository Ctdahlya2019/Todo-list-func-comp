import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){ 
    super(props);

    this.state={
      newItem:'',
      list:[]

    }
   } 
   updateInput(key, value){
    // update react state
    this.setState({
      [key]: value
    });
   }
   addItem(){
    // create item with unique id
    const newItem={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    // update stae with new list and reset newItem input
    this.setState({
      list,
      newItem:''
    });
   }
    deleteItem(id){
      // copy current list of items
      const list = [...this.state.list];

      // filter out item being deleted
      const updateList = list.filter(item => item.id !== id);

      this.setState({list:updateList});
  }
  render() { 
    return (
      <div>
        <h1>My LIST</h1>
      
        <div className='App'>
          <div>
            Add an Item...
            <br/>

            <input id='input'
            type='text'
            placeholder='Type item here...'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
            />

            <button className='btn add-btn'
            onClick={() => this.addItem()}>Add</button>
            <br/>

            <ul >
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    {item.value}
                    <button className='btn del-btn'
                    onClick={() => this.deleteItem(item.id)}>
                      X
                    </button>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
 
export default App;