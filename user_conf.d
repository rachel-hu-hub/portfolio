server {
    listen 80;
    server_name rachelhu.me
    
    if ($host = rachehu.me) {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name rachelhu.me;
    location / {
        proxy_pass http://portfolio:5000/;
    }

    # Load the certificate files
    ssl_certificate /etc/letsencrypt/live/myportfolio/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myportfolio/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/myportfolio/chain.pem;
}