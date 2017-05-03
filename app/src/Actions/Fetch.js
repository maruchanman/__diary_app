import diary from '../Sample/diary.json'
import Constants from '../Settings/Constants.js'

function diaryList() {
  return diary
}

function post(path, data) {
  console.log(Constants.url + path)
  return fetch(
    Constants.url + path,
    {method: 'POST', body: data}
  ).then(res => res.json())
}

var Fetch = {
  diaryList: diaryList(),
  uploadDiary: (path, data) => post(path, data)
}

export default Fetch
