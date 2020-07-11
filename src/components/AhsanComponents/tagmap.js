import React from "react";
import Tag from "./AhsanComponents/Ahsan";

const tagmap = (props) =>
  props.Companies.map((Company, CompanyIndex) => {
    return (
      <Tag
        click={() => props.clicked(CompanyIndex)}
        name={Company.name}
        yrs={Company.yrs}
        key={Company.key}
        id={Company.key}
        change={(event) => props.changed(event, CompanyIndex)}
      ></Tag>
    );
  });
export default tagmap;
