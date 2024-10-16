import { BongMemoObjectType } from "../schemas/BongMemoSchema";
import { IndexedService } from "./indexedService";

export class MemoService {
  private static instance: MemoService;
  private _indexedService: IndexedService = new IndexedService();
  private constructor() {}

  private _isInit: boolean = false;
  public get isInit(): boolean {
    return this._isInit;
  }

  private dbName: string = "bongDb";
  private storeName: string = "bongMemo";

  public static getInstance(): MemoService {
    if (!MemoService.instance) {
      MemoService.instance = new MemoService();
    }
    return MemoService.instance;
  }

  public async initService() {
    if (this._indexedService.isInit == false) {
      await this._indexedService.initDB(this.dbName, this.storeName);
    }
    if (this._indexedService.isInit == true) {
      this._isInit = true;
    } else {
      throw new Error("db init fail");
    }
  }
  public async getAllMemo(): Promise<Array<BongMemoObjectType>> {
    if (this._isInit == false) {
      await this.initService();
    }
    const result = await this._indexedService.getAllData(this.storeName);
    return result;
  }
  
  public async addNewMemo(memo: BongMemoObjectType): Promise<string> {
    if (this._isInit == false) {
      await this.initService();
    }
    const result = await this._indexedService.addData(this.storeName, memo);
    return result;
  }

  public async deleteMemo(uuid:`${string}-${string}-${string}-${string}-${string}`):Promise<string>{
    const result = await this._indexedService.deleteData(this.storeName, uuid);
    return result;
  }
}
