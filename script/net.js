      var nodes = new vis.DataSet([
        {id: 1, label: '練り物', shape:'circle', color : 'white', value: 30, scaling: { label: { enabled: true} }},
        {id: 2, label: 'かまぼこ類',color : 'white', shape:'circle', value: 30, scaling: { label: { enabled: true} }},
        {id: 3, label: '伊達巻類',color : 'gray', value: 1, scaling: { label: { enabled: true} }},
        {id: 4, label: 'ちくわ類',color : 'gray', value: 1, scaling: { label: { enabled: true} }},
        {id: 5, label: 'はんぺん・つみれ類',color : 'gray', value: 1, scaling: { label: { enabled: true} }},
        {id: 6, label: 'さつま揚類',color : 'gray', value: 1, scaling: { label: { enabled: true} }},
        {id: 7, label: 'その他',color : 'gray', value: 1, scaling: { label: { enabled: true} }},
        {id: 8, label: '板付き蒸し\nかまぼこ',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 9, label: '蒸し\nかまぼこ',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 10, label: '蒸し焼き\nかまぼこ',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 11, label: '板付き焼き抜き\nかまぼこ',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 12, label: '焼き抜き\nかまぼこ',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 13, label: '細工\nかまぼこ類',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 14, label: '風味・珍味\nかまぼこ類',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 15, label: 'その他',color : 'white', shape:'circle', value: 25, scaling: { label: { enabled: true} }},
        {id: 16, label: '蒸し板かまぼこ',shape: 'image',image: 'img/kama16.png', font:{color:'skyblue'}},
        {id: 17, label: 'リテーナ成形かまぼこ',shape: 'image',image: 'img/kama17.png', font:{color:'skyblue'}},
        {id: 18, label: '昆布巻かまぼこ',shape: 'image',image: 'img/kama18.png', font:{color:'skyblue'}},
        {id: 19, label: 'す巻かまぼこ',shape: 'image',image: 'img/kama19.png', font:{color:'skyblue'}},
        {id: 20, label: '信田巻',shape: 'image',image: 'img/kama20.png', font:{color:'skyblue'}},
        {id: 21, label: 'すじ',shape: 'image',image: 'img/kama21.png', font:{color:'skyblue'}},
        {id: 22, label: 'しんじょ',shape: 'image',image: 'img/kama22.png', font:{color:'skyblue'}},
        {id: 23, label: '焼き板かまぼこ',shape: 'image',image: 'img/kama23.png', font:{color:'skyblue'}},
        {id: 24, label: 'みりん焼きかまぼこ',shape: 'image',image: 'img/kama24.png', font:{color:'skyblue'}},
        {id: 25, label: '焼き通しかまぼこ',shape: 'image',image: 'img/kama25.png', font:{color:'skyblue'}},
        {id: 26, label: '白焼きかまぼこ',shape: 'image',image: 'img/kama26.png', font:{color:'skyblue'}},
        {id: 27, label: '薄板かまぼこ',shape: 'image',image: 'img/kama27.png', font:{color:'skyblue'}},
        {id: 28, label: 'なんば焼きかまぼこ',shape: 'image',image: 'img/kama28.png', font:{color:'skyblue'}},
        {id: 29, label: '笹かまぼこ',shape: 'image',image: 'img/kama29.png', font:{color:'skyblue'}},
        {id: 30, label: '切り出しかまぼこ',shape: 'image',image: 'img/kama30.png', font:{color:'skyblue'} },
        {id: 31, label: 'わん種かまぼこ',shape: 'image',image: 'img/kama31.png', font:{color:'skyblue'}},
        {id: 32, label: 'カニカマ',shape: 'image',image: 'img/kama32.png', font:{color:'skyblue'}},
        {id: 33, label: 'スモークサーモン風味かまぼこ',shape: 'image',image: 'img/kama33.png', font:{color:'skyblue'}},
        {id: 34, label: 'くん製かまぼこ',shape: 'image',image: 'img/kama34.png', font:{color:'skyblue'}},
        {id: 35, label: '〆かまぼこ',shape: 'image',image: 'img/kama35.png', font:{color:'skyblue'}},
        {id: 36, label: '海の音',shape: 'image',image: 'img/kama36.png', font:{color:'skyblue'}},
        {id: 37, label: '削りかまぼこ',shape: 'image',image: 'img/kama37.png', font:{color:'skyblue'}},
        {id: 38, label: 'ケーシング詰かまぼこ',fontcolor: 'red', shape: 'image',image: 'img/kama38.png', font:{color:'skyblue'}},

      ]);
      var edges = new vis.DataSet([
        {from: 1, to: 2, arrows: 'to', width: 3},
        {from: 1, to: 3, arrows: 'to', width: 1},
        {from: 1, to: 4, arrows: 'to', width: 1},
        {from: 1, to: 5, arrows: 'to', width: 1},
        {from: 1, to: 6, arrows: 'to', width: 1},
        {from: 1, to: 7, arrows: 'to', width: 1},
        {from: 2, to: 8, arrows: 'to', width: 3},
        {from: 2, to: 9, arrows: 'to', width: 3},
        {from: 2, to: 10, arrows: 'to', width: 3},
        {from: 2, to: 11, arrows: 'to', width: 3},
        {from: 2, to: 12, arrows: 'to', width: 3},
        {from: 2, to: 13, arrows: 'to', width: 3},
        {from: 2, to: 14, arrows: 'to', width: 3},
        {from: 2, to: 15, arrows: 'to', width: 3},
        {from: 8, to: 16, arrows: 'to', width: 5},
        {from: 8, to: 17, arrows: 'to', width: 5},
        {from: 9, to: 18, arrows: 'to', width: 5},
        {from: 9, to: 19, arrows: 'to', width: 5},
        {from: 9, to: 20, arrows: 'to', width: 5},
        {from: 9, to: 21, arrows: 'to', width: 5},
        {from: 9, to: 22, arrows: 'to', width: 5},
        {from: 10, to: 23, arrows: 'to', width: 5},
        {from: 10, to: 24, arrows: 'to', width: 5},
        {from: 11, to: 25, arrows: 'to', width: 5},
        {from: 11, to: 26, arrows: 'to', width: 5},
        {from: 11, to: 27, arrows: 'to', width: 5},
        {from: 12, to: 28, arrows: 'to', width: 5},
        {from: 12, to: 29, arrows: 'to', width: 5},
        {from: 13, to: 30, arrows: 'to', width: 5},
        {from: 13, to: 31, arrows: 'to', width: 5},
        {from: 14, to: 32, arrows: 'to', width: 5},
        {from: 14, to: 33, arrows: 'to', width: 5},
        {from: 14, to: 34, arrows: 'to', width: 5},
        {from: 14, to: 35, arrows: 'to', width: 5},
        {from: 14, to: 36, arrows: 'to', width: 5},
        {from: 15, to: 37, arrows: 'to', width: 5},
        {from: 15, to: 38, arrows: 'to', width: 5},
      ]);
      var container = document.getElementById('net');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
      };
      var network = new vis.Network(container, data, options);