import "./scss/styles.scss";

import { ProductCatalog } from "./components/base/models/ProductCatalog";
import { Buyer } from "./components/base/models/Buyer";
import { Basket } from "./components/base/models/Basket";
import { apiProducts } from "./utils/data";
import { Api } from "./components/base/Api";
import { AppApi } from "./components/api/AppApi";
import { API_URL } from "./utils/constants";

const productsCatalog = new ProductCatalog();
const buyer = new Buyer();
const basket = new Basket();

productsCatalog.setProducts(apiProducts.items);
console.log("Массив товаров из каталога:", productsCatalog.getProducts());

basket.addItem(apiProducts.items[0]);
console.log("Товары в корзине:", basket.getItems());

buyer.setPayment("card");
buyer.setEmail("test@mail.ru");
buyer.setPhone("+79999999999");
buyer.setAddress("Москва");

console.log("Данные покупателя:", buyer.getData());

const api = new Api(API_URL);
const appApi = new AppApi(api);

appApi
  .getProducts()
  .then((data) => {
    productsCatalog.setProducts(data.items);

    console.log("Каталог товаров с сервера:", productsCatalog.getProducts());
  })
  .catch((error) => {
    console.error("Ошибка загрузки товаров:", error);
  });
