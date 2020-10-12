import { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';
import FadeIn from 'react-fade-in';
import { useSpring } from 'react-spring';
import InfiniteScroll from 'react-infinite-scroll-component';
import TitleBar from '../components/TitleBar';
import NewsHeader from '../components/NewsHeader';
import NewsWrapper from '../components/NewsWrapper';
import News from '../components/News';

export default () => {
  
  const [news, setNews] = useState([]);
  


  const fetchNews = () => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((res: any[]) => {
        const lessNews = res.slice(0, 10);
        setNews([...news, ...lessNews]);
       console.log(res);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const [, setY] = useSpring(() => ({ y: 0 }));

  return (
    <Styles>
      <FadeIn>
        <TitleBar />
        
        <div>
          <NewsHeader
            onClick={() => {
              setY({
                y: 700,
                reset: true,
                from: { y: window.scrollY },
                // @ts-ignore
                onFrame: (props) => window.scroll(0, props.y),
              });
            }}
          />
          <NewsWrapper>
            <InfiniteScroll
              dataLength={news.length}
              next={fetchNews}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={<p>Yay! You have seen it all ✅</p>}
            >
              {news.map((item, index) => (
                <News
                  key={index}
                  onClick={() => window.open(item.link)}
                > 
                  {item.title}
                </News>
              ))}
            </InfiniteScroll>
          </NewsWrapper>
        </div>
      </FadeIn>
    </Styles>
  );
};

const Styles = styled.div`
  .statistics {
    margin: ${(props) => props.theme.margin};
  }
`;
