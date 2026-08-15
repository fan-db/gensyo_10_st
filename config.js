// ==== データベース設定 ====
// bg/panel/border/text/textDim = そのシナリオの背景まわり
// accent = テーマカラー

const DATABASES = {

  "lost": {
    title: "現象10_st",
    emoji: "🔥",
    sheetName: "現象10_st",
    distColIndex: 0,
    hiddenColumnCount: 9,

    boothUrl: "",
    boothText: "🔗シナリオ",
    youtubeUrl: "",
    youtubeText: "🔗再生リスト",

    bg: "#0e0908",
    panel: "#1a1210",
    border: "#3a221a",
    text: "#f2e6df",
    textDim: "#b89a8c",

    accent: {
      50:  "#fff5eb",
      100: "#ffe4c7",
      200: "#ffc78a",
      300: "#ffa64d",
      400: "#ff8a1f",
      500: "#ff6b00",
      600: "#e05a00",
      700: "#b84700"
    }
  }

  // 例：全く違う雰囲気の白背景×水色シナリオ
  // "another": {
  //   title: "...", emoji: "💧", badgeText: "非公式",
  //   sheetName: "...", distColIndex: 0, hiddenColumnCount: 5,
  //   boothUrl: "", boothText: "🔗シナリオ", youtubeUrl: "", youtubeText: "🔗再生リスト",
  //   bg: "#f4faff", panel: "#ffffff", border: "#d6e9f8", text: "#1e3a52", textDim: "#7a97ab",
  //   accent: { 50:"#eef8ff",100:"#d3edff",200:"#a8dcff",300:"#6fc4ff",400:"#38aaff",500:"#0f8fef",600:"#0b6fc0",700:"#095697" }
  // }

};

// ==== サイト全体共通のリンク(トップページに表示) ====
const SITE_LINKS = {
  boothUrl: "",
  boothText: "🛒 BOOTH",
  youtubeUrl: "",
  youtubeText: "▶ YouTube"
};

// ==== GASのWebアプリURL(全データベース共通) ====
const GAS_URL = "https://script.google.com/macros/s/AKfycbyCXo2vyOw04W-CkcaT-3vhZQ6c-FrKvaZ62MvrxVo1CrNRkwZAHEELv8FGzUcGrq-Rxw/exec";
