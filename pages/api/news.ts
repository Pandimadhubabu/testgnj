import googleNewsAPI from 'google-news-json';

export default async (req, res) => {
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'corona virus'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'pandemic'
  );

  const totalNews = news_1.items.concat(news_2.items);


  const news: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      link: item.link,
    };
  });

  res.send(news);
  console.log(news);
};
