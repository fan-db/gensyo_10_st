// ==== データベース設定 ====
// 新しいデータベースを追加するときは、このオブジェクトに1ブロック追加するだけでOK

const DATABASES = {

  "lost": {
    title: "[現象10_st]配信DB",
    emoji: "🔥",
    sheetName: "現象10_st",
    distColIndex: 0,　// 「配信」列の位置（左から1列目=0）
    hiddenColumnCount: 9,　// 右側から隠す列数

    boothUrl: "https://terminuline.booth.pm/items/8657666",                          // BOOTHのURL（空欄なら非表示）
    boothText: "🔗シナリオ",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLQsdy2E0FdSY",                        // 再生リストのURL（空欄なら非表示）
    youtubeText: "🔗再生リスト",

    accent: {
      50:  "#fff5f5",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d"
    }
  }

  // ここに次のデータベースを追加していく
  // "another": { title: "...", sheetName: "...", ... }

};

// ==== GASのWebアプリURL（全データベース共通） ====
const GAS_URL = "https://script.google.com/macros/s/AKfycbyCXo2vyOw04W-CkcaT-3vhZQ6c-FrKvaZ62MvrxVo1CrNRkwZAHEELv8FGzUcGrq-Rxw/exec";
