"use client"

import React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



// FAQ Stuff

const faqData = [
    {
        id: "faq-1",
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee on all purchases.",
    }, {
        id: "faq-2",
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee on all purchases.",
    }, {
        id: "faq-3",
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee on all purchases.",
    }, {
        id: "faq-4",
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee on all purchases.",
    }
    // Add more FAQs here
]

export function Faqs() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqData.map((faqItem) => (
                <AccordionItem key={faqItem.id} value={faqItem.id}>
                    <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                    <AccordionContent>{faqItem.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}