import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "americano",
      year: "2019",
      plan: "basico",
      price: 2000.0,
      total:2760.00,
    };

    this.handleChangeBrand = this.handleChangeBrand.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangePlan = this.handleChangePlan.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleChangeBrand(event) {
    this.setState({ brand: event.target.value });
  }
  handleChangeYear(event) {
    this.setState({ year: event.target.value });
  }
  handleChangePlan(event) {
    this.setState({ plan: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const priceBase = this.state.price;
    const yearSelect = this.state.year;
    const brandSelect = this.state.brand;
    const planSelect = this.state.plan;
    const BRAND1 = 0.15; // Americano
    const BRAND2 = 0.30; // Europeo
    const BRAND3 = 0.05; // Asiatico
    let rateAumentBrand = 0;
    let date = new Date();

    // Select rate Brand
    if (brandSelect === "americano") {
      rateAumentBrand = BRAND1 ;
    } else if (brandSelect === "europeo") {
      rateAumentBrand = BRAND2 ;
    } else {
      rateAumentBrand = BRAND3 ;
    }

    let rateAumentPlan = planSelect==='basico' ? 0.20 : 0.50;
    let totalDiscountYear =priceBase - priceBase * ((date.getFullYear() - yearSelect) * 0.03);
    let totalAumentBrand = totalDiscountYear*rateAumentBrand + totalDiscountYear;
    let totalAumentPlan = totalAumentBrand*rateAumentPlan+ totalAumentBrand;

    this.setState({total:totalAumentPlan.toFixed(2)});
  }

  render() {
    return (
      <div className="bg-form  grid-container">
      <div className="p-3" >
      <div className=" banner ">
							<h6 className="text-white ">Viajar es asombroso</h6>
							<h1 className="text-white text-uppercase">
								Viaja sin preocupación			
							</h1>
							<p className="pt-20 pb-20 text-white">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
              </div>
      </div>
      <div >
        <div className="bg-border container">
      <h2>Cotizador de Seguro de Auto </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group grid-two-column p-3">
            <label htmlFor="car-brand">Marca</label>
            <select
              className="form-control"
              id="car-brand"
              onChange={this.handleChangeBrand}
            >
              <option defaultValue value="americano">
                Americano
              </option>
              <option value="europeo">Europeo</option>
              <option value="asiatico">Asiático</option>
            </select>
          </div>
          <div className="form-group grid-two-column pl-3 pb-3 pr-3">
            <label htmlFor="car-year">Año</label>
            <select
              className="form-control"
              id="car-year"
              onChange={this.handleChangeYear}
            >
              <option defaultValue value="2019">
                2019
              </option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012"> 2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
            </select>
          </div>
          <div className="grid-two-column pb-3 pr-3 pl-3">
            <div>
              <p>Plan :</p>
            </div>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="basico"
                  
                  onChange={this.handleChangePlan}
                  checked={this.state.plan === 'basico'}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Básico
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="completo"
                  onChange={this.handleChangePlan}
                  checked={this.state.plan === 'completo'}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Completo
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-block btn-warning">
            Cotizar
          </button>
        </form>
        <div className="text-center border-total mt-3">
          <p className="text-uppercase ">Resumen de Cotización</p>
          <p className="text-capitalize">Marca :{this.state.brand}</p>
          <p className="text-capitalize">Plan: {this.state.plan} </p>
          <p>Año del Auto :{this.state.year}</p>
          <div className="box-total text-center mt-2 ">
        <p>El total es : ${this.state.total}</p>
        </div>
        
        </div>
       
      </div>
      </div>
      </div>
    );
  }
}

export default App;
