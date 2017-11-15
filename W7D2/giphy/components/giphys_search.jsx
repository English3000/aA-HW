import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let giphys = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleUpdate } type='text' value=''/>
          <button type='button' value='Search'>Search</button>
        </form>
        <GiphysIndex giphys={giphys}/>
      </div>
    )
  }

  handleUpdate(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm)
              .then(this.setState(searchTerm: ''));
  }
}

export default GiphysSearch;
