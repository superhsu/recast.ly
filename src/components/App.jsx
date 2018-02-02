class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      videoPlayer: exampleVideoData[0]
    };
  }

  testClick(event) {
    this.setState({
      videoPlayer: event
    });
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  onSubmit() {
    let objOptions = {
      query: this.state.search,
      key: window.YOUTUBE_API_KEY,
      max: 5,
    };
    let that = this;
    // const callBack = data => that.setState({videoList: data.items});
    // searchYouTube(objOptions, callBack);
    searchYouTube(objOptions, function(data) {
      that.setState({videoList: data.items});
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSubmit={this.onSubmit.bind(this)} onChangeSearch={this.onChangeSearch.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlayer} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videoList} 
              testClick={this.testClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
