import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from "react";

export function LibraryFiller() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"><b>FROM</b></TableHead>
                    <TableHead>Word</TableHead>
                    <TableHead>Meaning</TableHead>
                    <TableHead className="text-right">Language</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">
                        <a
                        href="http://psd.museum.upenn.edu/nepsd-frame.html"
                        className={"font-medium underline underline-offset-4"}
                    >
                        ePSD</a></TableCell>
                    <TableCell>Zal</TableCell>
                    <TableCell>Light</TableCell>
                    <TableCell className="text-right">Sumerian</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}