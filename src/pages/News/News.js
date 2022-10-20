import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { title, author, details, image_url, rating, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-evenly m-3'>
                        <p><span className='fw-semibold'>Author:</span> {author?.name}</p>
                        <p><span className='fw-semibold'>Publish Date:</span> {author?.published_date}</p>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <span>{rating.number}</span>
                        </div>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;