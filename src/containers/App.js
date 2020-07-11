import React, { Component } from "react";
import classes from "../containers/App.module.css";
import Tagmap from "../components/AhsanComponents/tagmap";
import Cockpit from "../components/cockpit/cockpit";

class App extends Component {
  state = {
    Companies: [
      { key: "CP01", name: "Jazz", yrs: 12 },
      { key: "asd2", name: "UfONE", yrs: 25 },
      { key: "asd13", name: "Bykea", yrs: 14 },
    ],
    showCompanies: false,
  };
  nameChanger = (event, key) => {
    let oldState = [...this.state.Companies];
    const newName = event.target.value;
    const index = oldState.findIndex((elem) => elem.key === key);
    oldState[index].name = newName;
    console.log(oldState);
    this.setState({ Companies: oldState });
  };
  handlerfunc = () => {
    const doesShow = this.state.showCompanies;
    this.setState({ showCompanies: !doesShow });
  };
  deleteCompaniesHandler = (CompanyIndex) => {
    const companies = [...this.state.Companies];
    companies.splice(CompanyIndex, 1);
    this.setState({ Companies: companies });
  };
  render() {
    let company = null;
    if (this.state.showCompanies) {
      company = (
        <div>
          <Tagmap
            clicked={this.deleteCompaniesHandler}
            Companies={this.state.Companies}
            changed={this.nameChanger}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          hfunc={this.handlerfunc}
          Companies={this.state.Companies}
          showHanlder={this.state.showCompanies}
        ></Cockpit>
        {company}
      </div>
    );
  }
}

export default App;
