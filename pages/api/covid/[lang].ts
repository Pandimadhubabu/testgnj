import googleNewsAPI from 'google-news-json';
import { useRouter } from 'next/router';

export default async () => {
  const router = useRouter();
  const { lang } = router.query;
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    '{lang}','te'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    '{lang}','te'
  );

  const totalNews = news_1.items.concat(news_2.items);
 

  const covid: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      Date: item.Date,
      url: item.link,
    };
  });

  send(covid);
};
