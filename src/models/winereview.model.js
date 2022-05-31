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
      // opis
      desciption: String,
      //
      // kratka | srednja | duga
      finish: String,
      //
      // sorte grozdja
      grape: Array,
      //
      // fotografija
      image: String,
      //
      // bistro
      isClear: Boolean,
      //
      // penusavo #| desertno | fortifidovano | aromatizovano
      isFizzy: Boolean,
      //
      // mutno
      isHazy: Boolean,
      //
      // aka. `style`
      // suvo | polusuvo | poluslatko | slatko
      // 1..4
      levelSugar: Number,
      // 1..3; nizak | srednji | visok
      levelAcid: Number,
      levelAlc: Number,
      levelTannin: Number,
      // 1..3; kratka | srednja | duga
      levelFinish: Number,
      //
      // cena (RDS); #valuta
      price: Number,
      //
      // proizvodjac, vinarija
      producer: String,
      //
      // 0..4
      wineRating: {
        type: Number,
        required: true,
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
