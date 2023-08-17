var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // console.log(path.join(__dirname)); //C:\learn-express2\routes


  // res.render('index', '/index.ejs')

  // Express 애플리케이션은 EJS 템플릿 엔진을 사용하여
  // HTML을 렌더링할 것입니다. 뷰 엔진을 직접 구현하거나 다른 템플릿 엔진을 사용하는 방법도 있지만,
  // EJS(embed js)와 같은 템플릿 엔진을 사용하면 HTML을 동적으로 생성하고 렌더링할 수 있습니다.
  res.render('index', {title:"Hi"});
  // console.log("여기는 get방식으로 루트 요청시 index.pug로 감");
});

module.exports = router;
