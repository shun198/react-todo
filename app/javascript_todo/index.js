// import "./styles.css"

const onClickAdd = () => {
    // inputTextに記載されたvalueを取得
    const inputText = document.getElementById("add-text").value
    // inputTextを未完了に移した後空にする
    document.getElementById("add-text").value = "";
    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target)
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
    //div生成(タスクを追加していくため)
    const div = document.createElement("div");
    div.className = "list-row";
    //タグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //button(完了)タグ追加
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    //完了ボタンにイベントを設定
    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode);
        //完了リストに追加
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;
        addTarget.textContent = null;
        // liタグの生成
        const li = document.createElement("li");
        li.innerText = text
        const backButton = document.createElement("button")
        backButton.innerText = "戻す"
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親タグを完了リストから削除
            deleteFromCompleteList(backButton.parentNode);
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });
        // divタグの子要素に各要素を設定
        div.appendChild(li);
        div.appendChild(backButton);
        document.getElementById("complete-list").appendChild(div);

    });
    //button(削除)タグ作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    //削除ボタンにイベントを設定
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了listから削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });
    //divタグの子要素に各要素を設定;
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
    document.getElementById("complete-list").removeChild(target)
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
