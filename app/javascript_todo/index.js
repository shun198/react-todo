// import "./styles.css"

const onClickAdd = () => {
    // alert();
    // inputTextに記載されたvalueを取得
    const inputText = document.getElementById("add-text").value
    document.getElementById("add-text").value = "";
    //div生成(タスクを追加していくため)
    const div = document.createElement("div");
    div.className = "list-row";
    //タグ生成
    const li = document.createElement("li");
    li.innerText = inputText;
    //button(完了)タグ追加
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    //完了ボタンにイベントを設定
    completeButton.addEventListener("click", () => {
        alert("完了")
    });
    //button(削除)タグ作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    //完了ボタンにイベントを設定
    deleteButton.addEventListener("click", () => {
        alert("削除")
    });
    //divタグの子要素に各要素を設定;
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
};


document.getElementById("add-button").addEventListener("click", () => onClickAdd());
