import ReactPaginate from 'react-paginate';
import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import PostItem from './PostItem';
import PostForm from './PostForm';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.showPost = this.showPost.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.currentPage = this.currentPage.bind(this);
  }

  handlePageClick(data) {
    let params = Object.assign({}, this.props.query, {
      page: data.selected + 1
    });
    this.props.fetchPosts(params);
  }

  handleSearchClick(value) {
    let params = Object.assign({}, this.props.query, { page: 1, q: value });
    this.props.fetchPosts(params);
  }

  handleSortClick(sortBy, sortDirection) {
    let sortParams = { sort_by: sortBy, sort_direction: sortDirection }
    let params = Object.assign({}, this.props.query, sortParams)
    this.props.fetchPosts(params);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.query);
  }

  currentPage() {
    if(!this.props.query.page) {
      return 0;
    }
    return Number(this.props.query.page) - 1;
  }

  showPost(post) {
    const { destroyPost } = this.props;
    return(
      <PostItem key={post.id} {...post} isAuthenticated={this.props.isAuthenticated} destroyPost={destroyPost} />
    );
  }

  render() {
    return (
      <div>
        <div className="row" style={{ marginBottom: '20px' }}>
          <div className="col-lg-8">
            <Search clickCallback={this.handleSearchClick} />
          </div>
          <div className="col-lg-4">
            <Sort sortBy="created_at" sortDirection={this.props.query.sort_direction} clickCallback={this.handleSortClick} />
          </div>
        </div>

        { this.props.isFetching
          ? <div><b>Loading ...</b></div>
          : this.props.posts.map(this.showPost)
        }

        <ReactPaginate previousLabel={'Предыдущая'}
                       nextLabel={'Следующая'}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       forceSelected={this.currentPage()}
                       pageNum={this.props.totalPages}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={(data) => this.handlePageClick(data)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />

        { this.props.isAuthenticated
          ? <PostForm id={this.props.user_id} createPost={this.props.createPost} />
          : ''
        }

      </div>
    );
  }
}
