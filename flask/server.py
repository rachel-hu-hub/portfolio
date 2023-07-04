from flask import Flask, request, render_template, jsonify

app = Flask(__name__, static_folder='static')

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
    app.run(port=6000)
