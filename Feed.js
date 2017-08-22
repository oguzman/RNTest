'use strict';
import React, { Component } from 'react';
import {
	ListView,
	Text,
	Image,
	View,
	ActivityIndicator
} from 'react-native';
import styles from './styles';
import AuthenticationManager from './AuthenticationManager';
const urlBase = 'https://api.github.com/users/';

class Feed extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.state = {
			dataSource: ds,
			showProgress: true
		}
	}

	componentDidMount() {
		this.fetchFeed();
	}

	fetchFeed() {
		AuthenticationManager.getAuthInfo((error, result) => {
			var url = urlBase + result.user.login + '/received_events';
			fetch(url, {
				headers: result.header
			})
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
					showProgress: false
				});
			})
		})
	}

	renderRow(rowData) {
		return( 
			<Text style = {{
					color: 'black',
					backgroundColor: '#fff',
					alignSelf: 'center'
				}}
			>
				id: { rowData.id + ', ' + rowData.actor.login + '\n'}
				{ rowData.type + ', ' + rowData.repo.name }
			</Text>
		);
	}

	render(){
		if(this.state.showProgress) {
			return(
				<View style = { styles.generalView } >
					<ActivityIndicator
						color = 'black'
						size = 'large'
						style = { styles.loader }
					/>
				</View>
			);
		} else {
			return(
				<View style = { styles.generalView } >
						<ListView
							dataSource = { this.state.dataSource }
							renderRow = { this.renderRow }
						/>
				</View>
			);
		}
	}
}

module.exports = Feed;