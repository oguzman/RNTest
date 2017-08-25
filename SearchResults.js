"use strict";

import React, { Component } from 'react';
import {
	ListView,
	Text,
	View
} from 'react-native';
import styles from './styles';

class SearchResults extends Component {
	constructor(props){
		super(props);
		this.state = {
			pushData: props.pushData
		}
	}

	render() {
		return(
			<View style = { styles.generalView } >
				<View style = { styles.centerContentInScreen }>
					<Text>
						{ this.state.pushData }
					</Text>
				</View>
			</View>
		);
	}
}

module.exports = SearchResults;