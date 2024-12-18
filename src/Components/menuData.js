const menuData = {
    lavaash: [
      {
        id: 1,
        title: "Classic Lavaash",
        price: 4.99,
        description:
          "Soft lavaash filled with tender chicken and fresh vegetables.",
        image: "https://www.rbc.ua/static/img/s/i/side_view_chicken_roll_grilled_chicken_lettuce_cucumber_tomato_mayo_pita_1200x675.jpg", // Замените на действительный URL
      },
      {
        id: 2,
        title: "Spicy Lavaash",
        price: 5.49,
        description: "A fiery lavaash with spicy sauce and grilled chicken.",
        image: "https://storage.yandexcloud.net/sushi-market/products/product_727/63ca3872703f7-800x800.jpg", // Замените на действительный URL
      },
      {
        id: 3,
        title: "Cheese Lavaash",
        price: 5.99,
        description: "Lavaash stuffed with melted cheese and fresh herbs.",
        image: "data:image/jpeg;base64,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", // Замените на действительный URL
      },
      {
        id: 4,
        title: "Vegetarian Lavaash",
        price: 4.49,
        description: "Healthy lavaash with fresh vegetables and hummus.",
        image: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/09/mediterranean-lavash-wraps-sq-053.jpg", // Замените на действительный URL
      },
    ],
    burger: [
      {
        id: 5,
        title: "Cheeseburger",
        price: 3.99,
        description: "Juicy beef patty with melted cheese on a sesame bun.",
        image: "https://rhubarbandcod.com/wp-content/uploads/2022/06/The-Classic-Cheeseburger-1.jpg", // Замените на действительный URL
      },
      {
        id: 6,
        title: "Double Burger",
        price: 5.99,
        description: "Two beef patties, double the flavor!",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall-FS-38.webp", // Замените на действительный URL
      },
      {
        id: 7,
        title: "Chicken Burger",
        price: 4.99,
        description: "Crispy chicken fillet with lettuce and mayo.",
        image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg", // Замените на действительный URL
      },
      {
        id: 8,
        title: "Veggie Burger",
        price: 4.49,
        description: "Grilled veggie patty with fresh vegetables.",
        image: "https://healthfulblondie.com/wp-content/uploads/2021/06/best-no-bean-veggie-burgers-TN.jpg", // Замените на действительный URL
      },
    ],
    pizza: [
      {
        id: 9,
        title: "Margherita",
        price: 6.99,
        description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
        image: "https://lh3.googleusercontent.com/-F7-f2RyixFJ_0-MIGehlz7lp08CkWuy7Y64qDx8zcSrAyHA_uWVnJx1XOVAHg_qoFD7fW34aWScKlOz7tlHx8LeBxDoB64vaZ6LCKKMAPPnr8-QTpPpQVVK-xGPWFZomSVkVZXW", // Замените на действительный URL
      },
      {
        id: 10,
        title: "Pepperoni",
        price: 7.49,
        description: "Loaded with spicy pepperoni and cheese.",
        image: "https://s1.eda.ru/StaticContent/Photos/Upscaled/120131085053/171027192707/p_O.jpg", // Замените на действительный URL
      },
      {
        id: 11,
        title: "Four Cheese",
        price: 8.99,
        description: "Rich pizza with a mix of four delicious cheeses.",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/123CBE4C-517C-4401-A668-0D0884F45883/Derivates/936C2A3A-0418-4A9A-B116-E338CABE0650.jpg", // Замените на действительный URL
      },
      {
        id: 12,
        title: "Veggie Pizza",
        price: 6.49,
        description: "Loaded with fresh vegetables and mozzarella.",
        image: "https://media.istockphoto.com/id/842082336/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-veggie-%D1%81-%D0%B3%D1%80%D0%B8%D0%B1%D0%B0%D0%BC%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D1%86.jpg?s=612x612&w=0&k=20&c=uRRXFpeD2XKhBA0ZsOFylqyEG_VXfIFcB8wQK6pR0fA=", // Замените на действительный URL
      },
    ],
    drinks: [
      {
        id: 13,
        title: "Coca-Cola",
        price: 1.99,
        description: "Chilled and refreshing soda.",
        image: "https://makkam.ru/d/kola_500ml_stakan.png", // Замените на действительный URL
      },
      {
        id: 14,
        title: "Orange Juice",
        price: 2.49,
        description: "Freshly squeezed orange juice.",
        image: "https://5.imimg.com/data5/CT/EV/MY-60228272/orange-juice.jpg", // Замените на действительный URL
      },
      {
        id: 15,
        title: "Milkshake",
        price: 3.49,
        description: "Creamy milkshake available in chocolate and vanilla.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/220px-Strawberry_milk_shake_%28cropped%29.jpg", // Замените на действительный URL
      },
      {
        id: 16,
        title: "Water",
        price: 0.99,
        description: "Pure and refreshing mineral water.",
        image: "https://www.eatright.org/-/media/images/eatright-articles/eatright-article-1200x675/what-makes-a-healthful-drink-of-water_1200x675.jpg?as=0&w=967&rev=2c24c6a7b16e471081d6de8b21657fb7&hash=80C212345F4602E3682D1CA6BF467544", // Замените на действительный URL
      },
    ],
  };
  
  export default menuData;
  