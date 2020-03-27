// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.png';
import slide7 from '../assets/slide7.png';
import slide8 from '../assets/slide8.jpg';
import slide9 from '../assets/slide9.png';
import slide10 from '../assets/slide10.png';
import slide11 from '../assets/slide11.png';
import slide12 from '../assets/slide12.jpg';
import slide13 from '../assets/slide13.jfif';
import slide14 from '../assets/slide14.png';
import slide15 from '../assets/slide15.png';
import slide16 from '../assets/slide16.jfif';
import slide17 from '../assets/slide17.jfif';

// style properties
const Container = styled.header`
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.header`
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
	cursor: pointer;
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
	background: #fff;
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

const ContainerSlide = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 1rem;
`;

const ImageSlide = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: .2s;
`;

const PaginationSlide = styled.button`
	position: absolute;
	top: 42%;
	left: ${props => !props.next && '1rem'};
	right: ${props => props.next && '1rem'};
	padding: .75rem;
	font-size: 2rem;
	border: none;
	border-radius: 8px;
	background: #fff;
	opacity: ${props => props.hasOpacity && '.4'};
	cursor: pointer;
	outline: none;
	transition: .2s;
`;

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			slideImages: [
				slide1,
				slide2,
				slide3,
				slide4,
				slide5,
				slide6,
				slide7,
				slide8,
				slide9,
				slide10,
				slide11,
				slide12,
				slide13,
				slide14,
				slide15,
				slide16,
				slide17,
			],
			counter: 0,
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

	handleAllList = () => {
		this.props.handleListType('');
	}

	handleAlreadyWatchedFilter = () => {
		this.props.handleListType('quero assistir');
	}

	handleToWatchFilter = () => {
		this.props.handleListType('já vi');
	}

	nextSlide = () => {
		const { counter, slideImages } = this.state;

		if (counter < slideImages.length - 1) {
			this.setState({
				counter: counter + 1,
			});
		}
	}

	prevSlide = () => {
		const { counter } = this.state;

		if (counter > 0) {
			this.setState({
				counter: counter - 1,
			});
		}
	}

	renderSlide = () => {
		const { slideImages, counter } = this.state;

		return <ImageSlide src={slideImages[counter]} alt={'imagem do slide'} />;
	}

	render() {
		const { isOpen, counter, slideImages } = this.state;
		const { modalOpen } = this.props;

		return (
			<Container>
				<Wrapper>
					<Title onClick={this.handleAllList}>ToDoFlix</Title>
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
				</Wrapper>
				<ContainerSlide>
					{this.renderSlide()}
					<PaginationSlide
						onClick={this.prevSlide}
						hasOpacity={counter === 0}
					>←</PaginationSlide>
					<PaginationSlide
						onClick={this.nextSlide}
						next
						hasOpacity={counter === slideImages.length - 1}>
						→
					</PaginationSlide>
				</ContainerSlide>
      </Container>
		);
	}
}

export default Header;
