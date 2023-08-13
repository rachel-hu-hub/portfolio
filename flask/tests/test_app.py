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

        # Make sure it is rendering the correct default title
        assert "<title>Rachel Hu</title>" in html

        # Make sure the photo is rendering properly
        assert '<img src="../static/intro-photo.png"' in html

        # Make sure the correct title variable is being passed
        assert "<h1>Rachel Hu</h1>" in html

        # Make sure the copyright symbol is showing in the footer
        assert "<p>&copy;" in html


    def test_timeline(self):
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert "timeline_posts" in json
        assert len(json["timeline_posts"]) == 0

        # Check that the POST API is posting
        form = {'username': "wassup", 'email': "rachel@gmail.com", 'content': "This is a test."}
        response = self.client.post("/api/timeline_post", data=form)
        assert response.status_code == 200

        # Check that the GET API is getting everything
        form2 = {'username': "wassup2", 'email': "rachel@gmail.com", 'content': "This is a test."}
        self.client.post("/api/timeline_post", data=form2)
        form3 = {'username': "wassup3", 'email': "rachel@gmail.com", 'content': "This is a test."}
        self.client.post("/api/timeline_post", data=form3)
        response = self.client.get("/api/timeline_post")
        data = response.get_data(as_text=True)
        wassups = ["wassup", "wassup2", "wassup3"]
        assert all(wassup in data for wassup in wassups)

        # Check that DELETE is working
        response = self.client.delete("/api/timeline_post/1")
        assert response.status_code == 200
        data = response.get_data(as_text=True)
        assert '"id":1' not in data

        # Check that posts are displayed in the right format
        response = self.client.get("/timeline")
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert "<h1>Timeline Posts</h1>" in html

    def test_malformed_timeline_post(self):
        # POST request missing name
        response = self.client.post("/api/timeline_post", data={"email": "rachel@gmail.com", "content": "HEYY"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid name" in html

        # POST request with empty content
        response = self.client.post("/api/timeline_post", data={"username": "Lily", "email": "rachel@gmail.com", "content": ""})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid content" in html

        # POST request with malformed email
        response = self.client.post("/api/timeline_post", data={"username": "Lily", "email": "not-an-email", "content": "Hey there friends!"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid email" in html