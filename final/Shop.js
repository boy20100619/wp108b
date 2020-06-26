const Shop = {
    name: '有間小吃鋪',
    address: '金門縣金寧鄉大學路1號',
    tel: '082-333333',
    items: {'肉燥飯': 40, '陽春麵': 50, '義大利麵': 60,  '拉麵': 80},
    addons: {'無': 0, '加滷蛋': 10, '加海帶': 10, '加豆干': 20, '加豆皮': 20 },
    event: '目前無最新活動唷',
    orderCount: 0,
  }
  
  Shop.html = `
  <div>
  <div class="slideshow-container">
    <div class="mySlides">
      <div class="numbertext">1 / 3</div>
      <img src="1.png" height="400px" style="width:100%">
    </div>
   
    <div class="mySlides">
      <div class="numbertext">2 / 3</div>
      <img src="拉麵.png" height="400px"style="width:100%">
    </div>
   
    <div class="mySlides">
      <div class="numbertext">3 / 3</div>
      <img src="義大利麵.png" height="400px" style="width:100%">
    </div>
   
    <button onclick="plusSlides(-1)">❮</button>
    <button onclick="plusSlides(1)" >❯</button>
  </div>
  <br>
    <button class="big" onclick="Pos.start()">立即下單</button><br/><br/>
  </div>
  `
  
  Shop.start = function () {
    Shop.init()
    Shop.name = localStorage.getItem('Shop.name') || Shop.name
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Shop.event = localStorage.getItem('Shop.event') || Shop.event
    Ui.id('menuShopName').innerHTML = Shop.name
    const itemsJson = localStorage.getItem('Shop.items')
    const addonsJson = localStorage.getItem('Shop.addons')
    if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
    if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
    Ui.show(Shop.html)
    var slideIndex = 1;
    showDivs(slideIndex);
  
    function plusSlides(n) {
    showDivs(slideIndex += n);
    }
  
    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
    }
  }
  
  Shop.init = function () {
    Shop.orderCount = localStorage.getItem('Pos.Order.count')
    if (Shop.orderCount == null) {
      Shop.orderCount = 0
      localStorage.setItem('Pos.Order.count', Shop.orderCount)
    }
  }
  
  Shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
    localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
  }
  
  Shop.saveOrder = function (Order) {
    localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
  }
  
  Shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('Pos.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }