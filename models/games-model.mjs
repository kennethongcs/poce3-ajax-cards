export default function initGameModel(sequelize, DateTypes) {
  return sequelize.define(
    'game',
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameState: {
        type: Sequelize.JSON,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    { underscored: true }
  );
}
