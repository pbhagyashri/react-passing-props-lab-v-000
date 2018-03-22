import React from 'react';
import Filter from './Filter'
import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';

// const App = (props) => <FruitBasket />;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }


  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit') 
      .then(res => res.json())
      .then(fruit => this.setState({fruit}))
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
      
  }

  updateFilterCallback = event => {
    this.setState({ currentFilter: event.target.value})
  }

  render() {
    return (
      <FruitBasket 
      fruit={this.state.fruit} 
      filters={this.state.filters}
      currentFilter={this.currentFilter}
      updateFilterCallback={this.state.updateFilterCallback}/>
    )
      
  }
}

export default App;
