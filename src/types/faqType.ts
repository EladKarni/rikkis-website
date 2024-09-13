import { Document } from '@contentful/rich-text-types';

export type faqType = {
    id: string;
    question: string;
    answer: Document;
    order: number;
};