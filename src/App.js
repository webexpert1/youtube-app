import _ from 'lodash';
import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAWgWooyC18AadDUeR8FZEfp9YSm0uN2ts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [] , selectedVideo: null }

    this.videoSearch('surfboards');
  }

   videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
   }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return(
      <div className="">
        <SearchBar onSearchTermChange={videoSearch} /> 
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelected={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}


export default App;
