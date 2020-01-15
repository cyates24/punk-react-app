import React from 'react';
import Beer from './component/Beer'
import './App.css'


class App extends React.Component{
  state = {
    beers : []
  }

  
  fetchData= () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response=> response.json())
.then(parsedJSON=> {console.log(parsedJSON)
  this.setState({beers:parsedJSON})})
    .catch(error=> console.log('parsing failed', error))
  }
  
  componentDidMount(){
    this.fetchData();
  }


  render() {
    return(
      <>
        <h1>BEERS</h1>
        <div className ='main'>
        {
          this.state.beers.map((beer,index) =>
         <Beer
         beer= {beer}
         
         />)
        }
   
    
      
      </div>
    </>
    
  
    )}
}


export default App;
