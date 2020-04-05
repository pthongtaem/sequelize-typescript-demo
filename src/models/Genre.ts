import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Genre extends Model {
  id!: number;

  name!: string;

  createdAt!: Date;

  UpdatedAt!: Date;
}

Genre.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'genre',
    freezeTableName: true,
  },
);
