// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// style properties
const Container = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 5rem;
	padding-bottom: .5rem;

	@media (max-width: 490px) {
    padding: 2rem;
	}
`;

const Title = styled.h1`
	margin: 0;
	font: 600 3rem sans-serif;
	color: #c74350;
`;

const Box = styled.div`
	position: relative;
	display: flex;
`;

const Button = styled.button`
	min-width: 150px;
	margin-left: 1rem;
	padding: .65rem 1rem;
	border: none;
	border-radius: 2px;
	background: ${props => (props.background ? '#c74350' : 'transparent')};
	color: ${props => props.background && '#fff'};
	outline: none;
	cursor: pointer;
	transition: .2s;

	&:hover {
		background: #c74350;
		color: #fff;
	}
	
	@media (max-width: 490px) {
		min-width: auto;
    display: ${props => props.categories && 'none'};
	}
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
`;

const Menu = styled.ul`
	position: absolute;
	top: 5rem;
	right: 15.3rem;
	width: 150px;
	margin: 0;
	padding: 0;
	border: solid .5px #CECECE;
	border-radius: 4px;
`;

const MenuItem = styled.li`
	margin: 0;
	padding: 1rem;
	border-radius: 0 0 2px 2px;
	text-align: center;
	list-style: none;
	cursor: pointer;
	transition: .2s;

	&:hover {
		background: #CECECE40;
		font-weight: 600;
	}
`;

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	handleMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen,
    });
	}

	stopClick = (ev) => {
		ev.stopPropagation();
	}

	handleAlreadyWatchedFilter = () => {
		this.props.handleListType('já vi');
	}

	handleToWatchFilter = () => {
		this.props.handleListType('quero assistir');
	}

	render() {
		const { isOpen } = this.state;
		const { modalOpen } = this.props;

		return (
			<Container>
				<Title>ToDoFlix</Title>
				<Box>
					<Button onClick={this.handleMenu} categories background={isOpen}>
						Categorias
					</Button>
					<Button onClick={this.props.handleModal} background={modalOpen}>
						Adicionar filmes
					</Button>
				</Box>
				{isOpen && (
					<Overlay onClick={this.handleMenu}>
						<Menu onClick={this.stopClick}>
							<MenuItem onClick={this.handleAlreadyWatchedFilter}>Quero ver</MenuItem>
							<MenuItem onClick={this.handleToWatchFilter}>Já vistos</MenuItem>
						</Menu>
					</Overlay>
				)}
      </Container>
		);
	}
}

export default Header;
