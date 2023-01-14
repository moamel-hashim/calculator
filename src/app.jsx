import React from "react";

export default class App extends React.Component {

  render() {
    return (
      <>
      <div className="container-md d-flex justify-content-center align-items-center vh-100">
          <div className="col-2 h-50 bg-dark rounded-4">
            <div className="col justify-content-end d-flex align-items-end h-25 mb-2 me-4">
              <h1 className="text-white">0</h1>
            </div>
            <div className="d-flex">
              <div className=" col d-flex justify-content-center">
              <div className="col-2 text-center rounded-circle light-dark me-2">
                <button className="background-none border-none p-2">AC</button>
              </div>
              <div className="col-2 text-center rounded-circle light-dark me-2">
                <button className=" m-0 background-none border-none p-2">+/-</button>
              </div>
              <div className="col-2 text-center rounded-circle light-dark me-2">
                <button className=" m-0 background-none border-none p-2">%</button>
              </div>
              <div className="col-2 rounded-circle light-orange bg-opacity-75 text-center">
                <button className="border-none background-none m-0 text-light p-2">&divide;</button>
              </div>
            </div>
          </div>
            <div className="d-flex">
              <div className=" col d-flex justify-content-center mt-2">
              <div className="col-2 text-center rounded-circle dark-color me-2">
                <button className=" m-0 text-white p-2 border-none background-none">7</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                <button className="text-white m-0 border-none background-none p-2">8</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="p-2 m-0 text-white background-none border-none">9</button>
              </div>
              <div className="col-2 text-center rounded-circle light-orange bg-opacity-75 ">
                  <button className=" border-none background-none m-0 text-white p-2">&times;</button>
              </div>
            </div>
          </div>
            <div className="d-flex">
              <div className="col d-flex justify-content-center mt-2">
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="p-2 m-0 text-white background-none border-none">4</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="background-none border-none m-0 p-2 text-white">5</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="p-2 background-none border-none m-0 text-white">6</button>
              </div>
              <div className="col-2 rounded-circle light-orange bg-opacity-75 text-center">
                  <button className="background-none border-none p-2 m-0 text-white">&minus;</button>
              </div>
            </div>
          </div>
            <div className="d-flex">
              <div className="col d-flex justify-content-center mt-2">
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="background-none border-none p-2 m-0 text-white">1</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="background-none border-none m-0 p-2 text-white">2</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="border-none background-none p-2 m-0 text-white">3</button>
              </div>
              <div className="col-2 rounded-circle light-orange bg-opacity-75 text-center">
                  <button className="border-none background-none p-2 m-0 text-white">+</button>
              </div>
            </div>
          </div>
            <div className="d-flex">
              <div className="col d-flex justify-content-center mt-2">
              <div className=" custom-col rounded-pill dark-color me-2">
                  <button className="border-none background-none p-2 ps-2 m-0 text-white">0</button>
              </div>
              <div className="col-2 rounded-circle dark-color text-center me-2">
                  <button className="border-none background-none m-0 p-2 text-white">.</button>
              </div>
              <div className="col-2 rounded-circle light-orange bg-opacity-75 text-center">
                  <button className="background-none border-none p-2 m-0 text-white">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
