'use server'

import { faqType } from "@/types/faqType";

export async function getFAQ() {
    const faqItems = await fetch(`${process.env.API_FAQ_URL}`).then(res => res.json());
    return faqItems.docs.sort((a: faqType, b: faqType) => a.order - b.order) as faqType[];
}