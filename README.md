## 結構說明

### 頁面/組件
1. Home頁面 : 包含一個`<InputComponent/>`組件，此組件包含一個`<nav class="inputTypeSelect">`導航列，其中提供三個選項用於切換不同的輸入類型，我使用的是`<li><li/>`來表示，`<main class="mainView">`所包含的區塊用於展示，展示區塊中有一個
 `<InputContentComponent/>`，主要功能是包含`<Select/>`、`<Input/>`、`<Radio/>`三個組件並與這三組件溝通，另外還有一個`<Alert/>`組件，用於顯示輸入的內容。

2. List

### Vuex
組要用來切換主題顏色，在透過動態的方式添加到class中，樣式的部分我先在`assets/scss/share.scss`創建了對應名稱的樣式，所以只要把選重的themColor添加到class終究可以套用樣式，我使用`!important`將樣式進行覆蓋。