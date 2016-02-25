/*功能：创建嵌套的过滤器*/
//允许你减少集合中的匹配元素的过滤器，
//只剩下那些与给定的选择器匹配的部分。在这种情况下，
//查询删除了任何没（:not）有（:has）包含class为“selected”（.selected）的子节点。
$("div").filter(":not(:has(.selected))");

/*功能：重用元素搜索 */
var allItems = $("div.item");
var _keepList = $("div#container1 div.item");
//现在你可以继续使用这些jQuery对象来工作了。例如，基于复选框裁剪“keep list”，复选框的名称符合
$(formToLookAt + " input:checked").each(function() {
  _keepList = _keepList.filter("." + $(this).attr("name"));
});

/*功能：任何使用has()来检查某个元素是否包含某个类或是元素*/
//jQuery 1.4.*包含了对这一has方法的支持。该方法找出
//某个元素是否包含了其他另一个元素类或是其他任何的
//你正在查找并要在其之上进行操作的东东。
$("input").has(".email").addClass("email_icon");

/*功能：使用jQuery来切换样式表*/
//找出你希望切换的媒体类型（media-type），然后把href设置成新的样式表。
$("link[media='screen']").attr('href', 'alternative.css');

/*功能：限制选择范围（基于优化目的）*/
//尽可能使用标签名来作为类名的前缀，
//这样jQuery就不需要花费更多的时间来搜索
//你想要的元素。还要记住的一点是，
//针对于你的页面上的元素的操作越具体化，
//就越能降低执行和搜索的时间。

var in_stock = $('#shopping_cart_items input.is_in_stock');

//<ul id="shopping_cart_items">
//  <li><input type="radio" value="Item-X" name="item" class="is_in_stock" /> Item X</li>
//<li><input type="radio" value="Item-Y" name="item" class="3-5_days" /> Item Y</li>
//<li><input type="radio" value="Item-Z" name="item" class="unknown" /> Item Z</li>
//</ul>

/*功能：正确地使用ToggleClass*/
//切换（toggle）类允许你根据某个类的
//是否存在来添加或是删除该类。
//这种情况下有些开发者使用：
a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');
//toggleClass允许你使用下面的语句来很容易地做到这一点
a.toggleClass('blueButton');


/*
功能：设置IE特有的功能*/
if ($.browser.msie) {
// Internet Explorer就是个虐待狂
}

/*功能：使用jQuery来代替一个元素*/
$('#thatdiv').replaceWith('fnuh');

/*功能：验证某个元素是否为空*/
if ($('#keks').html() == null) {
//什么都没有找到;
}

/*功能：从一个未排序的集合中找出某个元素的索引号*/
$("ul > li").click(function () {
  var index = $(this).prevAll().length;
});


/*功能：把函数绑定到事件上*/
$('#foo').bind('click', function() {
  alert('User clicked on "foo."');
});

/*功能：追加或是添加html到元素中*/
$('#lal').append('sometext');

/*功能：在创建元素时，如何使用对象字面量（literal）来定义属性*/
var e = $("", { href: "#", class: "a-class another-class", title: "..." });


/*功能：使用多个属性来进行过滤*/
//在使用许多相类似的有着不同类型的input元素时，
//这种基于精确度的方法很有用
var elements = $('#someid input[type=sometype][value=somevalue]').get();

/*功能：使用jQuery来预加载图像*/
jQuery.preloadImages = function() {
  for(var i = 0; i < arguments.length; i++) {
    $("<img />").attr('src', arguments[i]);
  }
};
//用法
$.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');




/*功能：为任何与选择器相匹配的元素设置事件处理程序*/
$('button.someClass').live('click', someFunction);
//注意，在jQuery 1.4.2中，delegate和undelegate选项
//被引入代替live，因为它们提供了更好的上下文支持
//例如，就table来说，以前你会用
//.live()
$("table").each(function(){
  $("td", this).live("hover", function(){
    $(this).toggleClass("hover");
  });
});
//现在用
$("table").delegate("td", "hover", function(){
  $(this).toggleClass("hover");
});


/*找到一个已经被选中的option元素*/
$('#someElement').find('option:selected');

/*隐藏一个包含了某个值文本的元素*/
$("p.value:contains('thetextvalue')").hide();


/*自动滚动到页面中的某区域*/
jQuery.fn.autoscroll = function(selector) {
  $('html,body').animate({scrollTop: $(selector).offset().top}, 500);
}
//然后像这样来滚动到你希望去到的class/area上。
$('.area_name').autoscroll();

/*功能：检测各种浏览器*/
//检测Safari (if( $.browser.safari)),
//检测IE6及之后版本 (if ($.browser.msie && $.browser.version > 6 )),
//检测IE6及之前版本 (if ($.browser.msie && $.browser.version <= 6 )),
//检测FireFox 2及之后版本 (if ($.browser.mozilla && $.browser.version >= '1.8' ))

/*替换串中的词*/
var el = $('#id');
el.html(el.html().replace(/word/ig, ''));

/*禁用右键单击上下文菜单*/
$(document).bind('contextmenu',function(e){
  return false;
});


/*定义一个定制的选择器*/
$.expr[':'].mycustomselector = function(element, index, meta, stack) {
// element- 一个DOM元素
// index – 栈中的当前循环索引
// meta – 有关选择器的元数据
// stack – 要循环的所有元素的栈
// 如果包含了当前元素就返回true
// 如果不包含当前元素就返回false
};
// 定制选择器的用法：
  $('.someClasses:test').doSomething();

  /*检查某个元素是否存在*/
  if ($('#someDiv').length) {
//万岁！！！它存在……
  }


/*使用jQuery来检测右键和左键的鼠标单击两种情况*/
$("#someelement").live('click', function(e) {
  if( (!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1) ) {
    alert("Left Mouse Button Clicked");
  } else if(e.button == 2) {
    alert("Right Mouse Button Clicked");
  }
});

/*把已创建的元素动态地添加到DOM中*/
var newDiv = $('');
newDiv.attr('id','myNewDiv').appendTo('body');

/*限制“Text-Area”域中的字符的个数*/
jQuery.fn.maxLength = function(max){
  this.each(function(){
    var type = this.tagName.toLowerCase();
    var inputType = this.type? this.type.toLowerCase() : null;
    if(type == "input" && inputType == "text" || inputType == "password"){

//Apply the standard maxLength
      this.maxLength = max;
    }
    else if(type == "textarea"){
      this.onkeypress = function(e){
        var ob = e || event;
        var keyCode = ob.keyCode;
        var hasSelection = document.selection? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;
        return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);
      };
      this.onkeyup = function(){
        if(this.value.length > max){
          this.value = this.value.substring(0,max);
        }
      };
    }
  });
};
//用法
$('#mytextarea').maxLength(500);



/*为函数创建一个基本的测试*/
//把测试单独放在模块中
module("Module B");
test("some other test", function() {

//指明测试内部预期有多少要运行的断言
  expect(2);

//一个比较断言，相当于JUnit的assertEquals
  equals( true, false, "failing test" );
  equals( true, true, "passing test" );
});


/*在jQuery中克隆一个元素*/
var cloned = $('#somediv').clone();

/*在jQuery中如何测试某个元素是否可见*/
if($(element).is(':visible') == 'true') {

//该元素是可见的
}

/*把一个元素放在屏幕的中心位置*/
jQuery.fn.center = function () {
  this.css('position','absolute');
  this.css('top', ( $(window).height() - this.height() ) / 2 +$(window).scrollTop() + 'px');
  this.css('left', ( $(window).width() - this.width() ) / 2 +$(window).scrollLeft() + 'px');
  return this;
}
//这样来使用上面的函数：
$(element).center();


/*把有着某个特定名称的所有元素的值都放到一个数组中*/
var arrInputValues = new Array();
$("input[name='table[]']").each(function(){
  arrInputValues.push($(this).val());
});

/*从元素中除去html*/
(function($) {
  $.fn.stripHtml = function() {
    var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
    this.each(function() {
      $(this).html( $(this).html().replace(regexp,"") );
    });
    return $(this);
  }
})(jQuery);
//用法：
$('p').stripHtml();


/*使用closest来取得父元素*/
$('#searchBox').closest('div');


/*使用Firebug和Firefox来记录jQuery事件日志*/
// 允许链式日志记录
// 用法：
$('#someDiv').hide().log('div hidden').addClass('someClass');
jQuery.log = jQuery.fn.log = function (msg) {
  if (console){
    console.log("%s: %o", msg, this);
  }
  return this;
};

/*强制在弹出窗口中打开链接*/
jQuery('a.popup').live('click', function(){
  newwindow=window.open($(this).attr('href'),'','height=200,width=150');
  if (window.focus) {
    newwindow.focus();
  }
  return false;
});

/*强制在新的选项卡中打开链接*/
jQuery('a.newTab').live('click', function(){
  newwindow=window.open($(this).href);
  jQuery(this).target = "_blank";
  return false;
});


/* 在jQuery中如何使用.siblings()来选择同辈元素*/
// 不这样做
$('#nav li').click(function(){
  $('#nav li').removeClass('active');
  $(this).addClass('active');
});
//替代做法是
$('#nav li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


/*切换页面上的所有复选框*/
var tog = false;
// 或者为true，如果它们在加载时为被选中状态的话
$('a').click(function() {
  $("input[type=checkbox]").attr("checked",!tog);
  tog = !tog;
});


/*基于一些输入文本来过滤一个元素列表*/
//如果元素的值和输入的文本相匹配的话
//该元素将被返回
$('.someClass').filter(function() {
  return $(this).attr('value') == $('input#someId').val();
})

/*获得鼠标垫光标位置x和y*/
$(document).ready(function() {
  $(document).mousemove(function(e){
    $('#XY').html("X Axis : " + e.pageX +" | Y Axis " + e.pageY);
  });
});

/*把整个的列表元素（List Element，LI）变成可点击的*/
$("ul li").click(function(){
  window.location=$(this).find("a").attr("href");
  return false;
});
/*<ul>
<li><a href="#">Link 1</a></li>
<li><a href="#">Link 2</a></li>
<li><a href="#">Link 3</a></li>
<li><a href="#">Link 4</a></li>
</ul>*/

/*使用jQuery来为事件指定命名空间*/
//事件可以这样绑定命名空间
$('input').bind('blur.validation', function(e){
// ...
});
//data方法也接受命名空间
$('input').data('validation.isValid', true);

/*检查cookie是否启用*/
var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if(!cookiesEnabled) {
//没有启用cookie
}


/*如何让cookie过期*/
var date = new Date();
date.setTime(date.getTime() + (x * 60 * 1000));
$.cookie('example', 'foo', { expires: date });

/*使用一个可点击的链接来替换页面中任何的URL*/
$.fn.replaceUrl = function() {
  var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
  this.each(function() {
    $(this).html(
      $(this).html().replace(regexp,'<a href="$1">$1</a>')
      );
  });
  return $(this);
}
//用法　
$('p').replaceUrl();


//提高jQuery性能的方法
//1.链式调用
$("#gbdiv").hide();.css("color", "#202020").show();
//2.缓存caching，即定义变量
var gbin1=$("#gbdiv");
gbin1.hide();
gbin1.css("color", "#202020");
gbin1.show();
//3.事件代理
$('#gbin1').find('div').click(function() {
  $(this).toggleClass('gbin1');
});
//将以上的写法改成：
$('#gbin1').on('click','div',function() {
  $(this).toggleClass('gbin1');
});


//4.循环语句中的DOM操作，将dom拼成字符串，然后在循环结束做一下dom操作
var data = ["Saab","Volvo","BMW"];
$.each(data, function(i, item){
  var newitem='<div>' + item + '</div>';
  $("#gbcontainer").append(newitem);
});
//改写成：
var data = ["Saab","Volvo","BMW"];
tmp = '';
$.each(data, function(i, item){
  tmp +='<div>' + item + '</div>';
});
$("#gbcontainer").append(tmp);


//5.选择符性能
//性能由高到低：$("#id")>$("p")，$("div")，$("input")>$(".class")>$("[attribute=value]")>$(":hidden")




//检测元素是否存在
var ele = $("#somethingThatisNotHere");
if ( ele[0] ) {//这句关键
  ele.text("Some text").slideUp(300).addClass("editing");
}