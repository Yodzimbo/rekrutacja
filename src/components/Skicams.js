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
        skiCamera: this.getCamerasFromSpecificCurorts(res.data)
      });
    }).catch(error => {
      console.log(error)
    });
  }

  getCamerasFromSpecificCurorts = data => {
    const specificSkiCurorts = [
      `Presolana - Monte Pora`,
      `Alpe Devero`
    ];

    const specificCameras = [
      `Vista sulla piana e sulle piste da sci`,
      `Rifugio Castiglioni ( 1640 mt.) che domina nell'estremo Nord della piana l'Alpe Devero`,
      `Cima Pora`,
      `Pian del Termen, PoraPark`
    ];

    const skiCurorts = Object.values(data).filter(el => specificSkiCurorts.includes(el.name));
    return skiCurorts.map(elem => {
      elem.cams = Object.values(elem.cams).filter(elem => specificCameras.includes(elem.name));
      return elem;
    });
  };

  render() {
    const skiCurort = this.state.skiCamera.map((elem, index) => (
      <SkicamElementView
          key={index}
          firstCam={elem.cams[0].url}
          secondCam={elem.cams[1].url}
          time={this.state.currentDate}
        >
          {elem.name}
        </SkicamElementView>
    ));

    return (
      <div className={'ski-wrapper'}>
        <SkicamGridView skiCurortList={this.state.skiObject} >
          {skiCurort}
        </SkicamGridView>
      </div>
    )
  }
}

export default Skicams;