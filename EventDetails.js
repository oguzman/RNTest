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

	render(){
		var event = null
		if(this.state.pushData.type == 'PushEvent') {
			event = (
				<View style = { styles.alignCenter }>
					<Text style = {{ paddingTop: 10 }} >
						pushed to { this.state.pushData.payload.ref.replace('refs/heads/', '') + ' at' }
					</Text>
					<Text>
						{ this.state.pushData.repo.name }
					</Text>
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