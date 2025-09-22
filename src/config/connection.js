const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const conn = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true, // 연결을 사용할 수 있을 때까지 대기
    connectionLimit: 10,     // 최대 동시 연결 수 [3]
    queueLimit: 0,           // 대기열에 쌓을 수 있는 요청 수 (0은 무제한)
    enableKeepAlive: true,   // 연결 유지 기능 활성화 (옵션)
    keepAliveInitialDelay: 0 // Keep-alive 핑 시작 지연 시간 (밀리초)
});
  

// 연결 오류 처리
conn.on('error', (err) => {
    console.error('MySQL Connection Pool Error:', err);
    // 프로덕션 환경에서는 로깅 시스템 연동 필요
});
  
// 연결이 성공적으로 수립되면 메시지 출력
conn.getConnection()
.then(connection => {
    console.log('MySQL Connection Pool initialized successfully.');
    console.log(process.env.DB_DATABASE)
    connection.release(); // 연결 반환
})
.catch(err => {
    console.error('Failed to initialize MySQL Connection Pool:', err);
    // 애플리케이션 시작 실패 처리 로직 추가
    process.exit(1); // 중요한 서비스라면 애플리케이션 종료
});

module.exports = conn;