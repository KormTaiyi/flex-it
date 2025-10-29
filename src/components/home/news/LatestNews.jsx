import React from 'react';
import './LatestNews.scss';
import Button from '../../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const LatestNews = ({ articles }) => {
  return (
    <section className="latest-news" data-aos="fade-up" data-aos-duration="1000">
      
      <div className="top-container">
        <div className="top-left">
          <p className="blog">Blog →</p>
          <h2 className="section-title">Latest News</h2>
        </div>
        <div className="see-all-posts">
          <Button>See All Posts →</Button>
        </div>
      </div>
      <div className="article-container">
      <div className="articles">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <div className="article-image">
              <div className="article-date">{article.date}</div>
                <img src={article.imageUrl} alt={article.title} />
              </div>
              <div className="article-content">
                <div className="article-category-author">
                  <p><FontAwesomeIcon icon={faBookmark} className="mx-1" />{article.category} | <FontAwesomeIcon icon={faUser} /> {article.author}</p>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <a href={article.link} className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
