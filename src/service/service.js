class Youtube{
    constructor(key){
        this.key=key;
       this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        }

    async getPopularVideo(){
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

   async getSearch(query) 
         { return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        }
    
  
}

export default Youtube;