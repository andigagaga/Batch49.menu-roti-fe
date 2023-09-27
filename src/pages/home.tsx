import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface ApiItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface State {
  apiData: ApiItem[];
}

export default class Home extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      apiData: [],
    };
  }

  componentDidMount() {
    // Menggunakan fetch untuk mengambil data dari API
    fetch("https://api.npoint.io/624c99ed50dcd45fb160") // Ganti URL dengan URL API Anda
      .then((response) => response.json())
      .then((data) => {
        this.setState({ apiData: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row w-100 ">
          <div className="container w-25">
            <h1>Filter</h1>
            <hr />
            <button className="bg-white border w-25"></button>
            <div className="d-flex">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                  />
                  <label className="form-check-label" htmlFor="checkbox1">
                    Borgir
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                  />
                  <label className="form-check-label" htmlFor="checkbox2">
                    Bread
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Breakfast
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Chake
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Chocolates
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Desert
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Fries
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Noodles
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Sausage
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Spicy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Sweet
                  </label>
                </div>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>

            <div className="d-flex container">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label
                    className="form-check-label bg-danger rounded p-1"
                    htmlFor="checkbox3"
                  >
                    Favorite
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label
                    className="form-check-label bg-secondary text-white rounded p-1"
                    htmlFor="checkbox3"
                  >
                    Featured
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label
                    className="form-check-label bg-success p-1 rounded"
                    htmlFor="checkbox3"
                  >
                    New
                  </label>
                </div>
              </div>

              <div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="w-75 bg-info p-5">
            <div className="d-flex gap-5 flex-wrap">
            {this.state.apiData.map((item) => (
                <div className="card w-25" key={item.id}>
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
