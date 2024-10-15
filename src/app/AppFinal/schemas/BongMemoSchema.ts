interface BongMemoType {
    title: string;
    name: string;
    age: string;
    date: Date;
    content: string;
}

/**
 * # BongMemoSchema
 */
export class BongMemoSchema {
    constructor(
        public id: string, 
        public title: string, 
        public age: string, 
        public date: Date,
        public content: string,
    ) {}

    // Plain Object에서 BongMemoSchema 인스턴스를 생성하는 메소드
    static fromPlainObject(plainObject: BongMemoType): BongMemoSchema {
        return new BongMemoSchema(
            plainObject.title,
            plainObject.name,
            plainObject.age,
            plainObject.date,
            plainObject.content,
        );
    }
}
