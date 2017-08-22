'use strict';
import React, { Component } from 'react';
import {
	ListView,
	Text,
	Image,
	View
} from 'react-native'
import styles from './styles'
const urlBase = 'https://api.github.com/users/';

class Feed extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.state = {
			dataSource: ds
		}
	}

	componentDidMount() {
		this.fetchFeed();
	}

	fetchFeed() {
		require('./AuthenticationManager').getAuthInfo((error, result) => {
			var url = urlBase + result.user.login + '/received_events';
			fetch(url, {
				headers: result.header
			})
			.then((response) => response.json())
			.then((responseData) => {
				var feedItems = responseData.filter((ev) => ev.type == 'PushEvent');
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(feedItems)
				});
			})
		})
	}

	renderRow(rowData) {
		return <Text style = {{
				color: 'black',
				backgroundColor: '#fff',
				alignSelf: 'center'
			}}
		>
			{ rowData.actor.login }
		</Text>
	}

	render(){
		return(
			<View 
				style = {{
					flex: 1,
					justifyContent: 'flex-start',
				}}
			>
				<ListView
					dataSource = { this.state.dataSource }
					renderRow = { this.renderRow }
				/>
			</View>
		);
	}
}

module.exports = Feed;