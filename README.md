# COVID-19 Visualization Dashboard

Preview:  
![Alt text](https://github.com/luosixian/visulation-panel/blob/main/public/images/preview.png)

オープンデータ:[新型コロナウイルス等感染症対策推進室](https://corona.go.jp/dashboard/)

## 1. 技術スタック
React.js / React-Router / [ECharts](https://echarts.apache.org/en/index.html) / axios / Less / Node.js

## 2. 使い方  
### Project Setup
```
npm install
```
### Runs the app in development mode  
```
npm start
```

## 3. Introduction
### 3.1 Nightingale Chart  
Preview:
![Alt text](https://github.com/luosixian/visulation-panel/blob/main/public/images/preview.png)

axiosに基づいて、データをリアルタイムで取得する

### 3.2 人口変動分析  
Preview:
![Alt text](https://github.com/luosixian/visulation-panel/blob/main/public/images/preview.png)

React-Routerに基づく
```Javascript
<NavLink className={({ isActive }) =>
    "list-group-item" + (isActive ? " navActive" : "")
    } to="/prespread">感染拡大以前との比較</NavLink>
<NavLink className={({ isActive }) =>
    "list-group-item" + (isActive ? " navActive" : "")
    } to="/preday">前日との比較</NavLink>
```
```Javascript
<Routes>
    <Route path="/prespread" element={<PopulationPreSpread />} />
    <Route path="/preday" element={<PopulationDay />} />
    <Route path="*" element={<Navigate to="/prespread" />} />
</Routes>
```
