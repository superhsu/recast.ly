var Search = (props) => {

  // let changeHandler = (val) => {
  //   props.onChangeSearch(val);
  // }

  // let buttonHandler = (e) => {
  //   props.onSubmit(e);
  // }

  return (
  <div className="search-bar form-inline">
    <input onChange={props.onChangeSearch} className="form-control" type="text" />
    <button onClick={props.onSubmit} className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
