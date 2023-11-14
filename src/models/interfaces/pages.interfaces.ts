import type {Request} from "./create-reducer.interfaces";
import type { Status } from "./statuses.interfaces";

export interface CreatePageData {
    name: string;
}

export interface EditPageData extends CreatePageData {
    id: number;
}

export interface CreatePageRequest extends Request {
    data: CreatePageData;
}

export interface EditPageRequest extends Request {
    data: EditPageData;
}

export interface ChangeStatusPageRequest extends Request {
    id: number;
}

export interface Page {
    id: number;
    name: string;
    slug: string;
    status: Status;
}

export type PageState = {
    pages: Page[];
}