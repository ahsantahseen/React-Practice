import React, { PureComponent } from "react";
import Tag from "./Ahsan/Tag";

class Tagmap extends PureComponent {
  // NOTE PURECOMPONENTS AUTOMATICALLY IMPLEMENTS shouldCompUpdate Method
  // and Checks if any re-render needed

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[TAGMAP.JS] shouldComponentUpdate");
  //   if (
  //     nextProps.Companies !== this.props.Companies ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
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
