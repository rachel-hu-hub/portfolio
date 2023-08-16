FROM python:3.9-slim-buster

WORKDIR /usr/projects/portfolio

COPY flask/requirements.txt /flask/

RUN cd /flask && pip3 install -r requirements.txt

COPY . .

ENV FLASK_APP=flask/server.py

CMD ["flask", "run", "--host=0.0.0.0"]

EXPOSE 5000