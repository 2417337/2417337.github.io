// 最後に選んだ星座を保存する
let lastSeiza = 0;

function uranai(seiza) {
   lastSeiza = seiza;



    // 今日の運勢の表示
    const unsei = [
        "★★★★★",
        "★★★★☆",
        "★★★☆☆",
        "★★☆☆☆",
        "★☆☆☆☆"
    ];

    // ラッキーカラーの表示
    const color = [
        "赤",
        "青",
        "黄色",
        "緑",
        "ピンク",
        "オレンジ",
        "紫",
        "白",
        "水色",
        "黒",
        "グレー",
        "ゴールド"
    ];

    // ラッキーアイテムの表示
    const item = [
        "腕時計",
        "ノート",
        "ペン",
        "ハンカチ",
        "キーホルダー",
        "長財布",
        "イヤホン",
        "スニーカー",
        "本",
        "キャップ",
        "万年筆",
        "指輪",
        "眼鏡",
        "パーカー",
        "香水",
        "しおり",
        "マグカップ",
        "水筒"
    ];

    // 星座の名前
    const seizaName = [
        "おひつじ座",
        "おうし座",
        "ふたご座",
        "かに座",
        "しし座",
        "おとめ座",
        "てんびん座",
        "さそり座",
        "いて座",
        "やぎ座",
        "みずがめ座",
        "うお座"
    ];

    // 今日の運勢をランダムに選ぶ
    const randomUnsei = Math.floor(Math.random() * unsei.length);

    // ラッキーカラーをランダムに選ぶ
    const randomColor = Math.floor(Math.random() * color.length);

    // ラッキーアイテムをランダムに選ぶ
    const randomItem = Math.floor(Math.random() * item.length);

    // 結果を表示
    document.querySelector("#result").innerHTML =
        "<p class='seiza-name'>" + seizaName[seiza] + "</p>" +
        "<p>今日の運勢：" + unsei[randomUnsei] + "</p>" +
        "<p>ラッキーカラー：" + color[randomColor] + "</p>" +
        "<p>ラッキーアイテム：" + item[randomItem] + "</p>";
}

// もう一度占う
function againUranai() {
    uranai(lastSeiza);
}




console.log("JavaScriptが読み込まれました");

