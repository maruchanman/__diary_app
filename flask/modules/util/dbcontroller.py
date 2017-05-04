# coding: utf-8
import MySQLdb
import datetime
from .conn import Connect

def __life_date():
    now = datetime.datetime.now()
    if now.hour < 12:
        return datetime.date.today() - datetime.timedelta(days=1)
    else:
        return datetime.date.today()

def insert_diary(userID, text, photos):
    diary_sql = """
      INSERT INTO wondays.diary (userID, content, yyyymmdd) VALUES (%s, %s, %s)
    """
    photo_sql = """
      INSERT INTO wondays.photo (diaryID, fname) VALUES (%s, %s)
    """
    date = __life_date()
    db = Connect()
    conn = db.connect()
    with conn.cursor() as cursor:
        cursor.execute(diary_sql, (userID, text, date.strftime("%Y%m%d")))
        diaryID = cursor.lastrowid
        for photo in photos:
            cursor.execute(photo_sql, (diaryID, photo))
    conn.commit()
    conn.close()

def select_diaries(userID):
    diary_sql = """
      SELECT diaryID, content, yyyymmdd FROM wondays.diary
      WHERE userID = %s ORDER BY yyyymmdd
    """
    photo_sql = """
      SELECT photo.diaryID, fname FROM wondays.photo
      INNER JOIN wondays.diary ON photo.diaryID = diary.diaryID
      WHERE userID = %s
    """
    db = Connect()
    conn = db.connect()
    with conn.cursor() as cursor:
        cursor.execute(diary_sql, (userID, ))
        diary = cursor.fetchall()
        cursor.execute(photo_sql, (userID, ))
        photo = cursor.fetchall()
    conn.close()
    return diary, photo
