import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card'
import './App.css';

class App extends Component {
  state = {
    characters: [ 
      { id: 0, 
        name: "Angelica", 
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/2/2a/Angeilca.jpg/revision/latest?cb=20110202050259"
      },
      {
        id: 1,
        name: "Tommy",
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Rugrats-Elizabeth-Daily-Tommy-Pickles.jpg"
      },
      {
        id: 2,
        name: "Chuckie",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/b/b6/Chuckie.jpg/revision/latest?cb=20110202050308"
      },
      {
        id: 3,
        name: "Phil",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/6/69/Phil.jpg/revision/latest?cb=20110202050348"
      },
      {
        id: 4,
        name: "Lil",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/7/77/Lil.jpg/revision/latest?cb=20110202050333"
      },
      {
        id: 5,
        name: "Dil",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/e/eb/Dil.jpg/revision/latest?cb=20110202050320"
      },
      {
        id: 6,
        name: "Kimi",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/3/30/Kimi.jpg/revision/latest?cb=20110202050505"
      },
      {
        id: 7,
        name: "Susie",
        img: "https://vignette.wikia.nocookie.net/rugratseries/images/9/96/Susie.jpg/revision/latest?cb=20110202050524"
      },
      {
        id: 8,
        name: "Spike",
        img: "https://vignette.wikia.nocookie.net/rugrats/images/4/40/Spike.svg/revision/latest/scale-to-width-down/150?cb=20140515105420"
      }
    ],
    clicked: [],
    score: 0
  }

  handleClick = (id) => {
  
    if(!this.state.clicked.includes(id)){
      const newArr = this.shuffle(this.state.characters);
      this.setState({
        clicked : [...this.state.clicked, id],
        characters: newArr,
        score: this.state.score + 1
      })
    }else {
      alert("You Lose")
      this.setState({
        score: 0
      })
    }
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <div className="body">
        {
          this.state.characters.map(chr => {
            return (<Card name={chr.name} handleClick={this.handleClick} img={chr.img} id={chr.id} />)
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
