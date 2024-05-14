import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelizeConnection";

class Banner extends Model {
  public id!: number;
  public uuid!: string;
  public title!: string;
  public image!: string;
  public description!: string;
  public url!: string;
  public status!: boolean;
}
Banner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "banners",
    modelName: "Banner",
  }
);

export default Banner;
