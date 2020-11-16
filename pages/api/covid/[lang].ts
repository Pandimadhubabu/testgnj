import googleNewsAPI from 'google-news-json';

export default async (req, res) => {
  const {lang} = req.query
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    '${lang}','te'
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

  res.send(covid);
};
