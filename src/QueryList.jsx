import RandomFact from "./RandomFact";

const QueryList = (props) => {
  if (props.length == 0) {
    return <RandomFact />;
  } else {
    return (
      <div>
        {props.list.map((singleQuery) => {
          return <h5 key={singleQuery}>{singleQuery}</h5>;
        })}
      </div>
    );
  }
};
export default QueryList;
