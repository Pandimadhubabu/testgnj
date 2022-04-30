import googleNewsAPI from 'google-news-json';

export default async (request, res) => {
  const {madhu} = request.query.madhu
  
  const news_1: any = await googleNewsAPI.getNews(
    googleNewsAPI.NATION,
    'en-IN'
  );

  const news_2: any = await googleNewsAPI.getNews(
    googleNewsAPI.BUSINESS,
    'en-IN'
  );
  
  
  const totalNews = news_1.items.concat(news_2.items);
                

  const covid: any[] = totalNews.map((item) => {
    return {
      title: item.title,
      link: item.link,
      date:item.pubDate,
      
      
    };
  });

  res.send(covid);
};
