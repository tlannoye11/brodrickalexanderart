import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

const App = () => {
	return (
		<Router>
			<Header />
			{/* {window.location.pathname === '/' && (
				<div className='hero-image'>
					<div className='hero-text'>
						<h1 className='hero-title'>Life Through Art</h1>
						<h2 className='hero-subtitle'>
							Original and Commissioned Oil/Digital Art
							{window.location.pathname}
						</h2>
					</div>
				</div>
			)} */}
			<main className='py-3'>
				<Container>
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/contact' component={ContactScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
					<Route
						path='/admin/user/:id/edit'
						component={UserEditScreen}
					/>
					<Route
						path='/admin/productlist'
						component={ProductListScreen}
						exact
					/>
					<Route
						path='/admin/productlist/:pageNumber'
						component={ProductListScreen}
						exact
					/>
					<Route
						path='/admin/product/:id/edit'
						component={ProductEditScreen}
					/>
					<Route
						path='/admin/orderlist'
						component={OrderListScreen}
					/>
					<Route
						path='/search/:keyword'
						component={HomeScreen}
						exact
					/>
					<Route
						path='/page/:pageNumber'
						component={HomeScreen}
						exact
					/>
					<Route
						path='/search/:keyword/page/:pageNumber'
						component={HomeScreen}
						exact
					/>
					<Route path='/' component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
