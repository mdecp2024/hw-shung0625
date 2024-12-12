var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-shung0625 \n 個人網站: https://github.com/mdecp2024/hw-shung0625 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '\n 問題一 \n \n 問題二 \n \n 問題三-1 \n \n 題目三-2 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '題目二 \n from browser import html\nfrom browser import document as doc\n\n# 建立畫布\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素大小\ngs = 40  # 每格的像素數\nctx = canvas.getContext("2d")\n\n# 繪製矩形格子\ndef dRect(lux, luy, w, h, s=1, c="#cccccc"):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 畫布上的網格\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充圓形中的格子\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\n# 主程式：繪製圓形在 10x10 網格中\ndef draw_circle():\n    grid(10, 10, gs)  # 建立網格\n    center_x, center_y = 5, 5  # 圓心在 10x10 網格的中心\n    radius = 4  # 半徑為 4 格\n\n    for y in range(10):\n        for x in range(10):\n            # 計算到圓心的距離\n            distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5\n            # 如果距離小於半徑且接近邊界，填充該格\n            if abs(distance - radius) < 0.5:\n                fill(x, y, "black")\n\n# 繪製圓形\ndraw_circle()\n \n 此提解法與第一題大同小異 但問GPT的方式需要改變 產生的圖形也大不相同。 \n \n 題目一 \n import math\n\n# 圓的中心和半徑\ncenter_x, center_y = 5, 5  # 圓心 (以0開始計算，所以中心是(5,5))\nradius = 4  # 半徑\n\n# 創建10x10的字符矩陣\ngrid_size = 10\nfor y in range(grid_size):\n    for x in range(grid_size):\n        # 計算到圓心的距離\n        distance = math.sqrt((x - center_x) ** 2 + (y - center_y) ** 2)\n        # 如果距離接近半徑，打印 \'*\'\n        if abs(distance - radius) < 0.5:\n            print(\'*\', end=\'\')\n        else:\n            print(\' \', end=\'\')\n    print()  # 換行 \n 上個禮拜做w10的作業後讓我這禮拜w11做得更得心應手，有蠻多步驟是跟上禮拜題目是相關的，只要有確實製作相關的解題技巧與了解老師上課所解釋的東西，就更容易做出相關的題目。 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '題目一 \n n=11 \nspace = \'_\'\ncenter = n//2\n\nfor y in range(n):\n    for x in range(n):\n        print("(--++--++--)",sep="")\n \n \n \n 第一題 :01_string_input_prin \n input()範例程式 :  你叫誰? \n print()範例程式 :  貓咪 \n \n 第二題 :02_variables \n 範例程式 :  填寫姓名 \n input()範例程式 :  你最喜歡的食物是什麼? \n \n 第三題 :03_list_if_in_else \n 範例程式 :  買書 \n 如果有販賣想要的書 : 有!我們有賣 \n 如果沒有我們要的書 : 抱歉，我們沒有賣你想要的書 \n # 初始化編程書籍列表\nprogramming_books = ["Learn python", "Python for all", "Intro to python"]\nprint(programming_books)  # 輸出書籍清單\n# 結果: [\'Learn python\', \'Python for all\', \'Intro to python\']\n\n# 提示用戶輸入想購買的書籍名稱\nwanted_book = input("Hi! What book would you like to buy?")  # 提示用戶輸入\nprint(wanted_book)  # 輸出用戶輸入的書籍名稱\n\n# 檢查用戶想購買的書籍是否在列表中\nif wanted_book in programming_books:  # 如果書籍在列表中\n    print("Yes, we sell it!")  # 顯示賣該書籍的訊息\nelse:  # 如果書籍不在列表中\n    print("Sorry, we don\'t sell that book")  # 顯示未賣該書籍的訊息\n \n \n 概要: \n input() ：從用戶輸入獲取書籍名稱。 \n 條件檢查 ： \n 使用  in  判斷書籍是否存在於書籍清單中。 \n 動態反饋 ： \n 提供即時回應，讓用戶知道該書籍是否有售。 \n \n \n 第四題 :04_list_append_remove \n print()範例程式 :  購物清單 \n 輸入自己需要的購物物品 \n # 初始化購物清單\nshopping_list = ["carrots", "chocolate", "olives"]\nprint(shopping_list)  # 輸出完整購物清單\n# 結果: [\'carrots\', \'chocolate\', \'olives\']\n\n# 要求用戶輸入新的購物項目\nnew_item = input("What else do I have to buy?")  # 提示用戶輸入要添加的物品\n\n# 檢查新物品是否已在清單中\nif new_item in shopping_list:  # 如果新物品在清單中\n    print(new_item + " is/are already in the shopping list")  # 輸出已存在的訊息\n    print(shopping_list)  # 再次輸出購物清單\nelse:  # 如果新物品不在清單中\n    shopping_list.append(new_item)  # 將新物品添加到清單末尾\n    print(shopping_list)  # 輸出更新後的購物清單\n\n# 要求用戶輸入要移除的物品\nitem_to_remove = input("What do I have to remove?")  # 提示用戶輸入要移除的物品\n\n# 檢查要移除的物品是否在清單中\nif item_to_remove in shopping_list:  # 如果物品在清單中\n    shopping_list.remove(item_to_remove)  # 從清單中移除該物品\n    print(shopping_list)  # 輸出更新後的購物清單\nelse:  # 如果物品不在清單中\n    print(item_to_remove + " is/are not in the list")  # 輸出不存在的訊息\n    print(shopping_list)  # 再次輸出購物清單\n \n \n 概要: \n input() ：從用戶輸入獲取新物品或要移除的物品名稱。 \n 條件檢查 ： \n 使用  in  檢查物品是否存在於列表中。 \n 列表操作 ： \n .append()  用於新增物品。 \n .remove()  用於移除物品，僅當物品存在時有效。 \n 用戶交互 ：提供即時反饋，告知用戶物品是否已存在或被成功移除。 \n \n \n 第五題 :05_list_index_pop_insert \n 範例程式 :  點菜 \n 對於菜單其他配菜感到興趣，於是想要修改菜單中的配菜 \n \n # 初始化今日菜單列表\ntodays_menu = ["burger", "salad", "coke"]\nprint(todays_menu)  # 輸出完整的菜單列表\n# 結果: [\'burger\', \'salad\', \'coke\']\n\n# 找到 "salad" 的索引位置\nside_dish_index = todays_menu.index("salad")  # 獲取 "salad" 的索引\nprint(side_dish_index)  # 輸出 "salad" 的索引位置\n# 結果: 1\n\n# 根據索引移除 "salad"\ntodays_menu.pop(side_dish_index)  # 移除索引 1 的元素（即 "salad"）\nprint(todays_menu)  # 輸出移除 "salad" 後的列表\n# 結果: [\'burger\', \'coke\']\n\n# 在原索引位置插入 "fries"\ntodays_menu.insert(side_dish_index, "fries")  # 在索引 1 插入 "fries"\nprint(todays_menu)  # 輸出插入 "fries" 後的列表\n# 結果: [\'burger\', \'fries\', \'coke\']\n \n \n 概要: \n index() ：用於查找元素的索引位置。 \n pop() ：用於根據索引移除列表中的元素，並更新列表。 \n insert() ：用於在指定索引位置插入新元素。 \n 列表操作順序性 ：通過索引操作，保證列表元素在移除或插入後的正確位置。 \n \n \n 第六題 :06_list_slicing \n 範例程式 :  城市 \n # 初始化城市列表\ncities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\nprint(cities)  # 輸出整個列表\n# 結果: [\'San Diego\', \'Prague\', \'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 取得索引 1 的元素\nprint(cities[1])  # 輸出索引 1 的元素（第二個城市）\n# 結果: \'Prague\'\n\n# 切片操作，取得索引 1 到 3 的元素（不包含索引 4）\nprint(cities[1:4])  # 從索引 1 到索引 4（不含），提取子列表\n# 結果: [\'Prague\', \'Cape Town\', \'Tokyo\']\n\n# 切片操作，從索引 1 到 4，每隔 2 個元素提取一次\nprint(cities[1:4:2])  # 從索引 1 開始，每隔 2 個取一次\n# 結果: [\'Prague\', \'Tokyo\']\n\n# 取得索引 0 到 2 的元素\nprint(cities[0:3])  # 從索引 0 到索引 3（不含），提取子列表\n# 結果: [\'San Diego\', \'Prague\', \'Cape Town\']\n\n# 切片操作，省略起始索引，默認從索引 0 開始\nprint(cities[:3])  # 提取索引 0 到索引 3（不含）\n# 結果: [\'San Diego\', \'Prague\', \'Cape Town\']\n\n# 切片操作，取得索引 2 到列表結尾的元素\nprint(cities[2:5])  # 從索引 2 開始，提取到結尾\n# 結果: [\'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 切片操作，省略結束索引，提取從索引 2 到結尾的元素\nprint(cities[2:])  # 從索引 2 開始，提取到列表結尾\n# 結果: [\'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 切片操作，從索引 0 到索引 5，每隔 2 個提取一次\nprint(cities[0:5:2])  # 從索引 0 開始，每隔 2 個取一次\n# 結果: [\'San Diego\', \'Cape Town\', \'Melbourne\']\n\n# 切片操作，從列表頭到尾，每隔 2 個提取一次\nprint(cities[::2])  # 從頭到尾，每隔 2 個取一次\n# 結果: [\'San Diego\', \'Cape Town\', \'Melbourne\']\n\n# 取得索引 4 的元素\nprint(cities[4])  # 提取列表中索引 4 的元素（最後一個城市）\n# 結果: \'Melbourne\'\n\n# 使用負索引提取最後一個元素\nprint(cities[-1])  # 使用負索引提取最後一個元素\n# 結果: \'Melbourne\'\n\n# 切片操作，使用負索引提取倒數第 4 到倒數第 2 的元素\nprint(cities[-4:-1])  # 從倒數第 4 個到倒數第 1 個（不含倒數第 1 個）\n# 結果: [\'Prague\', \'Cape Town\', \'Tokyo\']\n\n# 切片操作，索引 3 到 1 反向提取\ncities[3:0:-1]  # 從索引 3 到索引 1，反向提取\n# 結果: [\'Tokyo\', \'Cape Town\', \'Prague\']\n\n# 切片操作，使用負索引反向提取倒數第 2 到倒數第 5 的元素\ncities[-2:-5:-1]  # 從倒數第 2 到倒數第 5，反向提取\n# 結果: [\'Tokyo\', \'Cape Town\', \'Prague\']\n\n# 反轉整個列表\nprint(cities[::-1])  # 從尾到頭反轉整個列表\n# 結果: [\'Melbourne\', \'Tokyo\', \'Cape Town\', \'Prague\', \'San Diego\']\n \n \n 概要: \n 索引與切片 ： \n cities[start:end]  提取從  start  到  end （不包含  end ）的子列表。 \n cities[start:end:step]  添加步長參數，每隔  step  個元素提取一次。 \n 負索引: \n 負數索引用來從列表尾部開始計數，例如  -1  表示最後一個元素。 \n 反向切片 ：當步長為負數（如  -1 ）時，列表會反向提取元素。 \n \n 第七題 :07_list_slicing_use \n 範例程式 :  列表操作 \n senses = ["eyes", "nose", "ears", "tongue", "skin"]\nsenses[1] = "smell"  # 替換第 2 個元素為 "smell"\nsenses[3:5] = ["taste", "touch"]  # 替換第 4-5 個元素為 "taste" 和 "touch"\nsenses[0:3:2] = ["sight", "hearing"]  # 修改索引 0 和 2 為 "sight" 和 "hearing"\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nplanets = planets + ["Jupiter"]  # 新增 "Jupiter"\nplanets = planets[0:2] + ["Venus"] + planets[2:5]  # 插入 "Venus" 在第 3 個位置\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]  # 插入 "Uranus" 和 "Saturn"\nhouse = ["kitchen", "dining room", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\ndel house[1]  # 刪除索引 1 的元素\ndel house[4:6]  # 刪除索引 4-5 的元素\ndel house[::2]  # 刪除所有偶數索引的元素\ndel house  # 刪除整個列表\n \n \n 概要: \n 列表修改 ：可透過索引或切片直接修改列表內容。 \n 新增元素 ：使用  +  合併列表以新增元素。 \n 刪除操作 ： del  可用於刪除特定元素、切片，或整個列表。 \n 錯誤提示 ：刪除列表後再使用會引發錯誤，因為變數已不存在。 \n \n \n 第八題 :08_for_range \n 範例程式 :  朋友名單與菜餚清單 \n # 初始化朋友的名字列表\nfriends = ["Geetha", "Luca", "Daisy", "Juhan"]\n# 初始化每位朋友喜愛的菜品列表\ndishes  = ["sushi", "burgers", "tacos", "pizza"]\n\n# 輸出朋友的名字\nprint("My friends\' names are:")  # 顯示標題：我的朋友們的名字\nprint(friends)  # 列印整個朋友列表\n\n# 使用 for 迴圈逐一列出朋友的索引與名字\nfor index in range(0, 4):  # range(0,4) 表示索引從 0 到 3\n    print("index:  " + str(index))  # 顯示目前的索引\n    print("friend: " + friends[index])  # 顯示對應索引的朋友名字\n\n# 輸出每位朋友喜愛的菜品\nprint("Their favorite dishes are:")  # 顯示標題：他們喜愛的菜品\nprint(dishes)  # 列印整個菜品列表\n\n# 使用 for 迴圈逐一列出菜品的索引與名稱\nfor index in range(0, 4):  # 同樣索引從 0 到 3\n    print("index:  " + str(index))  # 顯示目前的索引\n    print("dish: " + dishes[index])  # 顯示對應索引的菜品名稱\n\n# 將朋友與他們喜愛的菜品結合輸出\nfor index in range(0, 4):  # 遍歷索引從 0 到 3\n    # 結合朋友名字與菜品形成完整句子\n    print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index])  \n    # 中文解釋：我的朋友 {朋友名字} 最喜歡的菜是 {菜品名稱}\n \n \n 概要: \n 列表與索引 ：透過索引連結兩個列表的內容。 \n 迴圈應用 ：使用  for  迴圈來逐一處理列表元素。 \n 輸出格式化 ：串接文字和變數形成完整句子。 \n \n 第九題 :09_for_loop_if_equals \n 範例程式 :  動物園 \n # 初始化動物列表\nanimals = ["giraffe", "penguin", "dolphin"]\nprint(animals)  # 輸出整個動物列表\n\n# 遍歷列表中的每個位置\nfor i in range(0, len(animals)):  # 使用 range 與 len 遍歷列表索引\n    print("-- Beginning of loop --")  # 提示進入迴圈\n    # 輸出每個元素及其索引位置\n    print("The element in position " + str(i) + " is " + animals[i])  \n    # 中文解釋：位置 {i} 的元素是 {animals[i]}\n\n# 定義想看的動物\nwanted_to_see = "penguin"  # 想看的動物是 "penguin"\n\n# 再次遍歷列表中的每個位置\nfor i in range(0, len(animals)):  # 同樣遍歷列表索引\n    # 如果當前的動物是想看的動物\n    if animals[i] == wanted_to_see:\n        # 輸出符合期待的訊息\n        print("I saw a " + animals[i] + " and I really wanted to see it!")\n        # 中文解釋：我看到了 {animals[i]}，這正是我想看的！\n    # 如果當前的動物不是想看的\n    else:\n        # 輸出普通的看到訊息\n        print("I saw a " + animals[i])\n        # 中文解釋：我看到了 {animals[i]}\n \n \n 概要: \n 列表操作 ： \n range  與  len  結合，遍歷列表中的每個索引。 \n 條件判斷 ： \n 使用  if  判斷當前的元素是否為想看的動物。 \n 輸出格式 ： \n 根據條件輸出不同訊息，強調看到的動物是否符合期待。 \n \n 第十題:10_for_search \n 程式範例 :  關於手套 \n # 初始化配件列表\naccessories = ["belt", "hat", "gloves", "sunglasses", "ring"]\nprint(accessories)  # 輸出整個配件列表\n# 結果: [\'belt\', \'hat\', \'gloves\', \'sunglasses\', \'ring\']\n\n# 遍歷每個元素及其索引\nfor i in range(len(accessories)):  # 使用 len(accessories) 獲取列表長度\n    # 輸出每個元素及其索引\n    print("The element " + accessories[i] + " is in position " + str(i))\n# 結果: \n# The element belt is in position 0\n# The element hat is in position 1\n# The element gloves is in position 2\n# The element sunglasses is in position 3\n# The element ring is in position 4\n\n# 檢查元素的長度是否等於 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) == 6:  # 如果元素長度為 6\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has 6 characters")\n# 結果: \n# The element gloves is in position 2 and it has 6 characters\n\n# 檢查元素的長度是否小於 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) < 6:  # 如果元素長度小於 6\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has less than 6 characters")\n# 結果:\n# The element belt is in position 0 and it has less than 6 characters\n# The element hat is in position 1 and it has less than 6 characters\n# The element ring is in position 4 and it has less than 6 characters\n\n# 設定長度閾值\nn_of_characters = 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) > n_of_characters:  # 如果元素長度大於 6\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has more than " + str(n_of_characters) + " characters")\n# 結果:\n# The element sunglasses is in position 3 and it has more than 6 characters\n\n# 檢查元素長度是否不等於 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) != n_of_characters:  # 如果元素長度不等於 6\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has a number of characters different from " + str(n_of_characters))\n# 結果:\n# The element belt is in position 0 and it has a number of characters different from 6\n# The element hat is in position 1 and it has a number of characters different from 6\n# The element sunglasses is in position 3 and it has a number of characters different from 6\n# The element ring is in position 4 and it has a number of characters different from 6\n\n# 設定索引閾值\nposition = 2\nfor i in range(len(accessories)):\n    if i <= position:  # 如果索引小於或等於閾值\n        print("The element " + accessories[i] + " is in position " + str(i) + ", which is less than or equal to " + str(position))\n# 結果:\n# The element belt is in position 0, which is less than or equal to 2\n# The element hat is in position 1, which is less than or equal to 2\n# The element gloves is in position 2, which is less than or equal to 2\n\n# 檢查索引是否大於或等於閾值\nfor i in range(len(accessories)):\n    if i >= position:  # 如果索引大於或等於閾值\n        print("The element " + accessories[i] + " is in position " + str(i) + ", which is at least " + str(position))\n# 結果:\n# The element gloves is in position 2, which is at least 2\n# The element sunglasses is in position 3, which is at least 2\n# The element ring is in position 4, which is at least 2\n \n \n 概要: \n len() ：用於計算元素的字元長度。 \n 條件判斷 ： \n 使用  == ,  < ,  > ,  !=  判斷長度或索引是否符合條件。 \n 索引操作 ： \n 使用  for i in range(len(accessories))  遍歷列表的每個索引，實現條件檢查和操作。 \n 靈活的閾值設置 ： \n 可動態調整長度或索引的閾值，控制輸出內容。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '題目一 課堂作業 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 繪製對角線，顏色設定為藍色\nctx.strokeStyle = \'blue\'  # 設定對角線顏色為藍色\nctx.beginPath() \nctx.moveTo(10, 10)\nctx.lineTo(210, 210)  # 第一條對角線\nctx.stroke() \n \n 題目二  回家作業 \n 失敗的答案 \n \n 應老師要求設法在各線條所圍成的封閉區域塗上不同顏色，但問了約20次且問法皆有改變，卻還是無法生成出每個區域都有不同顏色的指令，代表著現今AI發展雖然進步飛快，但目前技術還是無法生成出過於複雜的指令，還需要再觀摩個幾年等待，讓AI科技變得更成熟。 \n 補貼正確的答案 \n \n 正確答案程式碼 \n from browser import html\nfrom browser import document as doc\nimport math\n  \ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n  \nctx = canvas.getContext("2d")\nctx.lineWidth = 4\n \n#混色的\nctx.globalCompositeOperation = "screem"\n \n \n#黑邊圓*2(每個畫四個邊邊)\nctx.strokeStyle = \'black\'\n#第一個圓\nctx.beginPath()\nctx.arc(160, 160, 141, 0.25 * math.pi,0.75 * math.pi)\nctx.fillStyle = "Turquoise"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 0.75 * math.pi,1.25 * math.pi)\nctx.fillStyle = "Tomato"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 1.25 * math.pi,1.75 * math.pi)\nctx.fillStyle = "SpringGreen"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 1.75 * math.pi,0.25 * math.pi)\nctx.fillStyle = "FloralWhite"\nctx.fill()\nctx.stroke()\n \n#第二個圓\nctx.beginPath()\nctx.arc(260, 260, 141, 1.25 * math.pi,1.75 * math.pi)\nctx.fillStyle = "Purple"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 1.75 * math.pi,0.25 * math.pi)\nctx.fillStyle = "OliveDrab"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 0.25 * math.pi,0.75 * math.pi)\nctx.fillStyle = "Orange"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 0.75 * math.pi,1.25 * math.pi)\nctx.fillStyle = "MediumVioletRed"\nctx.fill()\nctx.stroke()\n \n \n#紅方形*2(4個三角形)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(60,260)\nctx.lineTo(260,260)\nctx.fillStyle = "Gold"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(260,60)\nctx.lineTo(260,260)\nctx.fillStyle = "Indigo"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(360,160)\nctx.lineTo(360,360)\nctx.fillStyle = "Cyan"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(160,360)\nctx.lineTo(360,360)\nctx.fillStyle = "SpringGreen"\nctx.fill()\nctx.stroke()\n \n  \n#重疊的小方型\nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(160,260)\nctx.lineTo(260,260)\nctx.fillStyle = "Turquoise"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(260,160)\nctx.lineTo(260,260)\nctx.fillStyle = "SlateBlue"\nctx.fill()\nctx.stroke()\n \n \n#籃斜線\nctx.strokeStyle = \'blue\'\nctx.beginPath() \nctx.moveTo(60, 60)\nctx.lineTo(260, 260)\nctx.stroke() \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython-1', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython-1.html'}, {'title': 'Brython-2', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython-2.html'}]};