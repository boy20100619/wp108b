const Shopthing = {}

Shopthing.html = `
  <div class="eventext">
    <h4 id="eventshop">最新活動</h4><br/><br/>
  </div>
  `

Shopthing.start = function(){
    Shop.name = localStorage.getItem('Shop.name') || Shop.name
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Shop.event = localStorage.getItem('Shop.event') || Shop.event
    Ui.id('menuShopName').innerHTML = Shop.name
    Ui.id('addressshop').innerHTML = '地址：'+Shop.address
    Ui.id('telshop').innerHTML = Shop.tel
    Ui.id('eventshop').innerHTML = Shop.event
}
Shopthing.put = function(){
    
    Ui.show(Shopthing.html)
    Ui.id('eventshop').innerHTML = Shop.event
}