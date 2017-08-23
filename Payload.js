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

class Payload extends Component {
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
				<Text>
					{ this.state.pushData.actor.login }
				</Text>
			</View>
		);
	}
}

module.exports = Payload;