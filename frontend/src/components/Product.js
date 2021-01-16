import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className='rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body className='pb-0'>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Product;
