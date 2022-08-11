const getProdData = (type, url) => {
  switch (type){
    case 'Search':
      return `https://ecshweb.pchome.com.tw/search/v3.3/?q=${url}`;
    case 'Store':
      return `https://24h.pchome.com.tw/store/${url}`;
    case 'Prod':
      return `https://24h.pchome.com.tw/prod/${url}`;
    case 'Url':
      return url;
    default:
      break;
  }
};

export { getProdData };