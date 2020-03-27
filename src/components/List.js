// Libs
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// Images
import defaultImage from '../assets/item.jpg'

// style properties
const Container = styled.div`
	position: relative;
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	width: calc(100% - 10rem);
	padding: 2rem 5rem;
	padding-bottom: .5rem;
`;

const Title = styled.p`
	padding-left: 5rem;
	font: 600 2rem sans-serif;
	color: #364859;
`;

const Movie = styled.li`
	position: relative;
	width: 31%;
	margin: 1%;
	list-style: none;
`;

const DeleteButton = styled.button`
	position: absolute;
	top: -.5rem;
	left: .25rem;
	padding: .1rem .5rem;
	font-size: 1rem;
	border: none;
	border-radius: 4px;
	background: #c74350;
	color: #fff;
	cursor: pointer;
	outline: none;
	transition: .2s;
	z-index: 5;

	&:hover {
		background: #c7435090;
	}
`;

const Note = styled.div`
	position: absolute;
	top: -1.25rem;
	right: -1.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font: 600 1rem sans-serif;
	text-align: center;
	background: ${props => props.background || '#f0c18b'};
	color: #fff;
`;

const Box = styled.div`
	position: relative;
	width: 100%;
	height: 380px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	object-fit: cover;
`;

const TitleClass = styled.span`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: .5rem 0;
	text-align: center;
	background: ${props => props.background || '#f0c18b'};
	color: #fff;
	border-radius: 0 0 4px 4px;
`;

const MovieTitle = styled.p`
	margin-bottom: .5rem;
	font: 600 1.5rem sans-serif;
	color: #364859;
`;

const MovieDescription = styled.p`
	margin-top: 0;
	font: 200 1rem sans-serif;
	color: #94a2ac;
`;

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	// componentDidMount() {
	// 	fetch('https://gateway.marvel.com:443/v1/public/').then(res => res.json()).then(response => {
	// 		this.setState({
	// 			linguagens: response,
	// 		});
	// 	});
	// }

	renderListItem = () => {
		const { list, listType } = this.props;

		let renderList = listType ? list.filter(item => item.class === listType) : list;

		return renderList.map(movie => (
			<Movie key={movie.name}>
				<DeleteButton onClick={() => this.props.deleteMovie(movie)}>x</DeleteButton>
				<Box>
					<Note background={(movie.note >= 8 && '#75a9a4') || (movie.note < 4 && '#c74350') || (!movie.note && '#000')}>
						{movie.note || '-'}
					</Note>
					<Image src={movie.imagem || defaultImage} alt={'movieImage'}/>
					<TitleClass background={(movie.class === 'já vi' && '#75a9a4') || (movie.class === 'quero assistir' && '#c74350') || (!movie.class && '#000')}>
						{movie.class || 'undefined'}</TitleClass>
				</Box>
				<MovieTitle>{movie.name || 'undefined'}</MovieTitle>
				<MovieDescription>{movie.description || 'undefined'}</MovieDescription>
			</Movie>
		));
	}

	renderTitle = () => {
		const { listType } = this.props;
	
		switch (listType) {
			case 'já vi':
				return 'Lista de filmes já vistos:';
			case 'quero assistir':
				return 'Lista de filmes que quero assistir:';
			default:
				return 'Minha Lista: ';
		}
	}

	render() {
		return (
			<Fragment>
				<Title>{this.renderTitle()}</Title>
				<Container>
					{this.renderListItem()}
				</Container>
			</Fragment>
		);
	}
}

export default List;
