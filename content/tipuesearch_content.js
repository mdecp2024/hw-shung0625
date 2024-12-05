var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-shung0625 \n 個人網站: https://github.com/mdecp2024/hw-shung0625 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '\n 問題一 \n \n 問題二 \n \n 問題三-1 \n \n 題目三-2 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '題目二 \n from browser import html\nfrom browser import document as doc\n\n# 建立畫布\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素大小\ngs = 40  # 每格的像素數\nctx = canvas.getContext("2d")\n\n# 繪製矩形格子\ndef dRect(lux, luy, w, h, s=1, c="#cccccc"):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 畫布上的網格\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充圓形中的格子\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\n# 主程式：繪製圓形在 10x10 網格中\ndef draw_circle():\n    grid(10, 10, gs)  # 建立網格\n    center_x, center_y = 5, 5  # 圓心在 10x10 網格的中心\n    radius = 4  # 半徑為 4 格\n\n    for y in range(10):\n        for x in range(10):\n            # 計算到圓心的距離\n            distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5\n            # 如果距離小於半徑且接近邊界，填充該格\n            if abs(distance - radius) < 0.5:\n                fill(x, y, "black")\n\n# 繪製圓形\ndraw_circle()\n \n 此提解法與第一題大同小異 但問GPT的方式需要改變 產生的圖形也大不相同。 \n \n 題目一 \n import math\n\n# 圓的中心和半徑\ncenter_x, center_y = 5, 5  # 圓心 (以0開始計算，所以中心是(5,5))\nradius = 4  # 半徑\n\n# 創建10x10的字符矩陣\ngrid_size = 10\nfor y in range(grid_size):\n    for x in range(grid_size):\n        # 計算到圓心的距離\n        distance = math.sqrt((x - center_x) ** 2 + (y - center_y) ** 2)\n        # 如果距離接近半徑，打印 \'*\'\n        if abs(distance - radius) < 0.5:\n            print(\'*\', end=\'\')\n        else:\n            print(\' \', end=\'\')\n    print()  # 換行 \n 上個禮拜做w10的作業後讓我這禮拜w11做得更得心應手，有蠻多步驟是跟上禮拜題目是相關的，只要有確實製作相關的解題技巧與了解老師上課所解釋的東西，就更容易做出相關的題目。 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '題目一 \n n=11 \nspace = \'_\'\ncenter = n//2\n\nfor y in range(n):\n    for x in range(n):\n        print("(--++--++--)",sep="")\n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '題目一 課堂作業 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 繪製對角線，顏色設定為藍色\nctx.strokeStyle = \'blue\'  # 設定對角線顏色為藍色\nctx.beginPath() \nctx.moveTo(10, 10)\nctx.lineTo(210, 210)  # 第一條對角線\nctx.stroke() \n \n 題目二  回家作業 \n 應老師要求設法在各線條所圍成的封閉區域塗上不同顏色，但問了約20次且問法皆有改變，卻還是無法生成出每個區域都有不同顏色的指令，代表著現今AI發展雖然進步飛快，但目前技術還是無法生成出過於複雜的指令，還需要再觀摩個幾年等待，讓AI科技變得更成熟。 \n from browser import html\nfrom browser import document as doc\n\n# 建立 canvas\ncanvas = html.CANVAS(width=300, height=300)  # 畫布大小\nbrython_div = doc["brython_div1"]  # HTML 中的容器元素\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 2  # 線條寬度設定\n\n# 第一個矩形的參數\nrect1_x, rect1_y = 50, 50  # 矩形左上角座標\nrect1_size = 100  # 矩形邊長\n\n# 第二個矩形的參數\nrect2_x, rect2_y = 100, 100  # 矩形左上角座標\nrect2_size = 100  # 矩形邊長\n\n# 填充第一個矩形的外接圓內部\ncenter_x1 = rect1_x + rect1_size / 2\ncenter_y1 = rect1_y + rect1_size / 2\nradius1 = (rect1_size * (2 ** 0.5)) / 2\nctx.fillStyle = "rgba(255, 255, 0, 0.5)"  # 半透明黃色\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)\nctx.fill()\n\n# 填充第二個矩形的外接圓內部\ncenter_x2 = rect2_x + rect2_size / 2\ncenter_y2 = rect2_y + rect2_size / 2\nradius2 = (rect2_size * (2 ** 0.5)) / 2\nctx.fillStyle = "rgba(128, 0, 128, 0.5)"  # 半透明紫色\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)\nctx.fill()\n\n# 填充第一個矩形內部\nctx.fillStyle = "lightblue"  # 填充顏色\nctx.beginPath()\nctx.rect(rect1_x, rect1_y, rect1_size, rect1_size)\nctx.fill()\n\n# 填充第二個矩形內部\nctx.fillStyle = "lightgreen"  # 填充顏色\nctx.beginPath()\nctx.rect(rect2_x, rect2_y, rect2_size, rect2_size)\nctx.fill()\n\n# 繪製第一個矩形的對角線\nctx.strokeStyle = \'blue\'  # 對角線顏色\nctx.beginPath()\nctx.moveTo(rect1_x, rect1_y)  # 左上角\nctx.lineTo(rect1_x + rect1_size, rect1_y + rect1_size)  # 右下角\nctx.stroke()\n\n# 繪製第一個矩形的邊框\nctx.strokeStyle = "red"  # 邊框顏色\nctx.beginPath()\nctx.rect(rect1_x, rect1_y, rect1_size, rect1_size)\nctx.stroke()\n\n# 繪製第二個矩形的邊框\nctx.beginPath()\nctx.rect(rect2_x, rect2_y, rect2_size, rect2_size)\nctx.stroke()\n\n# 繪製第一個矩形的外接圓邊框\nctx.strokeStyle = \'black\'  # 外接圓邊框顏色\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)\nctx.stroke()\n\n# 繪製第二個矩形的外接圓邊框\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)\nctx.stroke()\n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython-1', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython-1.html'}, {'title': 'Brython-2', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython-2.html'}]};