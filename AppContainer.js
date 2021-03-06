'use strict';

import React, { Component } from 'react';
import {
	Text,
	View,
	TabBarIOS,
  NavigatorIOS
} from 'react-native';
import styles from './styles'
import Recent from './Recent'

class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'recents'
		}
	}
	render() {
		return(
      <TabBarIOS>
      	<TabBarIOS.Item
      			title = 'Recents'
      			selected = { this.state.selectedTab == 'recents' }
      			onPress = {() => this.setState({ selectedTab: 'recents' })}
      			systemIcon = 'recents'
      	>
          <NavigatorIOS
            style = {{
              flex: 1
            }}
            initialRoute = {{
              component: Recent,
              title: 'Recent'
            }}
          />
      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      			title = 'Search'
      			selected = { this.state.selectedTab == 'search' }
      			onPress = {() => this.setState({ selectedTab: 'search' })}
      			systemIcon = 'search'
      	>
        <View style = { styles.centerContentInScreen }>
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