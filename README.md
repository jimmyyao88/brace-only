# brace-only
Generated templates with two brace { }

## useage
js
```js
Scope.title = 'foo'
Scope.username = 'Jimmy'
Scope.age = '23'
Scope.birth = '1994'
/**
*Remeber to Add $digest() method in the last
*/
Scope.$digest()
```
## advanced usage
js
```js
Scope.users = [
  {
    title:'foo',
    age:18,
    birth:'1994'
  },
  {
    title:'foo2',
    age:19,
    birth:'1993'
  },
  {
    title:'foo3',
    age:19,
    birth:'1992'
  }
]
/**
*Remeber to Add $digest() method in the last
*/
Scope.$digest()
```
html template
```html
<!--add repeat attribute as directive to repeat the data-->
<div repeat="user in users">
  <div>{{user.title}}</div>
  <p>{{user.age}}</p>
</div>
```


## 用法

```js
Scope.title = 'foo'
Scope.username = 'Jimmy'
Scope.age = '23'
Scope.birth = '1994'
/**
*最后一定要添加$digest()方法
*/
Scope.$digest()
```
