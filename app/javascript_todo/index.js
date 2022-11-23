// import "./styles.css"

const onClickAdd = () => {
    // alert();
    // inputTextに記載されたvalueを取得
    const inputText = document.getElementById("add-text").value
    document.getElementById("add-text").value = "";
    alert(inputText);
};


document.getElementById("add-button").addEventListener("click", () => onClickAdd());
