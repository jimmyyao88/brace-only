window.Scope={
  $digest:function(){
    var html = document.querySelector('html'),
        content = html.innerHTML
    for(var key in Scope){
      if(key!=='digest'){
        var reg = new RegExp('{{'+key+'}}','g')
        content = content.replace(reg,Scope[key])
      }
    }
    html.innerHTML = content
  }
}
