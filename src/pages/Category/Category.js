import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>this is category: {allNews.length}</h2>
            {
                allNews.map(news =>
                    <NewsSummaryCard
                        key={news.id}
                        news={news}
                    ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;