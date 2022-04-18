import googleNewsAPI from 'google-news-json';

export default async (request, res) => {
  const {test} = request.query.test
  
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'telugu','en-IN'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    'hindi','en-IN'
  );
  
  
  const totalNews = news_1.items.concat(news_2.items);
                

  const covid: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      link: item.link,
      Date: item.Date,
      
    };
  });

  res.send(covid);
};
