class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    console.log("in youtube.js : "+query);
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
    //         videoDuration: 'long'
      },
    });
    console.log(response);

    const response2 = await this.youtube.get('videos', {
        params: {
        part: 'contentDetails,statistics',
        id:"wqn3gR1WTcA",
      },
    });
    console.log(response2.data.items[0]);

    response.data.items.map((item) => this.youtube.get('videos', {
      params: {
      part: 'contentDetails,statistics',
      id:item.id.videoId,
    },
  })
  );



      // response2.data.items.map((item) => ({
      //   ...item,
      //   id: item.id.videoId,
      // }));
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,

    }));
  }

  async detailSearch(){
    
  }
}

export default Youtube;
