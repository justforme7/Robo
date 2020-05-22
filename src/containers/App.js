import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor () {
		super()
		this.state = {
			Names: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({Names: users}));
	}


	onsearchChange =(event)=>{
		this.setState({searchfield: event.target.value})
	}
	render () {
		const {Names, searchfield} = this.state;
		const filterobots = Names.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Names.length ?
			<h1 className='tc'>Loading</h1>:

			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onsearchChange}/>
					<Scroll>
						<CardList Names={filterobots} />
					</Scroll>
				</div>
			);
		
	}
}




export default App;