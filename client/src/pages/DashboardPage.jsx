import React from 'react'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  } from "@/components/ui/pagination"
import { Input } from '@/components/ui/input'
import Profile from '@/components/profile'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CirclePlus, Search, SlidersHorizontal } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="p-3 flex items-center justify-between bg-foreground border-b-2">
        <Logo lightText={true} />
        <Profile />
      </header>

      <main className="px-6 py-4 flex flex-col gap-4 text-left">
        <div>
          <h2 className="font-bold text-2xl">Events Dashboard</h2>
          <p>Here&apos;s a list of all the events.</p>
        </div>

        <div className="flex justify-between">
          <Button>
            <CirclePlus className="mr-2 w-4" /> Create Event
          </Button>

          <div className="flex gap-4">
            <div className="flex">
              <Input placeholder="Search Events" />
              <Button variant="outline">
                <Search className="w-5" />
              </Button>
            </div>

            <Button>
              <SlidersHorizontal className="mr-2 w-4" /> Filter
            </Button>
          </div>
        </div>

        <div>
          <Table className="border-2">
            <TableCaption>
              <Pagination className="mt-2 flex items-center">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
