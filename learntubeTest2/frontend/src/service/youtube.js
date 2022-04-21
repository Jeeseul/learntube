class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // 인기 동영상 25개를 찾아주는
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    // return response.data.items;
    return response;

  }

  // 검색어(query)를 던졌을때 돌아오는
  async search(query) {
    console.log("in youtube.js : " + query);
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
        // videoDuration: 'long'
      },
    },);

  
    //console.log(response);
    const newObj = 
    // 검색한 결과의 videoId를 다시 api로 보내서 조회수, 영상 길이 append
    response.data.items.map((item) => this.youtube.get('videos', {
        params: {
          part: 'contentDetails,statistics',
          id: item.id.videoId,
        },
      }).then((response3) =>  Object.assign(item, response3.data.items[0])));
      // _.merge({}, item, response3.data.items[0])));
      
      //

     

    // response2.data.items.map((item) => this.youtube.get('videos', {
    //   params: {
    //     part: 'contentDetails,statistics',
    //     id: item.id.videoId,
    //   },
    // }).then((response3) => Object.assign(item, response3.data.items[0])));

    //console.log(response);
    // videoId를 id로 변수명 변경
    // return response.data.items.map((item) => ({
    //   ...item,
    //   id: item.id.videoId,

    // }));
    return response.data.items;
    



  }

  async detailSearch() {

  }
}

export default Youtube;
