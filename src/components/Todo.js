import React from 'react';
import { connect } from 'react-redux';

import { getTodoList } from '../redux/actions';

class Todo extends React.Component{
	componentDidMount() {
		this.props.getTodoList();
	}

	renderList() {
		const list = (this.props.todo.list).map((item) => {
			return (
				<li key={item.title}>{item.title}</li>
			);
		})
		return list;
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return { todo: state.todo }
}

export default connect(
	mapStateToProps,
	{ getTodoList }
)(Todo);