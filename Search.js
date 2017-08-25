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
import SearchResults from './SearchResults';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = ({
			isLoading: false
		})
	}

	doSearch(){
		this.props.navigator.push({
			title: 'Search Results',
			component: SearchResults,
			passProps: {
				pushData: this.state.searchTerm
			}

		})
	}
	render() {
		return(
			<View style = { styles.containersView } >
				<View style = { styles.centerContentInScreen } >
					<Text style = { styles.boldText } >
						Search terms:
					</Text>
					<TextInput
						placeholder = 'Search...'
						style = { styles.blueInputs }
						onChangeText = { (text) => this.setState({ searchTerm: text })}
					/>
					<TouchableHighlight
						onPress = { () => this.doSearch() }
						style = { styles.blueButton }
						activeOpacity = { 75 / 100 }
						underlayColor = { "rgb(210,210,210)" }
	         >
						<Text style = { styles.whiteText } >
							Search
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

module.exports = Search;