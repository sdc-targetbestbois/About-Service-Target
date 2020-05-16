const demo = [
  {
    id: 1,
    name: "Oathkeeper Sword",
    details: {
      highlights: [
        "Very pokey",
        "Great at keeping oaths",
        "Great for slaying your enemies",
        "Bedazzeled"
      ],
      specs: [
        {key: "Suggested Age", value: "3 Years and Up"},
        {key: "Material", value: "Valyrian Steel, gold plated, rubies"},
        {key: "Dimensions (Overall)", value: "60 inches (L) x 14 inches (W)"},
        {key: "Prop Type", value: "Sword"},
        {key: "Warranty", value: "No warranty. To obtain a copy of the manufaturer's or supplier's warranty for this item prior to purchasing the item, please send a Raven to Targaryen Guest Services"},
        {key: "TCIN", value: 38103872},
        {key: "UPC", value: 983726138492},
        {key: "Item Number (DPCI)", value: "198-00-598"}
      ],
      description: "Oathkeeper is one of two Valyrian steel longswords made from Ice, the greatsword of House Stark, under orders of Lord Tywin Lannister. While initially given to Jaime Lannister by Lord Tywin with the intention of making it an heirloom of their house, Jaime instead gave it to Brienne of Tarth for the task of rescuing Sansa Stark. Its sister blade is Widow's Wail.\n\nThe sword has black and red ripples through the steel. Its scabbard glitters gold and is decorated with a row of lion's heads and smoldering red rubies. The pommel has a golden lion's head with ruby eyes that shine like two red stars."
    },
    shipping: {
      details: {
        dimensions: {
          length: 60,
          width: 14
        },
        weight: 67
      }
    }
  },
  {
    id: 2,
    name: "Limited Edition Dragon Egg Box",
    details: {
      highlights: [
        "It's a DRAGON EGG, what more do you want?! Dragons are massive, flying reptiles that can breathe fire.",
        "Dragons are rumored to have a strong connection to magic, which seems to be proven true when magic begins to return to the world after the birth of the first three in over two hundred years.",
        "Dragons possess awesome and devastating power, capable of laying waste to armies and burning entire cities to ashes.",
        "Men who were able to tame and ride dragons as beasts of war used them in battle and to forge vast empires across the continents of Essos and Westeros. The greatest of these empires was the Valyrian Freehold forged by the Valyrian dragonlords.",
        "Will it hatch a dragon? ...who knows. Buy now and find out!"
      ],
      specs: [
        {key: "Contains", value: "Eggs"},
        {key: "Country of Origin", value: "Westeros"},
        {key: "Dimensions (Overall)", value: "11 inches (L) x 8 inches (W)"},
        {key: "Dietary Needs", value: "WSDA Grade A"},
        {key: "Form", value: "Whole"},
        {key: "Store", value: "Mother Hen Warm"},
        {key: "Package Quantity", value: "3"},
        {key: "Pre-package preparation", value: "Raw"},
        {key: "Package type", value: "Multi-pack single servings"},
        {key: "Egg size", value: "XXL"},
        {key: "Net wieght", value: "126 ounces"},
        {key: "TCIN", value: 03451237},
        {key: "UPC", value: 837321238956},
        {key: "Item Number (DPCI)", value: "930-32-726"}
      ],
      description: "Dragon eggs are large eggs with tiny scales, which shimmer like polished metal in the sunlight. Dragon eggs come in a variety of rich colors. The color of the eggshell appears to indicate the coloring of the dragon within: from the deep green egg, with burnished bronze flecks hatches Rhaegal, a dragon with jade-green scales and wings, and bronze eyes; from the pale cream egg streaked with gold and bronze hatches the dragon Viserion, who has golden eyes and cream-colored and golden-colored scales; from the black egg with scarlet ripples and swirls hatches the dragon Drogon, whose scales and teeth are black, and whose horns, spinal plates, and eyes are red.\n\n Dragons have been known to lay eggs in a clutch of up to at least five, and a dragon may lay several clutches during its lifetime. Although the subject of dragon mating habits is debatable, some maesters believe that if a dragon never laid an egg in its lifetime, it must be male. Whether an egg has to be fertilized by a male dragon in order to hatch is not known."
    },
    shipping: {
      details: {
        dimensions: {
          length: 11,
          width: 8
        },
        weight: 7.875
      }
    }
  },
  {
    id: 3,
    name: "Stark Infantry Shield",
    details: {
      highlights: [
        "Complete your battle ensemble with this awesome shield!",
        "42 inch Valyrian Steel shield.",
        "Each shield is individually serialized and will come with a certificate of authenticity. It also includes a wall mount with slots that will accept most swords to allow you to display up to three of your favorite swords behind the shield.",
        "Man sized.",
        "Officially licensed Stark Bloodline armor."
      ],
      specs: [
        {key: "Number of Pieces", value: "1"},
        {key: "Suggested Age", value: "6 Years and Up"},
        {key: "Equipment Type", value: "Shield"},
        {key: "Material", value: "Valyrian Steel"},
        {key: "Dimensions (Overall)", value: "42 inches (L) x 42 inches (W)"},
        {key: "Net wieght", value: "480 ounces"},
        {key: "Warranty", value: "No warranty. To obtain a copy of the manufaturer's or supplier's warranty for this item prior to purchasing the item, please send a Raven to Targaryen Guest Services"},
        {key: "TCIN", value: 84184039}
      ],
      description: "Complete your battle ensemble with this reliable, lightweight shield! 42 inch Valyrian Steel shield is hand crafted by the Starks. Man sized. Officially licensed Stark Bloodline armor."
    },
    shipping: {
      details: {
        dimensions: {
          length: 42,
          width: 42
        },
        weight: 30
      }
    }
  },
  {
    id: 4,
    name: "Sigil Tankard",
    details: {
      highlights: [
        "Includes 1x family crest stein",
        "High quality, double-wall vacuum sealed, Valyrian Steel construction",
        "Keeps cold drinks cold for 24hrs, and hot drinks hot for 12hrs",
        "Maiden-washer safe",
        "Officially licensed 22 ounce stein",
        "Brand new in manufacturer packaging"
      ],
      specs: [
        {key: "Material", value: "Valyrian Steel"},
        {key: "Suggested Age", value: "6 Years and Up"},
        {key: "Warranty", value: "No warranty. To obtain a copy of the manufaturer's or supplier's warranty for this item prior to purchasing the item, please send a Raven to Targaryen Guest Services"},
        {key: "TCIN", value: 18361094}
      ],
      description: "A marvel of modern construction. The first ever double-wall vacuum sealed construction! Keeps your drinks hot/cold longer for those long, weary journeys across Westeros. Set out on your adventure to overthrow the tyrant Queen in comfort that your drink will always be the perfect temperature."
    },
    shipping: {
      details: {
        dimensions: {
          length: 5,
          width: 5,
          height: 10
        },
        weight: 1.67
      }
    }
  },
  {
    id: 5,
    name: "House Targaryen Desktop Stationery Set",
    details: {
      highlights: [
        "Personalize up to 30 pages of your thoughts in the dream journal",
        "Includes 30 lettersheets & envelopes. High quality quill pen."
      ],
      specs: [
        {key: "Number of Pieces", value: "62"},
        {key: "Suggested Age", value: "14 Years and Up"},
        {key: "Includes", value: "Dream journal, 30 lettersheets, 30 envelopes, quill pen"},
        {key: "Material", value: "Paper"},
        {key: "TCIN", value: 834092874},
        {key: "UPC", value: 765940743102},
        {key: "Item Number (DPCI)", value: "081-04-1201"}
      ],
      description: "Create and keep your own dream journal! Personalize up to 30 pages of your thoughts, lists and secrets! Kit includes 30 page journal, 30 lettersheets and envelopes, and a colorful quill pen."
    },
    shipping: {
      details: {
        dimensions: {
          length: 11,
          width: 8.5,
          height: 5
        },
        weight: 5
      }
    }
  },
  {
    id: 6,
    name: "Hodor Ho-doorer, Door Stop",
    details: {
      highlights: [
        "Designed by the most renowned name in the sport of holding doors!",
        "Nothing holds doors better, with the exception of Hodor himself.",
        "Made from resilient Weirwood trees.",
        "Strong as stone. Does not rot.",
        "Officially licensed by Hodor.",
        "'Hodor' -Hodor"
      ],
      specs: [
        {key: "Dimensions (Overall)", value: "7.5 inches (L) x 1.5 inches (W) x 2 inches thick"},
        {key: "Weight", value: ".17 pounds"},
        {key: "Mount Type", value: "Pressure-mounted"},
        {key: "Package Quantity", value: "1"},
        {key: "Material", value: "Weirwood"},
        {key: "Net wieght", value: "1.23 pounds"},
        {key: "Warranty", value: "Lifetime warranty"},
        {key: "TCIN", value: 79391788},
        {key: "UPC", value: 638060658710},
        {key: "Item Number (DPCI)", value: "085-03-0213"}
      ],
      description: "Designed by Hodor himself, using resilient Weirwood wood. Weirwood trees live an extremely long time, and even when they die they do not rot. Objects made of weirwood are as lasting as stone. This is how the faces in the weirwood trees could actually be carved by the Children of the Forest, even though they disappeared six thousand years ago. Nothing will hold your door better, except Hodor himself."
    },
    shipping: {
      details: {
        dimensions: {
          length: 7.5,
          width: 1.5,
          height: 2
        },
        weight: 1.23
      }
    }
  }
]

const randomDetails = (id, name) => {
  let item = {
    id: id,
    name: name,
    details: {
      highlights: [
        "Aliquam tincidunt odio in elementum.",
        "Maecenas fermentum tincidunt dolor tristique lacinia. Praesent rutrum lorem quam.",
        "Duis vel mattis dolor, a sollicitudin ex.",
        "Fusce aliquam erat.",
        "Donec auctor pretium purus, sed fringilla dui fringilla in. Donec lacinia, nibh nec.",
        "Phasellus quis ante ex. Integer tincidunt nunc efficitur dapibus malesuada. Ut."
      ],
      specs: [
        {key: "Mauris eget", value: "Nullam ac euismod tortor."},
        {key: "Vivamus semper", value: "Phasellus eu."},
        {key: "Praesent dignissim", value: "Pressure-mounted"},
        {key: "Vivamus nec", value: Math.ceil(Math.random() * 20)},
        {key: "Donec nibh", value: "Aliquam tincidunt eros at felis."},
        {key: "Nam at", value: "Pellentesque habitant morbi."},
        {key: "Nunc enim", value: "In ultricies rutrum risus, in hendrerit lacus."},
        {key: "TCIN", value: Math.ceil(Math.random() * 10000000)},
        {key: "UPC", value: Math.ceil(Math.random() * 1000000000)}
      ],
      description: "Curabitur sit amet eros dui. Proin fringilla ultrices massa vel finibus. Morbi ac lorem venenatis, euismod leo id, tincidunt risus. Morbi tempor sodales quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vulputate vulputate ipsum. Nullam vitae arcu in magna maximus consequat. Donec in vestibulum quam, eget tempus velit. Maecenas vulputate tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet felis id tristique vulputate. Nullam laoreet enim id orci dignissim, quis viverra ipsum vestibulum. Nam sed enim libero. Phasellus ac venenatis lorem, ut varius dui."
    },
    shipping: {
      details: {
        dimensions: {
          length: Math.ceil(Math.random() * 30),
          width: Math.ceil(Math.random() * 30),
          height: Math.ceil(Math.random() * 30)
        },
        weight: Math.ceil(Math.random() * 30)
      }
    }
  }
  return item;
}

const data = (() => {
  const result = demo.slice();
  const names = ['Oathkeeper Sword','Limited Edition Dragon Egg Box','Stark Infantry Shield','Sigil Tankard','House Targaryen Desktop Stationery Set','Door Stop','Needle','House Targaryen Goblet','Night King Mask','Dragonstone Stein','Sigil Tapestry Pillow','Mother of Dragons Sock Set','Sculpted Green Dragon Egg Candle','Dragonclaw Goblet','House Stark Wall Plaque','Targaryen Sigil Ring','Targaryen 14KT Rose Gold Over Earrings','The Hound Helmet','Hand of the King Lapel Pin','Drogon Dragon Sculpt','House Targaryen Tankard','House Targaryen Signet Ring','Sterling Silver Targaryen Pendant','Map of Westeros Tapestry Blanket','Dragonstone Gate Bookends','Generic Undead Bear','Super Reliable Bottle Opener, Jaime Lanister','Ultra Tacky Game of Thrones Shirt','Mountain Armor','Leather Boots','Iron Boots','Gold Boots','Elegant Cloak',"Night's Watch Cloak",'Wolf Pelt Coat','Homespun Skirt','White Undershirt','Pointed Helmet','Dothraki Pants','Gold Crown','Authentic Worn Sandals','Potato Sack','Lannister Plate','Archmaester Cloak','Cloak of Shadows','Festival Mask','Chainmail Pants','Dragon Bone Belt','Summer Dress','Dragon','Hodor','Horse','Mammoth','Elephant',"Stallion's Heart",'Bowl of Brown','Frey Pie','Wine','Eunuch Bag','Iron Coin of the Faceless Man',"Melisandre's Ruby Choker",'Iron Throne','Horn of Winter','Dragon Glass Dagger','Lightbringer','Seastone Chair',"King Joffery's Crown",'Moon Door','Longclaw','Arakh','Blackfyre','Dark Sister','Forrester greatsword','Hearteater','Ice',"Joffrey's crossbow",'Poison','Scorpions','Two Brothers','Valyrian steel dagger','White Walker ice blades','Brightroar','Dawn','Heartsbane',"Widow's Wail",'Wildfire','God Save The Queen','A Peasant Arguing','Cows in a Pasture','Hanging in the Gallows','The Gambler','The Battle','Outhouse','The Jungle','Cathedral','Village on Fire','Monk','Knight in Shining Armor','The Farm','The Castle','Winter is Coming','Chick Hanging with Dragon','The Throne','One Versus Many','Angry Sea at Night',"Dragon's Breach"];

  for (let i = 0; i < 100; i++) {
    result.push(randomDetails(i + 7, names[i]))
  }
  return result;
})();

module.exports = {
  data
}