// ==== データベース設定 ====
// 新しいデータベースを追加するときは、このオブジェクトに1ブロック追加するだけでOK
// キー（例: "sample"）が index.html?id=sample / database.html?id=sample の id になる

const DATABASES = {

  "lost": {
    title: "🔥 [現象10_st]配信DB 🔥",       // ページタイトル
    sheetName: "現象10_st",                  // 対応するスプレッドシートのシート名
    distColIndex: 0,                       // 「配信」列の位置（左から1列目=0）
    hiddenColumnCount: 7,                  // 右側から隠す列数

    boothUrl: "https://terminuline.booth.pm/items/8657666",                          // BOOTHのURL（空欄なら非表示）
    boothText: "🔗シナリオ",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLQsdy2E0FdSY",                        // 再生リストのURL（空欄なら非表示）
    youtubeText: "🔗再生リスト",

    theme: {
      bg: "#0e0908",
      panel: "#1a1210",
      border: "#3a221a",
      text: "#f2e6df",
      textDim: "#b89a8c",
      fireA: "#ff7a1a",
      fireB: "#ff2d2d"
    }
  }

  // ここに次のデータベースを追加していく
  // "another": { title: "...", sheetName: "...", ... }

};

// ==== GASのWebアプリURL（全データベース共通） ====
const GAS_URL = "https://script.google.com/macros/s/AKfycbyCXo2vyOw04W-CkcaT-3vhZQ6c-FrKvaZ62MvrxVo1CrNRkwZAHEELv8FGzUcGrq-Rxw/exec";
