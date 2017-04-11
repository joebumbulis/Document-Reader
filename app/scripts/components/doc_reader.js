import React from 'react'
export default React.createClass({
  getInitialState: function(){
    return {
      prompt: false,
      checked: false
    };
  },

  handleChecked: function(){
    this.setState({
      prompt: true
    })
  },


  confirmedYes: function(){
    this.setState({
      checked: true,
      prompt: false
    })
  },

  confirmedNo: function(){
    this.setState({
      prompt: false,
      checked: false,

    })
  },

  renderActions: function(){
    if (this.state.checked === true){
      return (<span>
                <h5>Read</h5>
                <input type="checkbox" disabled checked="true" />
              </span>);
    } else {
      return (<span>
                <h5>Mark as Read</h5>
                <input type="checkbox" onClick={this.handleChecked} checked={this.state.prompt}/>
              </span>);
    }
  },

  render: function(){
    var divClass = ""
    if (this.state.prompt) {
      divClass = "prompt"
    } else {
      divClass = "hidden"
    }

    return  <article>
              <p>{this.props.body}</p>
              {this.renderActions()}
              {this.handleChecked}
              <div className={divClass}>"Are you sure you want to mark this as read?"
                <button onClick={this.confirmedYes}>MARKED AS READ</button>
                <button onClick={this.confirmedNo}>NOT NOW</button>
              </div>
            </article>
  }

})
