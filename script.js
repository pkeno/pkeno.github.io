function loadHTML(){
      fetch('data/result_latest.csv')
      .then(response=> response.text())
      .then(text=> document.getElementById('resultTable').innerHTML = text);
}
