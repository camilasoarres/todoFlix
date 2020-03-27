// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import List from './components/List';
import Modal from './components/AddMovieModal';

import AvesdeRapina from './assets/imagem1.jpeg';
import ww84 from './assets/ww84.jpg';
import bw from './assets/bw.jpg';
import Mulan from './assets/mulan.jpg';

// style properties
const Container = styled.div``;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isOpen: false,
      listType: '',
      list: [
        {
          name: 'Aves de Rapina',
          description: 'Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.',
          imagem: `${AvesdeRapina}`,
          note: '9.8',
          class: 'já vi',
        },
        {
          name: 'WW84',
          description: 'Wonder Woman 1984 é um futuro filme estadunidense de super-herói de 2020, baseado na personagem homônima da DC Comics e distribuído pela Warner Bros. Pictures. Será a sequência de Wonder Woman de 2017, e o nono filme do Universo Estendido da DC.',
          imagem: `${ww84}`,
          note: '10',
          class: 'quero assistir',
        },
        {
          name: 'Viúva Negra',
          description: 'Após seu nascimento, Natasha Romanoff é dada à KGB, que a prepara para se tornar sua agente definitiva. Quando a URSS rompe, o governo tenta matá-la enquanto a ação se move para a atual Nova York, onde ela trabalha como freelancer.',
          imagem: `${bw}`,
          note: '6',
          class: 'quero assistir',
        },
        {
          name: 'Mulan',
          description: 'A aclamada cineasta Niki Caro dá vida à épica lenda da icônica guerreira chinesa em "Mulan", da Disney, em que uma jovem destemida arrisca a própria vida por amor à família e à pátria para se tornar uma das maiores guerreiras de toda a China. Quando o Imperador da China emite um decreto estabelecendo que um homem de cada família deve servir no exército imperial para defender o país dos invasores do Norte, Hua Mulan, a filha mais velha de um honrado guerreiro se apresenta no lugar de seu pai adoentado. Disfarçada de homem, como Hua Jun, ela é testada a cada etapa do caminho e deve controlar sua força interior e abraçar seu verdadeiro potencial. É uma jornada épica que vai transformá-la em uma reverenciada guerreira e levá-la a conquistar o respeito de uma nação agradecida... e um pai orgulhoso.',
          imagem: `${Mulan}`,
          note: '7',
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
    });
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
    const { isOpen, listType, list } = this.state;

		return (
      <Container>
			  <Header
          handleModal={this.handleModal}
          handleListType={this.handleListType}
          modalOpen={isOpen}
          />
        <List
          list={list}
          listType={listType}
          deleteMovie={this.deleteMovie}/>
        {isOpen && <Modal
          handleModal={this.handleModal}
          handleMovieItem={this.handleMovieItem} />}
      </Container>
		);
	}
}

export default App;
