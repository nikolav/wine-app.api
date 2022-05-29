// winereview-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "winereview";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      //
      // naziv vina; sa etikete..
      wine: {
        type: String,
        index: true,
        required: true,
      },
      //
      // @firebase user.uid
      author: {
        type: String,
        required: true,
      },
      //
      // arome..
      aroma: String,
      //
      // crveno | rose | belo
      color: String,
      //
      // opis vina
      desciption: String,
      //
      // sorte grozdja
      grape: Array,
      //
      // fotografija
      image: String,
      //
      // poreklo
      origin: String,
      //
      // nivo kiseline, alc., tanini
      percentAcid: Number,
      percentAlcohol: Number,
      percentTannin: Number,
      //
      // cena i valuta
      price: Number,
      priceCurrency: String,
      //
      // 1..5
      rating: {
        type: Number,
        required: true,
      },
      //
      // suvo | polusuvo | poluslatko | slatko
      style: String,
      //
      // penusavo | desertno | fortifidovano | aromatizovano
      type: {
        type: String,
      },
      //
      // godina berbe
      year: Number,
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
