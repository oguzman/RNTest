'use strict';
import React, { Component } from 'react';
import {
	ListView,
	Text,
	Image,
	View
} from 'react-native'
import styles from './styles'

class Feed extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.state = {
			dataSource: ds.cloneWithRows(['a', 'b', 'c'])
		}
	}
	renderRow(rowData) {
		return <Text style = {{
				color: 'black',
				backgroundColor: '#fff'
			}}
		>
			{ rowData }
		</Text>
	}
	render(){
		return(
			<View 
				style = {{
					flex: 1,
					justifyContent: 'flex-start',
				}}
			>
				<ListView
					dataSource = { this.state.dataSource }
					renderRow = { this.renderRow }
				/>
			</View>
		);
	}
}

module.exports = Feed;