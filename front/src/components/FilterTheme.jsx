import React, { Component } from 'react';

class FilterTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
    };
  }

  componentDidMount() {
    this.filterBy();
  }

  filterBy(opt = "") {
    fetch(`/api/theme/${opt}`)
      .then(res => res.json())
      .then(activites => this.setState({ activites }));
  }

  render() {
    return (
      <div className="Theme container">
        <h1> Themes </h1>

        <div className="content">
          <div className="options">
            <button className="btn" onClick={() => this.filterBy()}>Toutes les activités</button>
            <button className="btn" onClick={() => this.filterBy("cannabis")}>Thème Cannabis</button>
            <button className="btn" onClick={() => this.filterBy("restaurant")}>Thème restaurant</button>
          </div>

        </div>
      </div>
    );
  }
}

export default FilterTheme;