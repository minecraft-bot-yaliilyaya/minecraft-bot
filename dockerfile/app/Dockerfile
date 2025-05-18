# Используем официальный образ Node.js на Alpine Linux (маленький и безопасный)
FROM node:20-alpine

RUN apk add git
RUN apk add openssh

RUN git config --global user.name "Vi"
RUN git config --global user.email "vi@vi.com"

# Создаем рабочую директорию
WORKDIR /app

# Указываем порт, который будет слушать Express
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

# cp /root/.ssh/id_rsa.dist /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ssh git@github.com
