import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Pagination } from 'antd';

import { getTodoList, getUser, changePage, getLocalTodoList } from '../../redux/actions';
import TodoHeader from './TodoHeader';

const ListTable = styled.div`
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

const PaginationButton = styled(Pagination)`
	text-align: center;
	margin-top: 1em;
`

class Todo extends React.Component{
	componentDidMount() {
		this.props.getTodoList();
		this.props.getUser();
		this.props.getLocalTodoList();
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
		var pageSize = (this.props.todo.page - 1) * 10;
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
		});
		const localList = (this.props.todo.localTodo).map((item) => {
			return (
				<TableBodyRow key={item.id}>
					<TableData>{item.id}</TableData>
					<TableData>
						{item.title} - {item.username}
					</TableData>
					<TableData>{item.completed ? '✓' : null}</TableData>
				</TableBodyRow>
		  ) 
		});
		var newList = list.concat(localList)
		return newList.splice(pageSize, 10);
	};

	render() {
		return (
			<ListTable>
				<TodoHeader />
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
				<PaginationButton
					current={this.props.todo.page}
					onChange={(page) => this.props.changePage(page)}
					pageSize={10}
					total={((this.props.todo.list).concat(this.props.todo.localTodo)).length}
				/>
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
	{ getTodoList, getUser, changePage, getLocalTodoList }
)(Todo);