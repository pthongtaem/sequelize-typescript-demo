import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Actor extends Model {
  id!: number;

  firstName!: string;

  createdAt!: Date;

  UpdatedAt!: Date;
}

Actor.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'actor',
    freezeTableName: true,
  },
);
