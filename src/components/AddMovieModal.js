// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Image
import claqueteIcon from '../assets/claquete.png';

// style properties
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: #00000020;
	z-index: 8;
`;

const Modal = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 580px;
	padding: 1rem;
	padding-top: 1.5rem;
	border-radius: 4px;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 50vw;
	}
	@media (max-width: 490px) {
		width: 82%;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: .5rem;
	right: .5rem;
	padding-top: .2rem;
	font-size: 1rem;
	border: none;
	border-radius: 4px;
	background: transparent;
	outline: none;
	cursor: pointer;
	transition: .2s;

	&:hover {
		opacity: .7;
		background: #CECECE30;
	}
`;

const Aside = styled.aside`
	display: flex;
	justify-content: center;
	width: 30%;

	@media (max-width: 490px) {
    display: none;
	}
`;

const AsideImage = styled.img`
	width: 120px;
	height: 120px;
	margin-top: 3rem;
	transform: rotate(-15deg);
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;

	@media (max-width: 490px) {
    width: 100%;
	}
`;

const Label = styled.label`
	margin: .25rem 0;
	font-size: .85rem;
	color: #505050;
`;

const Input = styled.input`
	padding: .65rem;
	border: none;
	border-radius: 2px;
	color: #505050;
	background: #CECECE40;
	outline: none;
`;

const AddImageWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	& > input {
		width: 58%;
	}
`;

const Button = styled.button`
	width: ${props => (props.addImage ? 'auto' : '50%')};
	padding: .65rem 1rem;
	border: none;
	border-radius: 2px;
	font-size: .85rem;
	background: ${props => (props.cancel ? 'transparent' : '#f0c18b')};
	outline: none;
	cursor: pointer;
	transition: .2s;

	&:hover {
		opacity: .7;
	}
`;

class AddMovieModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nameInput: '',
			descriptionInput: '',
			statusInput: '',
			urlImageInput: '',
		};
	}

	stopClick = (ev) => {
		ev.stopPropagation();
	}

	onChangeName = () => {
		this.setState({
			nameInput: this.nameInput.value,
		});
	}

	onChangeDescription = () => {
		this.setState({
			descriptionInput: this.descriptionInput.value,
		});
	}

	onChangeStatus = () => {
		this.setState({
			statusInput: this.statusInput.value,
		});
	}

	onChangeUrlImage = () => {
		this.setState({
			urlImageInput: this.urlImageInput.value,
		});
	}

	handleMovieForm = () => {
		this.props.handleMovieItem({
			name: this.state.nameInput,
			description: this.state.descriptionInput,
			imagem: this.state.urlImageInput,
			note: this.state.note,
		});

		this.props.handleModal();
	}

	render() {
		return (
			<Overlay onClick={this.props.handleModal}>
				<Modal onClick={this.stopClick}>
					<CloseButton onClick={this.props.handleModal}>X</CloseButton>
					<Aside>
						<AsideImage src={claqueteIcon} alt={'claquete de cinema'}/>
					</Aside>
					<Content>
						<Label>Nome:</Label>
						<Input
							ref={(node) => { this.nameInput = node; }}
							onChange={this.onChangeName} />
						<Label>Description:</Label>
						<Input
							ref={(node) => { this.descriptionInput = node; }}
							onChange={this.onChangeDescription} />
						<Label>Status:</Label>
						<Input
							ref={(node) => { this.statusInput = node; }}
							onChange={this.onChangeStatus} />
						<Label>Imagem do filme:</Label>
						<AddImageWrapper>
							<Input
								ref={(node) => { this.urlImageInput = node; }}
								onChange={this.onChangeUrlImage} />
							<Button addImage>Adicionar imagem</Button>
						</AddImageWrapper>
						<Label>Nota:</Label>
						<p>estrelas</p>
						<div>
							<Button cancel onClick={this.props.handleModal}>Cancelar</Button>
							<Button onClick={this.handleMovieForm}>Feito</Button>
						</div>
					</Content>
				</Modal>
      </Overlay>
		);
	}
}

export default AddMovieModal;
