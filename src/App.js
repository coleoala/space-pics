import React from 'react';
import TopBar from './components/TopBar';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  state = {
    imageData:  []
  }

  getImage = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=9D3Rs6Pc1pu6ae27fwC9MYDnaFT0YLA8yNJCa2cd&count=1&thumbs=true')
    .then(res => res.json())
    .then((data) => {
      this.setState({ imageData: data })
      console.log(this.state.imageData)
    })
    .catch(console.log)
  }

  componentDidMount() {
    this.getImage();
  }

  render() {
    return(
      <div id="wrapper1">
        <div className="fullContentDiv">
          <TopBar getImage={this.getImage}  />
          <ImageDisplay imageData={this.state.imageData} />
        </div>
        <div id="footerContainer">
          <Footer />
        </div>
      </div>
      
    )
  }

}

export default App;
