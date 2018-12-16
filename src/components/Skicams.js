import React, { Component } from 'react';
import SkicamGridView from './SkicamGridView';
import SkicamElementView from './SkicamElementView';
import { getVideo } from '../services/api';

class Skicams extends Component {
  constructor(props) {
    super(props);
    let today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      skiCamera: [],
      currentDate: date
    }
  }

  componentDidMount() {
    getVideo().then(res => {
      this.setState({
        skiCamera: this.getCamerasFromSpecyficCurorts(res.data)
      });
    }).catch(error => {
      console.log(error)
    });
  }

  getCamerasFromSpecyficCurorts = data => {
    const specyficSkiCurorts = [
      `Presolana - Monte Pora`,
      `Alpe Devero`
    ];

    const specyficCameras = [
      `Vista sulla piana e sulle piste da sci`,
      `Rifugio Castiglioni ( 1640 mt.) che domina nell'estremo Nord della piana l'Alpe Devero`,
      `Cima Pora`,
      `Pian del Termen, PoraPark`
    ];

    const skiCurorts = Object.values(data).filter(el => specyficSkiCurorts.includes(el.name));
    return skiCurorts.map(elem => {
      elem.cams = Object.values(elem.cams).filter(elem => specyficCameras.includes(elem.name));
      return elem;
    });
  };

  render() {
    const skiCurort = this.state.skiCamera.map((elem, index) => (
      <SkicamElementView
          key={index}
          video={elem.cams[0].url}
          videoTwo={elem.cams[1].url}
        >
          {elem.name}
        </SkicamElementView>
    ));

    return (
      <div className={'ski-wrapper'}>
        <SkicamGridView skiCurortList={this.state.skiObject}>
          {skiCurort}
          <p>Date: {this.state.currentDate}</p>
        </SkicamGridView>
      </div>
    )
  }
}

export default Skicams;