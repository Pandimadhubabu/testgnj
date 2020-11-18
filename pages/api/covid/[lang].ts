import googleNewsAPI from 'google-news-json';
import { useRouter } from 'next/router';

export default async (req, res, query) => {
  const router = useRouter();
  const { lang } = router.query;
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'corona virus','en-IN'
    
    //'corona virus','en-IN'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'corona virus','en-US'
  );

  const totalNews = news_1.items.concat(news_2.items);
 

  const covid: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      Date: item.Date,
      url: item.link,
    };
  });

  res.send(covid);
};
