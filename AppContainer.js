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
      			title = 'Most Viewed'
      			selected = { this.state.selectedTab == 'most-viewed' }
      			onPress = {() => this.setState({ selectedTab: 'most-viewed' })}
      			systemIcon = 'most-viewed'
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