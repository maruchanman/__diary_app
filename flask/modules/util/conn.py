# coding: utf-8

import os
import MySQLdb

class Connect():

    def __init__(self):
        pass

    def connect(self, db):
        connection = {
            "db": 'gigs',
            "host": os.getenv('DB_HOST'),
            "user": "kadoya",
            "passwd": os.getenv('DB_PASS'),
            "port": 3306,
            "charset": 'utf8'
        }
        return MySQLdb.connect(**connection)
