import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
const { Content } = Layout;

export default class Success extends Component {
	render() {

		return(
			<Layout>
				<Content className="content">
					<p> Compra realizada con éxito </p>
				</Content>
				<Link to={{ pathname: '/' }}>
					<a href="#"> Volver al inicio </a>
				</Link>
			</Layout>
		)
	}
}