import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    console.log(news);
    const { author, details, image_url, rating, title, total_view, _id } = news;
    return (
        <div>
            <Card className='mb-3'>
                <Card.Header className='d-flex justify-content-between' as="h5">
                    <div className='d-flex'>
                        <Image
                            className='me-2'
                            roundedCircle
                            src={author?.img}
                            style={{ height: '60px' }}
                        >
                        </Image>
                        <div>
                            <p className='mb-0'><small>{author?.name}</small></p>
                            <p><small>{author?.published_date}</small></p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='mb-2' src={image_url} alt="Card image" />
                    <Card.Text>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200) + '...'} < Link to={`/news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaRegEye className='me-2'></FaRegEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;