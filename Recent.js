'use strict';
import React, { Component } from 'react';
import {
	ListView,
	Text,
	Image,
	View,
	ActivityIndicator,
	TouchableHighlight
} from 'react-native';
import styles from './styles';
import AuthenticationManager from './AuthenticationManager';
import Moment from 'moment';
import EventDetails from './EventDetails'
const urlBase = 'https://api.github.com/users/';

class Recent extends Component {
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

	pressRow(data) {
		this.props.navigator.push({
			title: 'Event details',
			component: EventDetails,
			passProps: {
				pushData: data
			}
		})
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
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
		var textCell = null;
		if(rowData.type == 'PushEvent') {
			textCell = 
				<Text style = {{ marginLeft: 10 }}>
					{ Moment(rowData.created_at).fromNow() + '\n' +
					'pushed to' + rowData.payload.ref.replace('refs/heads/', '') + ' at\n' +
					rowData.repo.name }
				</Text>;
		} else {
			textCell = 
			<Text style = {{ marginLeft: 10 }} >
				{ Moment(rowData.created_at).fromNow() + '\n' +
					rowData.repo.name + '\n' +
					rowData.type }
			</Text>
		}
		return(
			<TouchableHighlight
				onPress = { () => this.pressRow(rowData) }
				underlayColor = '#ddd'
			>
				<View
					style = { styles.tableCell }
				>
					<Image
						source = {{ uri: rowData.actor.avatar_url }}
						style = {{
							height: 36,
							width: 36,
							borderRadius: 18
						}}
					/>
					{ textCell }
				</View>
			</TouchableHighlight>
		);
	}

	render(){
		if(this.state.showProgress) {
			return(
				<View style = { styles.generalView } >
					<ActivityIndicator
						animating = { true }
						color = 'black'
						size = 'large'
						style = { styles.loader }
					/>
				</View>
			);
		} else {
			return(
				<View style = { styles.containersView } >
					<ListView
						dataSource = { this.state.dataSource }
						renderRow = { (rowData) => this.renderRow(rowData) }
					/>
				</View>
			);
		}
	}
}

module.exports = Recent;