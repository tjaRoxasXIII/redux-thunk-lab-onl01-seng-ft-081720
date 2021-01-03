import React, { Component } from 'react';
import CatList from './CatList'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
    console.log(this.props)
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

