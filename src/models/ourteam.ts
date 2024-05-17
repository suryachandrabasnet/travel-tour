import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelizeConnection";

class OurTeam extends Model {
  public id!: number;
  public uuid!: string;
  public name!: string;
  public phone_number!: string;
  public email!: string;
  public position!: string;
  public status!: boolean;
}
OurTeam.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
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
    tableName: "our_teams",
    modelName: "OurTeam",
  }
);

export default OurTeam;
