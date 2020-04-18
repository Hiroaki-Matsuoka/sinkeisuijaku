'use strict'

{
  const dia = "<img src='images/dia.jpg' width='100px' height='150px'>"
  const spade = "<img src='images/spade.jpg' width='130px' height='130px'>"
  const cards = [dia, spade, dia, spade, dia, spade];
  const ca = document.getElementById('ca');
  const cardFlip = document.querySelector('.cardflip');
  // uracard.style.display = 'none'; ←ここでエラー出てた。

  // .cardの数は０から始まる為lengthを−１する。
  //　０からスタートして５になるまでが６つなので６になるまで１づつ加算
  //　演算子の書き方でエラーでたので注意！ex.<= を　=<でエラー
  // アロー関数にしたらエラー出るのは何故か？
  let card = document.getElementsByClassName('card');
  const startButton = document.getElementById('startbutton');
  const pre = document.getElementsByClassName('pre');

  // スタートボタンでゲーム開始
  // HTMLcollectionを返すのでfor文がいる。
  
  startButton.addEventListener('click', function() {
    for (let y = 0; y <= pre.length - 1; y++) {
      pre[y].classList.add('card');
    }

    // 画像をランダムに取得して返す
    const getImage = function() {
      const randoms = [];
      for(n = 0; n <= cards.length; n++){
        while(true){
          const ran = Math.floor(Math.random() * cards.length);
          if(!randoms.includes(ran)){
            randoms.push(ran);
            break;
          }
        }
      }
      const select = cards[ran];
      console.log(select);
      return select;
    };

    getImage();
    
    // 取得した画像データをpre属性を持つ要素へ付与する
    for (let i = 0; i <= card.length - 1; i++) {
      console.log(card.item(i));
      card[i].addEventListener("click", function() {
        　　　// cardflipクラスの追加と削除
        　　　// thisは、クリックされたオブジェクト
        　　　this.classList.add('cardflip');
            setTimeout(() => {
              this.innerHTML = getImage();
              },
              1000);
        　　});
        　}
      });
}