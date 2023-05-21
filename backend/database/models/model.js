module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      id: {
        // id 설정을 한다면 반드시 primarykey 제약조건 입력해야 함
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING
      },
      contents: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      complelte: {
        type: Sequelize.BOOLEAN
      }
    }, {
        timestamps: false
    });
  
    return Task;
  };