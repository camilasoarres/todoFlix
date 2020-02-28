// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import List from './components/List';
import Modal from './components/AddMovieModal';

import MovieIcon from './assets/imagem1.jpeg';

// style properties
const Container = styled.div``;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isOpen: false,
      listType: '',
      filteredList: [],
      list: [
        {
          name: 'Aves de Rapina',
          description: 'lalalalala',
          imagem: `${MovieIcon}`,
          note: '9.8',
          class: 'já vi',
        },
        {
          name: 'Aves de Roupinha',
          description: 'lalalalala',
          imagem: `${MovieIcon}`,
          note: '6',
          class: 'quero assistir',
        },
      ],
    };
  }

  handleModal = () => {
    this.setState({
			isOpen: !this.state.isOpen,
    });
  }

  handleListType = (type) => {
    this.setState({
      listType: type,
    })
  };

  handleMovieItem = (movie) => {
    const { list } = this.state;
    const updatedList = movie && list.concat(movie);
    // const filter =  list.filter(movie => (movie.class === listType));

    this.setState({
      list: updatedList,
      // filteredList: filter,
    });
  }

  // editSerie = () => {
  //   series[isEditing] = {
  //     title: form.elements.title.value,
  //     description: form.elements.description.value,
  //     category: form.elements.category.value,
  //     temp: form.elements.temp.value,
  //   };
  
  //   isEditing = undefined;
  //   cleanValues();
  //   renderList();
  // }

  deleteMovie = (movie) => {
    this.setState({
      list: this.state.list.filter((item) => item !== movie)
    })
  }

	render() {
    const { isOpen, listType, list, filteredList } = this.state;

		return (
      <Container>
			  <Header
          handleModal={this.handleModal}
          handleListType={this.handleListType}
          modalOpen={isOpen}
          />
        <List
          list={listType !== '' ? filteredList : list}
          deleteMovie={this.deleteMovie}/>
        {isOpen && <Modal
          handleModal={this.handleModal}
          handleMovieItem={this.handleMovieItem} />}
      </Container>
		);
	}
}

export default App;
