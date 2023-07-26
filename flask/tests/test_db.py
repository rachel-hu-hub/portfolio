import unittest
from peewee import *

from server import TimelinePost
# from app import TimelinePost

MODELS = [TimelinePost]
test_db = SqliteDatabase(':memory:')

class TestTimelinePost(unittest.TestCase):
    def setUp(self):
        # bind() will associate the model we create to a given databse
        test_db.bind(MODELS, bind_refs=False, bind_backrefs=False)
        test_db.connect()
        test_db.create_tables(MODELS)
    
    def tearDown(self):
        test_db.drop_tables(MODELS)
        test_db.close()

    def test_timeline_post(self):
        # Create 2 timeline posts
        first_post = TimelinePost.create(name='Rachel Hu', email='rachel@example.com', content="Yo wasssup")
        assert first_post.id == 1
        second_post = TimelinePost.create(name='Rache Hu', email='rache@example.com', content="Yo wasssup!")
        assert second_post.id == 2
        # Get timeline posts from the db and assert that they are correct
        query = TimelinePost.select().where(TimelinePost.id == 1)
        first_post_selected = query.get()
        assert first_post_selected.name == 'Rachel Hu'
        assert first_post_selected.email == 'rachel@example.com'
        assert first_post_selected.content == "Yo wasssup"
        query = TimelinePost.select().where(TimelinePost.id == 2)
        second_post_selected = query.get()
        assert second_post_selected.name == 'Rache Hu'
        assert second_post_selected.email == 'rache@example.com'
        assert second_post_selected.content == "Yo wasssup!"
