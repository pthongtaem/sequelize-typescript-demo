import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Movie extends Model {
  id!: number;

  title!: string;

  year!: number;

  createdAt!: Date;

  UpdatedAt!: Date;
}

Movie.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'movie',
    freezeTableName: true,
  },
);
