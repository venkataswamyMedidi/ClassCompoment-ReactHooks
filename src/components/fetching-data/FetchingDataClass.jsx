import { Component } from "react";

class FetchingDataClass extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.setState({
      posts: data.slice(0, 10),
    });
  };

  render() {
    return (
      <div>
        <h2>Fetching Data - Class</h2>
        <div>
          {this.state.posts.map(post => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default FetchingDataClass;
