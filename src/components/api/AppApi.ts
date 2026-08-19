import type {
  IApi,
  IProductsResponse,
  IOrder,
  IOrderResult,
} from "../../types/index";

export class AppApi {
  private api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>("/product/");
  }

  orderProducts(order: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>("/order/", order);
  }
}
