import "dotenv/config";
import app from "./index.js";
import sequelize from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

await sequelize.authenticate();
console.log("Database Connected");

await sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
