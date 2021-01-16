import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}`);
	};

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'></Message>
			) : (
				<>
					<Meta title={product.name} />
					<Row>
						<Col md={6}>
							<Image
								src={product.image}
								alt={product.name}
								fluid
							/>
						</Col>
						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									Price: ${product.price}
								</ListGroup.Item>
								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className='btn btn-block'
										type='button'>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};

export default ProductScreen;
