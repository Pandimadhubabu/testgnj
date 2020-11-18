import googleNewsAPI from 'google-news-json';

export default async (req, res) => {
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'corona virus','en-IN'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'pandemic','en-IN'
  );

  const totalNews = news_1.items.concat(news_2.items);
                

  const covid: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      link: item.link,
      Date: item.Date,
      url: item.link,
    };
  });

  res.send(covid);
};
