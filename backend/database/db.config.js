// MySQL 연결 설정 및 Sequelizer를 사용하기 위한 매개변수 설정

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysql",
    DB: "task_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
        timestamps: false
    }
  };