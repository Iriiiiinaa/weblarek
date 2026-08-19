import { TPayment, IBuyer, IBuyerErrors } from "../../../types/index";

export class Buyer {
  payment: TPayment | null;
  email: string;
  phone: string;
  address: string;

  constructor() {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getData(): IBuyer {
    if (!this.payment) {
      throw new Error("Не выбран способ оплаты");
    }

    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  clear(): void {
    this.payment = null;
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  validate(): IBuyerErrors {
    const errors: IBuyerErrors = {};

    if (!this.payment) {
      errors.payment = "Не выбран вид оплаты";
    }

    if (!this.email) {
      errors.email = "Укажите email";
    }

    if (!this.phone) {
      errors.phone = "Укажите телефон";
    }

    if (!this.address) {
      errors.address = "Укажите адрес";
    }

    return errors;
  }
}
