import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelizeConnection";

enum UserRole {
  User = "user",
  Admin = "admin",
}

class User extends Model {
  user_type: any;
  static password(password: string, password1: any) {
    throw new Error("Method not implemented.");
  }
  public id!: number;
  public uuid!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public image!: string;
  public phone_number!: number;
  public password!: string;
  public is_admin!: UserRole;
}
User.init(
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: UserRole.User,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
  }
);

export default User;
