import React from "react";
import { useRequest } from "../../hooks/useRequest";

const Abilities = (props) => {
  const { data, error } = useRequest("/ability", props.data.ability.name);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  // console.log(data);
  return (
    <div className="card my-2">
      <div className="card-body">
        <p className="text-capitalize">{props.data.ability.name}</p>
        {data.effect_entries
          .filter((entry) => entry.language.name === "en")
          .map((desc) => (
            <p
              key={props.data.ability.name}
              dangerouslySetInnerHTML={{ __html: desc.effect }}
              className="mb-0"
            />
          ))}
      </div>
    </div>
  );
};

export default Abilities;
