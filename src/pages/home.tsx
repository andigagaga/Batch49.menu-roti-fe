import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ApiItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  badge: string;
  categories: string[];
}

interface State {
  apiData: ApiItem[];
  selectedTags: string[];
  selectedCategories: string[];
  isMenuVisible: boolean;
}

export default class Home extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      apiData: [],
      selectedTags: [],
      selectedCategories: [],
      isMenuVisible: false,
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

  handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { selectedTags, selectedCategories } = this.state;
    const selectedItem = [...selectedTags, selectedCategories].join(",");
    alert(`selectedItems: ${selectedItem}`);
  }

  handeleTagChange(tag: string) {
    this.setState((prevState) => ({
      selectedTags: prevState.selectedTags.includes(tag)
        ? prevState.selectedTags.filter((t) => t !== tag)
        : [...prevState.selectedTags, tag],
    }));
  }

  handleTagCategoryChange(category: string) {
    this.setState((prevState) => ({
      selectedCategories: prevState.selectedCategories.includes(category)
        ? prevState.selectedCategories.filter((c) => c !== category)
        : [...prevState.selectedCategories, category],
    }));
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row w-100 ">
          <div className="container w-25">
            <i className="fa-solid fa-user"></i>: GUSWANDI
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.3kOhoThi0MdkLT-Klnu8dgHaEV&pid=Api&P=0&h=180"
              alt=""
            />
            <h1 className="fw-bolder">List Menu</h1>
            <hr />
            <form action="">
              <input
                type="text"
                className=" my-1 rounded"
                placeholder="Temukan Menu... "
              />
              <button
                type="submit"
                className="btn btn-primary p-1"
                onClick={(e) => this.handleSubmit(e)}
              >
                <i className="bi bi-search"></i> Search
              </button>
            </form>
            <div className="d-flex my-3">
              <div>
                <h5>Menu</h5>
                <div className="form-check" mb-5>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    onChange={() => this.handeleTagChange("Borgir")}
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
                    onChange={() => this.handeleTagChange("Bread")}
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
                    onChange={() => this.handeleTagChange("Breakfast")}
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Breakfast
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox4"
                    onChange={() => this.handeleTagChange("Chake")}
                  />
                  <label className="form-check-label" htmlFor="checkbox4">
                    Chake
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox5"
                    onChange={() => this.handeleTagChange("Chocolates")}
                  />
                  <label className="form-check-label" htmlFor="checkbox5">
                    Chocolates
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox6"
                    onChange={() => this.handeleTagChange("Desert")}
                  />
                  <label className="form-check-label" htmlFor="checkbox6">
                    Desert
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox7"
                    onChange={() => this.handeleTagChange("Fries")}
                  />
                  <label className="form-check-label" htmlFor="checkbox7">
                    Fries
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox8"
                    onChange={() => this.handeleTagChange("Noodles")}
                  />
                  <label className="form-check-label" htmlFor="checkbox8">
                    Noodles
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox9"
                    onChange={() => this.handeleTagChange("Sausage")}
                  />
                  <label className="form-check-label" htmlFor="checkbox9">
                    Sausage
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox10"
                    onChange={() => this.handeleTagChange("Spicy")}
                  />
                  <label className="form-check-label" htmlFor="checkbox10">
                    Spicy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox11"
                    onChange={() => this.handeleTagChange("Sweet")}
                  />
                  <label className="form-check-label" htmlFor="checkbox11">
                    Sweet
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h5>ShowCategory</h5>
              <i
                className={`fa-solid fa-arrow-${
                  this.state.isMenuVisible ? "down" : "right"
                }`}
                onClick={this.toggleMenu}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            {this.state.isMenuVisible && (
              <div>
                <div>
                  <div>
                    <div>
                      <h5>Category</h5>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox12"
                        onChange={() =>
                          this.handleTagCategoryChange("Favorite")
                        }
                      />
                      <label
                        className="form-check-label bg-danger rounded p-1"
                        htmlFor="checkbox12"
                      >
                        Favorite
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox13"
                        onChange={() =>
                          this.handleTagCategoryChange("Featured")
                        }
                      />
                      <label
                        className="form-check-label bg-secondary text-white rounded p-1"
                        htmlFor="checkbox13"
                      >
                        Featured
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox14"
                        onChange={() => this.handleTagCategoryChange("New")}
                      />
                      <label
                        className="form-check-label bg-success p-1 rounded"
                        htmlFor="checkbox14"
                      >
                        New
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-75 bg-info p-5">
            <div className="d-flex gap-5 flex-wrap h-25">
              {this.state.apiData.map((item) => (
                <div className="card w-25 h-100" key={item.id}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p
                      className="card-text"
                      style={{
                        maxHeight: "90px",
                        overflow: "hidden",
                        // textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </p>
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
