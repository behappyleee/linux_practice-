# 가져올 이미지를 정의
FROM node:latest

# 경로 설정 하기
WORKDIR /app

# package.json 워킹 디렉토리에 복사 (. 은 설정한 워킹 디렉토리를 의미)
COPY package.json .

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사
COPY . .

# 3000 번 포트
EXPOSE 3000

# npm script 실행
CMD ["npm", start]

