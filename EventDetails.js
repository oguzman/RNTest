'use strict';
import React, { Component } from 'react';
import {
	ListView,
	Text,
	Image,
	View
} from 'react-native';
import styles from './styles';
import AuthenticationManager from './AuthenticationManager';
import Moment from 'moment';
const urlBase = 'https://api.github.com/users/';

class EventDetails extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.state = {
			dataSource: ds,
			pushData: props.pushData
		}
	}

	componentDidMount() {
		if(this.state.pushData.type == 'PushEvent') {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.state.pushData.payload.commits)
			})
		}
	}

	renderRow(rowData) {
		return (
			<View style = { styles.tableCell } >
				<Text>
					<Text style = { styles.boldText } >{ rowData.sha.substring(0, 6) }</Text> - { rowData.message }
				</Text>
			</View>
		);
	}
	render(){
		var event = null
		if(this.state.pushData.type == 'PushEvent') {
			event = (
				<View style = { styles.alignCenter }>
					<Text style = {{ paddingTop: 10 }} >
						pushed to <Text style = { styles.boldText } >{ this.state.pushData.payload.ref.replace('refs/heads/', '') }</Text> at
					</Text>
					<Text>
						{ this.state.pushData.repo.name }
					</Text>
					<Text style = { styles.boldText }>
						{ this.state.pushData.payload.commits.length } commits
					</Text>
					<ListView
						contentInset = {{

						}}
						dataSource = { this.state.dataSource }
						renderRow = { (rowData) => this.renderRow(rowData) }
					/>
				</View>
			);
		} else {
			event = (
				<View style = { styles.alignCenter }>
					<Text style = {{ paddingTop: 10 }} >
						{ this.state.pushData.type + ' at' }
					</Text>
					<Text>
						{ this.state.pushData.repo.name }
					</Text>
				</View>
			);
		}
		return(
			<View style = { styles.payloadView } >
				<Image
					source = {{ uri: this.state.pushData.actor.avatar_url }}
					style = {{
						height: 120,
						width: 120,
						borderRadius: 60
					}}
				/>
				<Text style = { styles.payloadUsernameText }>
					{ this.state.pushData.actor.login }
				</Text>
				{ event }
			</View>
		);
	}
}

module.exports = EventDetails;