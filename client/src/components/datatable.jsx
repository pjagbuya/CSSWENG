import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  PaginationNext,
  PaginationPrevious,
  } from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  flexRender, 
  getCoreRowModel, 
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable 
} from '@tanstack/react-table'

// TODO: Expose events for editing, deleting, and selecting an event

const DataTable = ({
  className,
  columns,
  data,
  eventFilter
}) => {
  if (columns[0].accessorKey !== 'name') {
    throw new Error('The first column of a table must have a field name `name`.');
  }

  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  const currentPageNum = table.getState().pagination.pageIndex + 1

  useEffect(() => {
    table.getColumn("name")?.setFilterValue(eventFilter ?? '')
  }, [table, eventFilter])

  return (
    <div className='flex flex-col'>
      <Table className={className}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="p-0" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}

              {/* Extra to accommodate edit button */}
              <TableHead></TableHead>
            </TableRow>
          ))}
        </TableHeader>
        
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const body = cell.column.id === 'name'
                    ? (
                      <Button variant="ghost">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Button>
                    )
                    : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    );

                  return (
                    <TableCell key={cell.id}>
                      {body}
                    </TableCell>
                  );
                })}

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>...</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              {/* +1 to accommodate edit button header */}
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}    
        </TableBody>
      </Table>

      <div className="self-end mt-2 flex gap-2 items-center">
        <p>Page {currentPageNum} of {table.getPageCount()}</p>

        <PaginationPrevious 
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()} 
        />
        <PaginationNext
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />      
      </div>

    </div>
  )
}

export default DataTable
