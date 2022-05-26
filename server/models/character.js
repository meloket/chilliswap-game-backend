const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const subcharacterSchema = new mongoose.Schema({

  skintone: {
    type: String
  },
  hairstyle: {
    type: String
  },
  headwear: {
    type: String
  },
  eyecolor: {
    type: String
  },
  clothes: {
    type: Array
  },
  accessories: {
    type: Array
  },
  goggles: {
    type: String
  },
  headphones: {
    type: String
  },
  backpack: {
    type: String
  },
  watch: {
    type: String
  },
  shoes: {
    type: String
  },
  bodytype: {
    type: String
  }

},
  { timestamps: true }
)
const tableSchema = new mongoose.Schema({
  userId: {
    trim: true,
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  userAddress: {
    type: String,
    unique: true
  },
  characterData: {
    type: [subcharacterSchema],
    default: [
      {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "boy",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      },
      {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "boy",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      }, {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "boy",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      }, {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "girl",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      },
      {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "girl",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      }, {
        clothes: [
        ],
        accessories: [
        ],
        bodytype: "girl",
        skintone: "",
        hairstyle: "",
        eyecolor: "",
        updatedAt: "",
        createdAt: "",
        goggles: "",
        headphones: "",
        backpack: "",
        watch: "",
        shoes: "",
        headwear: ""
      }
    ]
  }
},
  { timestamps: true }
)
module.exports = mongoose.model('character', tableSchema)