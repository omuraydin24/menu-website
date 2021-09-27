const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// const filterButton = document.querySelector(".filter-button")
// addEventListener.filterButton("click", () => {
//   data.category === "Korea" && 
// })

var tabs = document.querySelectorAll(".tabs ul li")
var koreans = document.querySelectorAll(".korean")
var japans = document.querySelectorAll(".japan")
var chinas = document.querySelectorAll(".china")
var all = document.querySelectorAll(".grid-item")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")

    var tabval = tab.getAttribute("data-tabs")
    all.forEach((item) => {
      item.style.display = "none";
    })

    if (tabval == "korean") {
      koreans.forEach((korea) => {
        korea.style.display = "flex";
      })
    } else if (tabval == "japan") {
      japans.forEach((japan) => {
        japan.style.display = "flex";
      })
    } else if (tabval = "china") {
      chinas.forEach((china) => {
        china.style.display = "flex";
      })
    } else {
      all.forEach((item) => {
        item.style.display = "flex";
      })
    }
  })
})

const data = menu;
console.log(data.length)
const gridContainer = document.querySelector(".grid-container");

const getCardsListed = (data) => {
  let numberOfCards = 0
  for (i = 0; i < data.length; i++) {

    const element = data[i];
    console.log(element);
    const gridItem = document.createElement("div");
    const gridImage = document.createElement("div");
    const gridImageSource = document.createElement("img");
    const responseBody = document.createElement("div");
    const gridTitle = document.createElement("h3");
    const gridDescription = document.createElement("p");
    const gridPrice = document.createElement("p");
    gridContainer.className = "grid-container";
    gridItem.className = "grid-item";
    gridImage.className = "grid-img";
    gridTitle.className = "grid-title";
    gridDescription.className = "grid-description";
    responseBody.className = "grid-response";
    gridImageSource.src = element.img;
    gridTitle.innerHTML = element.title;
    gridDescription.innerHTML = element.desc;
    gridPrice.innerHTML = element.price;

    gridImage.appendChild(gridImageSource);
    gridItem.appendChild(gridImage);
    responseBody.appendChild(gridTitle);
    gridTitle.appendChild(gridPrice);
    responseBody.appendChild(gridDescription);
    gridItem.appendChild(responseBody);
    gridContainer.appendChild(gridItem);
    numberOfCards++;
    if (numberOfCards === 10) {
      break;
    }
  }
}
getCardsListed(data);

const KoreaMenu = data.filter(item => item.category === 'Korea');
console.log(KoreaMenu)



// const filterOption = document.querySelector('.filter-todo')
// filterOption.addEventListener('click', filterButton);

// function filterButton(e) {
//   const cate = gridItem.childNodes;
//   cate.forEach(function (asd) {
//     switch (e.data.category) {
//       case "all":
//         asd.style.display = "flex";
//         break;
//       case "Korea":
//         if (data.category == "Korea") {
//           asd.style.display = "flex";
//         } else {
//           asd.style.display = "none";
//         }
//         break;
//       case "Japan":
//         if (data.category == "Japan") {
//           asd.style.display = "flex";
//         } else {
//           asd.style.display = "none";
//         }
//         break;
//       case "China":
//         if (data.category == "China") {
//           asd.style.display = "flex";
//         } else {
//           asd.style.display = "none";
//         }
//         break;
//     }
//   });
// }

