import React from 'react';
import ReactDOM from 'react-dom';

  function GetCity(city){
    let arr_city={
        'default':{formato:'en-US'},
        'USA':{formato:'en-US'},
        'Britain':{formato:'en-GB'},
        'Korea':{formato:'ko-KR'}
    };
    
    return ((arr_city[city] === undefined) ? arr_city['default'].formato : arr_city[city].formato);
  } 
  function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString(GetCity(props.city))}.</h2>;
  }
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
          city: 'default'
        };
      
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date(),
        city: this.props.city 
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world from {this.state.city}!</h1>
          <FormattedDate date={this.state.date} city={this.state.city} />
        </div>
      );
    }
  }
  
  function App() {
    return (
      <div>
        <Clock city={'Korea'} /> 
        <Clock city={'Colombia'} />
        <Clock city={'USA'} />
        <Clock city={'Britain'} />       
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  