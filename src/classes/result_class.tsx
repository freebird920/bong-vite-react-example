class ResultClass<T> {
  data: T;
  error: Error | null;
  loading: boolean;

  constructor(data: T, error: Error | null, loading: boolean) {
    this.data = data;
    this.error = error;
    this.loading = loading;
  }
}
