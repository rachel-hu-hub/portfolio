from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/work_section', methods=['POST'])
def work_experience():
    data = request.get_json()
    position = data['position']
    company = data['company']
    description = data['description']
    rendered_data = render_template('work_section.html', position=position, company=company, description=description)
    return jsonify(rendered_data=rendered_data)

if __name__ == '__main__':
    app.run()
