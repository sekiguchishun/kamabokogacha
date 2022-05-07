(function() {
    var btn = document.getElementById('btn');
    var output = document.getElementById('output');
    var overlay = document.getElementById('overlay');
   
   btn.addEventListener('click', function() {
    result();
    overlay.classList.add('fadein');
    output.classList.add('fadein');
    });
   
   overlay.addEventListener('click', function() {
    output.classList.remove('fadein');
    overlay.classList.remove('fadein');
    });
   
   //＊おみくじ結果
    function result() {
    var omikekka = document.getElementById('omikekka');
    var rare = document.getElementById('rare');
    var kamaname = document.getElementById('kamaname');
    var index = Math.floor(Math.random() * 600);
   
    if(0 <= index && index <= 19){
        omikekka.innerHTML = '<img src="./img/kama16.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '蒸し板かまぼこ'
    }
    else if(20 <= index && index <= 49){
        omikekka.innerHTML = '<img src="./img/kama17.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'リテーナ成形かまぼこ'
    }
    else if(50 <= index && index <= 79){
        omikekka.innerHTML = '<img src="./img/kama18.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '昆布巻かまぼこ'
    }
    else if(80 <= index && index <= 109){
        omikekka.innerHTML = '<img src="./img/kama19.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'す巻かまぼこ'
    }
    else if(110 <= index && index <= 139){
        omikekka.innerHTML = '<img src="./img/kama20.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '信田巻'
    }
    else if(140 <= index && index <= 169){
        omikekka.innerHTML = '<img src="./img/kama21.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'すじ'
    }
    else if(170 <= index && index <= 199){
        omikekka.innerHTML = '<img src="./img/kama22.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'しんじょ'
    }
    else if(200 <= index && index <= 229){
        omikekka.innerHTML = '<img src="./img/kama23.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '焼き板かまぼこ'
    }
    else if(230 <= index && index <= 259){
        omikekka.innerHTML = '<img src="./img/kama24.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'みりん焼きかまぼこ'
    }
    else if(260 <= index && index <= 289){
        omikekka.innerHTML = '<img src="./img/kama25.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '焼き通しかまぼこ'
    }
    else if(290 <= index && index <= 319){
        omikekka.innerHTML = '<img src="./img/kama26.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '白焼きかまぼこ'
    }
    else if(320 <= index && index <= 349){
        omikekka.innerHTML = '<img src="./img/kama27.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '薄板かまぼこ'
    }
    else if(350 <= index && index <= 379){
        omikekka.innerHTML = '<img src="./img/kama28.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'なんば焼きかまぼこ'
    }
    else if(380 <= index && index <= 409){
        omikekka.innerHTML = '<img src="./img/kama29.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '笹かまぼこ'
    } 
    else if(410 <= index && index <= 439){
        omikekka.innerHTML = '<img src="./img/kama30.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = '切り出しかまぼこ'
    } 
    else if(440 <= index && index <= 469){
        omikekka.innerHTML = '<img src="./img/kama31.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'わん種かまぼこ'
    } 
    else if(470 <= index && index <= 499){
        omikekka.innerHTML = '<img src="./img/kama32.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'カニカマ'
    } 
    else if(500 <= index && index <= 529){
        omikekka.innerHTML = '<img src="./img/kama33.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'スモークサーモン風味かまぼこ'
    } 
    else if(530 <= index && index <= 559){
        omikekka.innerHTML = '<img src="./img/kama34.png" class="gacha" />';
        rare.innerText = 'レア';
        kamaname.innerText = 'くん製かまぼこ'
    } 
    else if(560 <= index && index <= 569){
        omikekka.innerHTML = '<img src="./img/kama35.png" class="gacha" />';
        rare.innerText = '神レア';
        kamaname.innerText = '〆かまぼこ'
    } 
    else if(570 <= index && index <= 579){
        omikekka.innerHTML = '<img src="./img/kama36.png" class="gacha" />';
        rare.innerText = '神レア';
        kamaname.innerText = '海の音'
    } 
    else if(580 <= index && index <= 589){
        omikekka.innerHTML = '<img src="./img/kama37.png" class="gacha" />';
        rare.innerText = '悪魔的レア';
        kamaname.innerText = '削りかまぼこ'
    } 
    else if(590 <= index){
        omikekka.innerHTML = '<img src="./img/kama38.png" class="gacha" />';
        rare.innerText = '悪魔的レア';
        kamaname.innerText = 'ケーシング詰かまぼこ'
    } 
   //＊ひとこと
    var hitokoto = document.getElementById('kome');
    var hitokotonum = new Array('クールでいよう、水の中のようにな。','おい、（壁ドン）髪にカニカマついてんぞ・・・。','お前のことは全てお見通しだ。ちくわの穴を覗くようにな。','加工されたって、魚類としてのプライドは捨てちゃあいねえ。','ガチャを回す姿、板についてきたんじゃねえか。カマボコだけにな。','俺、九州では透明なタラ（透けとうダラ）って呼ばれているらしい。スマン、嘘だ。','Do not be rubbed, feel.（すり身になるな、感じろ）');
    var num = Math.floor(Math.random() * hitokotonum.length);
    hitokoto.innerHTML = 'スケトウダラ先生からのアドバイス:<br>「' + hitokotonum[num] + '」';
    }
   })();