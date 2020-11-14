

class HighscoreBackendUtils {

    constructor() {
        this.users = [];
      }

    getUserTable(){
        //https://us-central1-thegameshighscores.cloudfunctions.net/webApi/api/v1/users
        //http://localhost:5001/thegameshighscores/us-central1/webApi/api/v1/snake/users
        //Access-Control-Allow-Origin: https://amazing.site
        axios.get('https://us-central1-thegameshighscores.cloudfunctions.net//webApi/api/v1/snake/users',  { crossdomain: true }
        )         
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.error(error));
    }



}