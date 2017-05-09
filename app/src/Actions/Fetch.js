import diary from '../Sample/diary.json'
import Constants from '../Settings/Constants.js'

function diaryFromUser(userID) {
  return fetch(Constants.url + "/" + userID)
    .then(res => res.json())
}

function post(path, data) {
  return fetch(
    Constants.url + path,
    {method: 'POST', body: data}
  ).then(res => res.json())
}

function launch(userID) {
  fetch(Constants.url + "/launch?userID=" + userID)
  return true
}

var Fetch = {
  diaryFromUser: (userID) => diaryFromUser(userID),
  uploadDiary: (path, data) => post(path, data),
  launch: (userID) => launch(userID)
}

export default Fetch
