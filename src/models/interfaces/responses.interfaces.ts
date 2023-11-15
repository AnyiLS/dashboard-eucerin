interface Message {
    type: 'success' | 'error';
    code: number;
    content: string;
}

interface Transaction {
    status: boolean;
}

export interface Response<T = []> {
    transaction: Transaction;
    message: Message;
    data: T;
}