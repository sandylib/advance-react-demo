import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';


class App extends React.Component {
  state = this.props.store.getState();
  
  render() { 
    return ( 
      <ArticleList 
        articles={this.state.articles}
        store={this.props.store}
      />
     )
  }
}
 
export default App;