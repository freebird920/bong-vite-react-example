export interface BongMemoObjectType {
    id: `${string}-${string}-${string}-${string}-${string}`;  // 템플릿 리터럴 타입
    title: string;
    date: Date;
    content: string;
}

/**
 * # BongMemoSchema
 */
export class BongMemoSchema {
    constructor(
        public id: `${string}-${string}-${string}-${string}-${string}`,  // 템플릿 리터럴 타입 적용
        public title: string, 
        public date: Date,
        public content: string,
    ) {}

    // Plain Object에서 BongMemoSchema 인스턴스를 생성하는 메소드
    static fromPlainObject(plainObject: BongMemoObjectType): BongMemoSchema {
        return new BongMemoSchema(
            plainObject.id,
            plainObject.title,
            plainObject.date,
            plainObject.content,
        );
    }

    // BongMemoSchema 인스턴스를 Plain Object로 변환하는 메소드
    toPlainObject(): BongMemoObjectType {        
        return {            
            id: this.id,            
            title: this.title,            
            date: this.date,            
            content: this.content        
        };    
    }
}
