'use strict';

import React, { Component } from 'react';
import {
	Text,
	View,
	TabBarIOS
} from 'react-native';
import styles from './styles'

class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'favorites'
		}
	}
	render() {
		return(
      <TabBarIOS>
      	<TabBarIOS.Item
      			title = 'Favorites'
      			selected = { this.state.selectedTab == 'favorites' }
      			onPress = {() => this.setState({ selectedTab: 'favorites' })}
      			systemIcon = 'favorites'
      	>
      	<View style = { styles.centerContent }>
      		<Text style = { styles.headerText }>
      			Favorites
      		</Text>
      	</View>
      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      			title = 'Most Viewed'
      			selected = { this.state.selectedTab == 'most-viewed' }
      			onPress = {() => this.setState({ selectedTab: 'most-viewed' })}
      			systemIcon = 'most-viewed'
      	>
      	<View style = { styles.centerContent }>
      		<Text style = { styles.headerText }>
      			Most Viewed
      		</Text>
      	</View>
      	</TabBarIOS.Item>
      </TabBarIOS>
    );
	}
}

module.exports = AppContainer;