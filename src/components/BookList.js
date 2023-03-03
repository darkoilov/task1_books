import React, { Component } from 'react'
import listofbooks from './data/listofbooks.json'
import Book from './Book';
import Search from './Search';
import './styles/booklist.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: listofbooks,
      query: '',
      searchSubmitted: false,
    }
    this.sortBooksByAuthor();
  }

  sortBooksByAuthor() {
    this.state.books.sort((a, b) => a.author.localeCompare(b.author));
  }

  handleSearchInputChange = e => {
    if (this.state.query === "")
      this.setState({ searchSubmitted: false });
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    this.setState({ searchSubmitted: true });
    this.getFilteredBooks()
  }

  getFilteredBooks() {
    return this.state.books
      .filter((book) =>
        book.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
        book.author.toLowerCase().includes(this.state.query.toLowerCase()) ||
        book.genre.toLowerCase().includes(this.state.query.toLowerCase())
      )
  }

  clearText = e => {
    if (this.state.query.length != 0) {
      console.log("prazno");
    }
    this.setState({ query: "" });
  }

  render() {
    return (
      <div className='bookList'>
        <form className="search-form" onSubmit={this.handleSearchSubmit}>
          <Search
            onSubmit={(e) => this.handleSearchInputChange(e)}
            onChange={this.handleSearchInputChange}
            query={this.state.query}
            clearText={this.clearText}
          />
        </form>

        <div className='stack stack--horizontal'>
          {!this.state.searchSubmitted &&
            this.state.books.map((book, i) => (
              <Book title={book.title} author={book.author} genre={book.genre} key={i} />
            ))
          }

          {this.state.searchSubmitted &&
            this.getFilteredBooks().map((book, i) => (
              <Book title={book.title} author={book.author} genre={book.genre} key={i} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default BookList;

