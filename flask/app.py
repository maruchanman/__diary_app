# coding: utf-8
import os
import re
import random
import datetime
from flask import Flask, jsonify, request
from modules.util.dbcontroller import *
from modules.util.utils import *

app = Flask(__name__)
CURRENTPATH = os.path.dirname(__file__)

@app.route("/<userID>", methods=["GET"])
def diaries(userID):
    data = {}
    diary_list, photo_list = select_diaries(userID)
    for diaryID, text, yyyymmdd in diary_list:
        year, month, day = ymd_to_date(yyyymmdd)
        data[diaryID] = {
          "year": year, "month": smonth(month), "day": day, "text": text, "photos": []}
    for diaryID, fname in photo_list:
        data[diaryID]["photos"].append(
            "/Users/hacker/work/life/flask/photos/{}/{}.png".format(userID, fname))
    return jsonify(data)

@app.route('/upload', methods=['POST'])
def upload():
    text = request.form.get("text")
    userID = request.form.get("user")
    photos = []
    for _, photo in request.files.items():
        name = random.getrandbits(128)
        path = os.path.join("./photos", userID)
        if not os.path.exists(path):
            os.mkdir(path)
        photo.save("./photos/{}/{}.png".format(userID, name))
        photos.append(name)
    insert_diary(userID, text, photos)
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(port=5000)