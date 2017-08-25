'use strict';

import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text,
	TouchableHighlight,
	ActivityIndicator
} from 'react-native';
import styles from './styles'

class Search extends Component {
	constructor(props){
		super(props);
		this.state = ({
			isLoading: false
		})
	}

	render() {
		return(
			<View style = { styles.containersView } >
				<Text>
					Search
				</Text>
				<TextInput
					placeholder = 'Search...'
					style = { styles.blueInputs }
				/>
			</View>
		);
	}
}

module.exports = Search;