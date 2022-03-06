export class Vypozicka{
  id: string;
  knihaID: any;
  UserID: any;

  constructor(vypozicka: Vypozicka) {
    this.id = vypozicka.id;
    this.knihaID = vypozicka.knihaID;
    this.UserID = vypozicka.UserID;
  }
}
