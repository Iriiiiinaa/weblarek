import "./scss/styles.scss";

import { ProductCatalog } from "./components/models/ProductCatalog";
import { Buyer } from "./components/models/Buyer";
import { Basket } from "./components/models/Basket";
import { apiProducts } from "./utils/data";
import { Api } from "./components/base/Api";
import { AppApi } from "./components/api/AppApi";
import { API_URL } from "./utils/constants";

const productsCatalog = new ProductCatalog();
const buyer = new Buyer();
const basket = new Basket();

productsCatalog.setProducts(apiProducts.items);

console.log("Массив товаров из каталога:", productsCatalog.getProducts());

console.log(
  "Товар по id:",
  productsCatalog.getProductById(apiProducts.items[0].id),
);

console.log(
  "Установка выбранного товара:",
  productsCatalog.setSelectedProduct(apiProducts.items[0]),
);

console.log("Выбранный товар:", productsCatalog.getSelectedProduct());

console.log("Корзина до добавления:", basket.getItems());

basket.addItem(apiProducts.items[0]);

console.log("Корзина после добавления:", basket.getItems());

console.log("Количество товаров:", basket.getCount());

console.log("Общая стоимость:", basket.getTotalPrice());

console.log(
  "Есть ли первый товар в корзине:",
  basket.hasItem(apiProducts.items[0].id),
);

basket.removeItem(apiProducts.items[0].id);

console.log("Корзина после удаления:", basket.getItems());

console.log(
  "Есть ли удалённый товар:",
  basket.hasItem(apiProducts.items[0].id),
);

basket.clear();

console.log("Корзина после очистки:", basket.getItems());

console.log("Ошибки до заполнения данных:", buyer.validate());

buyer.setPayment("card");
buyer.setEmail("test@mail.ru");
buyer.setPhone("+79999999999");
buyer.setAddress("Москва");

console.log("Данные покупателя:", buyer.getData());

console.log("Ошибки после заполнения данных:", buyer.validate());

buyer.clear();

console.log("Данные покупателя после очистки:", buyer.getData());

console.log("Ошибки после очистки:", buyer.validate());

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
