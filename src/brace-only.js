function getContent(str){
  return str.split('{{')[1].split('}}')[0]
}

window.Scope={
  $digest:function(){
    var html = document.querySelector('html'),
        content = html.innerHTML,
        repeatPattern = /repeat=['"](.*?)['"]/,
        bracePattern = /{{(.*?)}}/g

    for(var key in Scope){
      if(key!=='digest'){
        var reg = new RegExp('{{'+key+'}}','g')
        content = content.replace(reg,Scope[key])
      }
    }
    html.innerHTML = content

    //forRepeat
    var index = content.match(repeatPattern)
    var text = index[1]
    var splitArray = text.split(' in ')
    //user
    var itemName = splitArray[0]
    //users
    var keyName = splitArray[1]
    //selectorName
    var repeatText = '[repeat="'+text+'"]'

    if(Scope[keyName]){
      var repeatElement = document.querySelector(repeatText)
      var repeatElementInnerHTML = repeatElement.innerHTML
      var matchRepeatContentArray = repeatElementInnerHTML.match(bracePattern)
      var childKeyArr = []
      for(var i=0;i<matchRepeatContentArray.length;i++){
        var text = matchRepeatContentArray[i]
        var content = getContent(text)
        var childKey = content.split('.')
        childKeyArr.push(childKey[1])
      }
      var repeatShowHTML = ''
      for(var i=0;i<Scope[keyName].length;i++){
        for(var j=0;j<childKeyArr.length;j++){
          var childKeyName = childKeyArr[j]
          var reg = new RegExp('{{'+itemName+'.'+childKeyName+'}}','g')

          repeatElementInnerHTML = repeatElementInnerHTML.replace(reg,Scope[keyName][i][childKeyName])
        }
        repeatShowHTML +=repeatElementInnerHTML
      }
      repeatElement.innerHTML = repeatShowHTML
    }


  }
}
