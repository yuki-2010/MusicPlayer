(function(Vue,axios){
    //使用新的axios的实例创建一个自定义的配置
    const Axios = axios.create({
        baseURL:"https://apimusic.linweiqin.com",
        timeout:1000,
        // headers:{'X-Custom-Header': 'foobar'}
        // 自定义的请求头,本例不需要
    })
    //请求的时候的拦截器
    Axios.interceptors.request.use(function (config) {
      config.params["token"] = "hahahah"
      config.params["key"] = "web0316";
      //可以自己添加一些参数上去,在每一次请求的时候可以加上这些参数,做一些集中处理
      console.log(config);
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    
    //把里面定义的axios暴露给windows,让它可以用
    //第二,处理请求成功的数据
    //一定是用实例来处理
    Axios.interceptors.response.use(function (response) {
        return response.data;
      }, function (error) {
        return Promise.reject(error);
      });
      
      window.Axios = Axios;
})(Vue,axios)
//注意问题:Vue要大写,window不是windows
