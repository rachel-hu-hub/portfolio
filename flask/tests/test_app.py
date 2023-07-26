import unittest
from peewee import *
import os
os.environ['TESTING'] = 'true'

from server import app, TimelinePost

MODELS = [TimelinePost]
test_db = SqliteDatabase(':memory:')

class AppTestCase(unittest.TestCase):
    def setUp(self):
        test_db.bind(MODELS, bind_refs=False, bind_backrefs=False)
        test_db.connect()
        test_db.create_tables(MODELS)
        self.client = app.test_client()
    
    def tearDown(self):
        test_db.drop_tables(MODELS)
        test_db.close()
    
    def test_home(self):
        response = self.client.get("/")
        assert response.status_code == 200
        html = response.get_data(as_text=True)


    def test_timeline(self):
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert "timeline_posts" in json
        assert len(json["timeline_posts"]) == 0