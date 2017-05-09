
CREATE TABLE IF NOT EXISTS wondays.diary
(
  diaryID int(11) AUTO_INCREMENT,
  userID varchar(255),
  content varchar(255),
  yyyymmdd char(8),
  timestamp timestamp,
  PRIMARY KEY (diaryID)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wondays.photo
(
  diaryID int(11),
  fname varchar(255)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wondays.logstream
(
  userID varchar(255),
  page char(8),
  value varchar(255),
  timestamp timestamp
) DEFAULT CHARSET=utf8;
