import React, { Component } from "react";
import Tag from "./Ahsan/Tag";

class Tagmap extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[TAGMAP.JS] shouldComponentUpdate");
    if (nextProps.Companies !== this.props.Companies) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return this.props.Companies.map((Company, CompanyIndex) => {
      return (
        <Tag
          click={() => this.props.clicked(CompanyIndex)}
          name={Company.name}
          yrs={Company.yrs}
          key={Company.key}
          id={Company.key}
          change={this.props.changed}
        ></Tag>
      );
    });
  }
}
export default Tagmap;
