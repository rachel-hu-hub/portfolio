from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/work_section')
def work_experience():
    work_experiences = [
        {'company': 'Company A', 'position': 'Position A'},
        {'company': 'Company B', 'position': 'Position B'},
        {'company': 'Company C', 'position': 'Position C'}
    ]
    rendered_data = render_template('work_section.html', work_experiences=work_experiences)
    return jsonify(rendered_data=rendered_data)

if __name__ == '__main__':
    app.run()
