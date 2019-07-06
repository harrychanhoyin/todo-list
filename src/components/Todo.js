import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTodoList, getUser } from '../redux/actions';

const ListTable = styled.div`
`;

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

const InputWrapper = styled.div`
  display: flex;
`;

const ListInput = styled.input`
	margin: 0;
	border: none;
	border-radius: 0;
	font-size: 0.8em;
	width: 75%;
	padding: 10px;
`;

const ListButton = styled.span`
  border-radius: 0;
	padding: 10px;
	width: 25%;
	background-color: #d9d9d9;
	color: #555;
	text-align: center;
	cursor: pointer;
	transition: 0.3s;
	font-size: 0.8em;
`;

const TableWrapper = styled.table`
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	width: 100%;
	padding: 5px 20px;
`;

const TableHeadRow = styled.tr`
	background-color: #3C3C3C;
	color: #FFF;
`;

const TableHead = styled.th`
	letter-spacing: 1px;
	text-align: center;
	padding: 10px 30px;

	&:nth-child(even) {
		text-align: left;
	}
`;

const TableBodyRow = styled.tr`
	background-color: #fff;
	
	&:nth-child(even) {
		background-color: #F8F8F8;
	}
`;

const TableData = styled.td`
	text-align: center;
	padding: 10px 30px;

	&:nth-child(even) {
		text-align: left;
	}
`;

class Todo extends React.Component{
	componentDidMount() {
		this.props.getTodoList();
		this.props.getUser();
	}

	renderUser(userId) {
	  var users = this.props.todo.user.map(user => {
			if (user.id === userId) {
				return user.name;
			} else {
				return null;
			}
		})
		return users;
	}

	renderList() {
		const list = (this.props.todo.list).map((item) => {
			return (
				<TableBodyRow key={item.id}>
					<TableData>{item.id}</TableData>
					<TableData>
						{item.title} - {this.props.todo.user === undefined ? null : this.renderUser(item.userId)}
					</TableData>
					<TableData>{item.completed ? '✓' : null}</TableData>
				</TableBodyRow>
			);
		})
		return list;
	};

	render() {
		console.log(this.props)
		return (
			<ListTable>
				<ListHeader>
					<h1>To Do List</h1>
					<InputWrapper>
						<ListInput placeholder='What needs to be done?' />
						<ListButton>Add</ListButton>
					</InputWrapper>
				</ListHeader>
				<TableWrapper>
					<thead>
						<TableHeadRow>
							<TableHead>ID</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Completed</TableHead>
						</TableHeadRow>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
			  </TableWrapper>
			</ListTable>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		todo: state.todo
	}
}

export default connect(
	mapStateToProps,
	{ getTodoList, getUser }
)(Todo);