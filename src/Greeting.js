import React, { Component } from 'react';

class Greeting extends Component { 
	state = {
		isEmpty: true,
		name: ''
	}

	onUpdate = (e) => {
		if(e.target.value == ''){
			this.setState({
				isEmpty: true
			})
		} else {
			this.setState({
				isEmpty: false,
				name: e.target.value
			})
		}
		
	}

  render() {
    return (
      <div className="greeting">
      	<p>
      		{this.state.isEmpty ? 'Please enter your name' : 'Hello '+this.state.name}
	      </p>
   
        <form>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Please enter your name"
							onChange={this.onUpdate}
							type="text"/>
					</div>
				</form>
      </div>
    );
  }
}
export default Greeting;
