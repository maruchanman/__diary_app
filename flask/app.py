# coding: utf-8
import os
import re
import random
import datetime
from flask import Flask, jsonify, request

app = Flask(__name__)
CURRENTPATH = os.path.dirname(__file__)

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
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(port=5000)
