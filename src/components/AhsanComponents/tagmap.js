import React from "react";
import Tag from "./Ahsan/Tag";

const Tagmap = (props) =>
  props.Companies.map((Company, CompanyIndex) => {
    return (
      <Tag
        click={() => props.clicked(CompanyIndex)}
        name={Company.name}
        yrs={Company.yrs}
        key={Company.key}
        id={Company.key}
        change={props.changed}
      ></Tag>
    );
  });

export default Tagmap;
