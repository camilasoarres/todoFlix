// Libs
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// Images
import defaultImage from '../assets/item.jpg'

// style properties
const Container = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	width: calc(100% - 10rem);
	align-items: center;
	padding: 2rem 5rem;
	padding-bottom: .5rem;
`;

const ListTitle = styled.p`
	padding-left: 5rem;
	font: 600 2rem sans-serif;
	color: #364859;
`;

const Item = styled.li`
	width: 31%;
	margin: 1%;
	list-style: none;
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
	height: 50%;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 4px 4px 0 0;
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

	renderListItem = () => {
		const { list } = this.props;

		return list.map(item => (
			<Item key={item.name}>
				<button onClick={() => this.props.deleteMovie(item)}>delete</button>
				<Box>
					<Note background={(item.note >= 8 && '#75a9a4') || (item.note < 4 && '#c74350') || (!item.note && '#000')}>
						{item.note || '-'}
					</Note>
					<Image src={item.imagem || defaultImage} alt={'movieImage'}/>
					<TitleClass background={(item.class === 'já vi' && '#75a9a4') || (item.class === 'quero assistir' && '#c74350') || (!item.class && '#000')}>
						{item.class || 'undefined'}</TitleClass>
				</Box>
				<MovieTitle>{item.name || 'undefined'}</MovieTitle>
				<MovieDescription>{item.description || 'undefined'}</MovieDescription>
			</Item>
		));
	}

	render() {
		return (
			<Fragment>
				<ListTitle>Minha lista:</ListTitle>
				<Container>
					{this.renderListItem()}
				</Container>
			</Fragment>
		);
	}
}

export default List;
