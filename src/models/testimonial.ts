import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelizeConnection";

class Testimonial extends Model {
  public id!: number;
  public uuid!: string;
  public name!: string;
  public image!: string;
  public address!: string;
  public description!: string;
  public status!: boolean;
}
Testimonial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "testimonials",
    modelName: "Testimonial",
  }
);
