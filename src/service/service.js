class Youtube{
    constructor(key){
        async const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, requestOptions)
            .then(response => response.json())
            .then(result =>{ console.log(result)
                setVideoList(result.items)
            })
            .catch(error => console.log('error', error));
    }
}

export default Youtube;