# Deploy React + Vite application to GitHub page (with React-router-dom)

## 로컬 배포
Github Actions를 사용하지않고 package.json에 스크립트를 추가하여 로컬 환경에서 배포 프로세스를 제어할 수 있습니다.

## 배포 방법
1. vite-react project 생성
2. npm install --include=dev gh-pages
(npm 7 이전 버전 : npm install --save -dev gh-pages)
3. package.json scripts 작성
("homepage", "predeploy", "deploy")
4. vite.config.js base 작성
5. git 동기화 
6. npm run deploy
