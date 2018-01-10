import React , {Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();

    this.state= { gifts: []};
  }

addGift = () => {
  const {gifts} = this.state;

  const ids = this.state.gifts.map(gift => gift.id);

  const max_id = ids.length > 0 ? Math.max(...ids) : 0;

  gifts.push({id: max_id+1});

  this.setState( { gifts });
}
  render(){
    return (
      <div>
        <h2 >Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return(
                <div key = {gift.id}></div>
              )
            }
            )
          }
        </div>
        <ReactBootstrap.Button className='btn_add' onClick={this.addGift}>Add Gift</ReactBootstrap.Button>

      </div>
    )
  }
}

export default App;
