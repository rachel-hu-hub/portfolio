import os
from flask import Flask, redirect, request, render_template, jsonify
from peewee import *
from dotenv import load_dotenv
import datetime
from playhouse.shortcuts import model_to_dict
from flask_cors import CORS

app = Flask(__name__, static_folder='static')
CORS(app)

mydb = MySQLDatabase(os.getenv("MYSQL_DATABASE"),
                     user=os.getenv("MYSQL_USER"),
                     password=os.getenv("MYSQL_PASSWORD"),
                     host=os.getenv("MYSQL_HOST"),
                     port=3306
                     )

class TimelinePost(Model):
    name = CharField()
    email = CharField()
    content = TextField()
    created_at = DateTimeField(default=datetime.datetime.now())

    class Meta:
        database = mydb

mydb.connect()
mydb.create_tables([TimelinePost])

# Timeline Posts
@app.route('/api/timeline_post', methods=['POST'])
def post_time_line_post():
    name = request.form['username']
    email = request.form['email']
    content = request.form['content']
    timeline_post = TimelinePost.create(name=name, email=email, content=content)
    
    referring_url = request.referrer
    return redirect(referring_url)

@app.route('/api/timeline_post', methods=['GET'])
def get_time_line_post():
    return {
        'timeline_posts': [
            model_to_dict(p)
            for p in TimelinePost.select().order_by(TimelinePost.created_at.desc())
        ]
    }

@app.route('/api/timeline_post/<id>', methods=['DELETE'])
def delete_time_line_post(id):
    try:
        # Look for the post at the specified ID
        post = TimelinePost.get(TimelinePost.id == id)
        post.delete_instance()
        return jsonify({'message': 'Post deleted.'})
    except TimelinePost.DoesNotExit:
        return jsonify({'error': "Post not found."}), 404
    
@app.route('/timeline_form')
def timeline_form():
    rendered_data = render_template('timeline_form.html')
    return jsonify(rendered_data=rendered_data)

@app.route('/timeline', methods=['GET'])
def timeline():
    timeline_posts = [
        model_to_dict(p)
        for p in TimelinePost.select().order_by(TimelinePost.created_at.desc())
    ]

    rendered_data = render_template('timeline.html', timeline_posts=timeline_posts)
    return jsonify(rendered_data=rendered_data)

# Using custom templates
@app.route('/detail_section', methods=['POST'])
def detail_section():
    data = request.get_json()
    position = data['position']
    company = data['company']
    description = data['description']
    image_link = data['image_link']
    rendered_data = render_template('detail_section.html', position=position, company=company, description=description, image_link=image_link)
    return jsonify(rendered_data=rendered_data)

# Route for serving static files
@app.route('/static/<path:path>')
def serve_static(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    app.run(port=5000)
