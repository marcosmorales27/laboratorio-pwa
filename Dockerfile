FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY dist/laboratorio-pwa/browser /usr/share/nginx/html

EXPOSE 9090