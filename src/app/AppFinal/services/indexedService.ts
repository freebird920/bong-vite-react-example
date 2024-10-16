import {  BongMemoSchema } from "../schemas/BongMemoSchema";

export class IndexedService {
  // private static instance: IndexedService;
  private _db: IDBDatabase | null = null;

  constructor() {} // 외부에서 인스턴스 생성을 막기 위해 private로 설정
  private _isInit: boolean  = false;
  public get isInit(): boolean {
    return this._isInit;
  }
  // 싱글톤 인스턴스 반환
  // public static getInstance(): IndexedService {
  //   if (!IndexedService.instance) {
  //     IndexedService.instance = new IndexedService();
  //   }
  //   return IndexedService.instance;
  // }
  // IndexedDB를 초기화하는 메서드
  public async initDB(dbName:string, storeName:string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      };

      request.onsuccess = (event: Event) => {
        this._isInit = true;
        this._db = (event.target as IDBOpenDBRequest).result;
        resolve(this._db);
      };

      request.onerror = (event: Event) => {
        reject(
          `IndexedDB 오류: ${(event.target as IDBOpenDBRequest).error?.message}`
        );
      };
    });
  }
  public addBongMemo(storeName: string, data: BongMemoSchema) {
    const result = new Promise((resolve, reject) => {
      if (!this._db) {
        reject("noDb");
        return;
      }
      const transaction = this._db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.add(data.toPlainObject());
      request.onsuccess = () => resolve("데이터가 성공적으로 추가되었습니다.");
      request.onerror = (event: Event) =>
        reject(
          `데이터 추가 오류: ${(event.target as IDBRequest).error?.message}`
        );
    });
    return result;
  }
  // 데이터 추가 메서드
  public addData(storeName: string, data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject("데이터베이스가 초기화되지 않았습니다.");
        return;
      }

      const transaction = this._db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.add(data);

      request.onsuccess = () => resolve("데이터가 성공적으로 추가되었습니다.");
      request.onerror = (event: Event) =>
        reject(
          `데이터 추가 오류: ${(event.target as IDBRequest).error?.message}`
        );
    });
  }

  public  clearStore(dbName:string, storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
  
      request.onsuccess = (event: Event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const clearRequest = store.clear();
  
        clearRequest.onsuccess = () => {
          console.log(`"${storeName}"의 모든 데이터가 삭제되었습니다.`);
          resolve();
        };
  
        clearRequest.onerror = (event: Event) => {
          reject(`데이터 삭제 오류: ${(event.target as IDBRequest).error?.message}`);
        };
      };
  
      request.onerror = (event: Event) => {
        reject(`IndexedDB 오류: ${(event.target as IDBOpenDBRequest).error?.message}`);
      };
    });
  }
  
  // 전체 데이터를 가져오는 메서드
  public getAllData(storeName: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject("데이터베이스가 초기화되지 않았습니다.");
        return;
      }

      const transaction = this._db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = (event: Event) => {
        const result = (event.target as IDBRequest).result;
        resolve(result);
      };
      request.onerror = (event: Event) =>
        reject(
          `데이터 조회 오류: ${(event.target as IDBRequest).error?.message}`
        );
    });
  }
  // 데이터 가져오기 메서드
  public getData(storeName: string, id: number | string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject("데이터베이스가 초기화되지 않았습니다.");
        return;
      }

      const transaction = this._db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(id);

      request.onsuccess = (event: Event) =>
        resolve((event.target as IDBRequest).result);
      request.onerror = (event: Event) =>
        reject(
          `데이터 조회 오류: ${(event.target as IDBRequest).error?.message}`
        );
    });
  }

  // 데이터 삭제 메서드
  public deleteData(storeName: string, id: number | string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject("데이터베이스가 초기화되지 않았습니다.");
        return;
      }

      const transaction = this._db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve("데이터가 성공적으로 삭제되었습니다.");
      request.onerror = (event: Event) =>
        reject(
          `데이터 삭제 오류: ${(event.target as IDBRequest).error?.message}`
        );
    });
  }
}
