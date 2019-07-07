import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { todoChange, createTodo, nameChange, checkboxChange } from '../../redux/actions';

const ListHeader = styled.div`
	background-color: #605F5F;
	padding: 30px 40px;
	color: white;
	text-align: center;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const FormWrapper = styled.form`
  display: flex;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 75%;
`;

const TodoInput = styled.input`
	margin: 10px 0;
	border: none;
	border-radius: 15px;
	font-size: 0.8em;
	padding: 10px;
	color: #000;
	width: 100%;
`;

const NameInput = styled.input`
	border: none;
	border-radius: 15px;
	font-size: 0.8em;
	padding: 10px;
	color: #000;
	width: 50%;
`

const CheckboxLabel = styled.label`
	align-self: center;
	font-size: 0.8em;
	padding: 10px;
	color: #555;
	background-color: white;
	border-radius: 15px;
	width: 50%;
	text-align: left;
`

const CheckboxInput = styled.input`
	margin-left: 20px;
`;

const AddButton = styled.button`
  margin: 10px;
  border-radius: 15px;
	padding: 10px;
	width: 25%;
	background-color: #d9d9d9;
	color: #555;
	text-align: center;
	cursor: pointer;
	transition: 0.3s;
	font-size: 0.8em;
	align-self: center;
`;

class TodoHeader extends React.Component {
  handleSubmit(e) {
		e.preventDefault();

		const userId = this.props.todo.user.map(user => {
			if (this.props.todo.name === user.name) {
				return user.id;
			} else {
			  return null;
			}
		})

		const formData = {
			username: this.props.todo.name,
			userId: userId[0],
			title: this.props.todo.todo,
			completed: this.props.todo.completed
		};

		this.props.createTodo(formData);
	}

  render() {
		return (
			<ListHeader>
				<h1>To Do List</h1>
				<FormWrapper
				  onSubmit={(e) => {this.handleSubmit(e)}}
			  >
					<InputWrapper>
					  <TodoInput 
							type="text"
							name="title"
							onChange={(event) => this.props.todoChange(event.target.value)}
							value={this.props.todo.todo}
							placeholder='What needs to be done?' 
						/>
						<NameInput 
							type="text" 
							name="username"
							onChange={(event) => this.props.nameChange(event.target.value)}
							value={this.props.todo.name}
							placeholder="Enter your name"
						/>
						<CheckboxLabel>
							Completed Task?
							<CheckboxInput 
								type="checkbox" 
								name="completed"
								checked={this.props.todo.completed}
								onChange={(event) => this.props.checkboxChange(event.target.checked)}
							/>
						</CheckboxLabel>
					</InputWrapper>
					<AddButton 
						type="sumbit"
						value="Submit"
					>
						Submit
					</AddButton>
				</FormWrapper>
		  </ListHeader>
		)
	}
}
const mapStateToProps = (state) => {
	return { 
		todo: state.todo
	}
}

export default connect(
	mapStateToProps,
	{ todoChange, createTodo, nameChange, checkboxChange }
)(TodoHeader);