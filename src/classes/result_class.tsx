interface ResultClassParams<T> {
  data: T | null;
  error?: Error | null;       // Optional, 기본값은 null
  isNullable?: boolean;       // Optional, 기본값은 false
}

class ResultClass<T> {
  private _data: T | null = null;
  private _error: Error | null = null;
  private _isNullable: boolean = false;

  constructor({ data, error = null, isNullable = false }: ResultClassParams<T>) {
    this._data = data;
    this._error = error;
    this._isNullable = isNullable;
  }

  // 에러 여부를 반환
  get isError(): boolean {
    return this._error !== null;
  }

  // 성공 여부를 반환 (에러가 없고 데이터가 존재할 때)
  get isSuccess(): boolean {
    return !this.isError && this._data !== null;
  }

  // 데이터가 null인지 여부를 반환
  get isNull(): boolean {
    return this._data === null;
  }

  get data(): T | null {
    if (this.isError && this._error) {
      throw this._error;  // 에러 발생
    }

    // isNullable이 false인데 데이터가 null이면 에러 던지기
    if (this._data === null && !this._isNullable) {
      throw new Error("Data is null but null is not allowed.");
    }

    return this._data;
  }

  get error(): Error | null {
    return this._error;
  }
}

export default ResultClass;
