import './App.css';
import React, { Component } from 'react';
import MenuList from './components/MenuList/MenuList';
import About from './components/About/About';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import FoodDetail from './components/FoodDetail/FoodDetail';
import HomePage from './components/HomePage/HomePage';
import MyProfile from './components/MyProfile/MyProfile';
import OrderDetail from './components/OrderDetail/OrderDetail';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Payment from './components/Payment/Payment';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import UserLogOut from './components/UserLogOut/UserLogOut';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>Bole Lounge</header>
				<MenuList />
				<About />
				<Category />
				<Contact />
				<FoodDetail />
				<HomePage />
				<MyProfile />
				<OrderDetail />
				<OrderHistory />
				<Payment />
				<ShoppingCart />
				<UserLogOut />
			</div>
		);
	}
}

export default App;
