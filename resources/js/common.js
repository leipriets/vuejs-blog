export default {
    data(){
        return {

        }
    },
    methods: {
        async callApi(method, uri, dataObj){

            try {                
                return await axios({
                    method: method,
                    url: uri,
                    data: dataObj
                  });

            } catch (e) {
                console.log(e);
                return e.response
            }

        }
    },
}