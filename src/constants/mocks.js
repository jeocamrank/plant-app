const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../icons/plants.png")
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    image: require("../icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../icons/flowers.png")
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "shop"],
    count: 17,
    image: require("../icons/sprayers.png")
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "shop"],
    count: 47,
    image: require("../icons/pots.png")
  },
  {
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../icons/fertilizers.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../images/plants_1.png"),
      require("../images/plants_2.png"),
      require("../images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../images/plants_1.png"),
      require("../images/plants_2.png"),
      require("../images/plants_3.png"),
      require("../images/plants_1.png"),
      require("../images/plants_2.png"),
      require("../images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../images/explore_1.png"),
  require("../images/explore_2.png"),
  require("../images/explore_3.png"),
  require("../images/explore_4.png"),
  require("../images/explore_5.png"),
  require("../images/explore_6.png")
];

const profile = {
  username: "tungdeptrai",
  location: "VietNam",
  email: "tung@gmail.com",
  avatar: require("../images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
