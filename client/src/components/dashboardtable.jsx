import DataTable from '@/components/datatable';
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'

// TODO: Put these table objects somewhere else

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

/**
 * @type {import('@tanstack/react-table').ColumnDef}
 */
const TEMP_COLUMNS = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Event Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'dateCreated',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return getFormattedDate(new Date(row.getValue('dateCreated')));
    }
  },
  {
    accessorKey: 'dateModified',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return getFormattedDate(new Date(row.getValue('dateCreated')));
    }
  }
]

const TEMP_DATA = [
  {
    name: "Event 1",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 2",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 3",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 4",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 5",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 6",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 7",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 8",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 9",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 10",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 11",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Event 12",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
]
        
const DashboardTable = ({
  className,
  eventFilter,
  onEventSelect
}) => {
  return <DataTable 
    className={className}
    columns={TEMP_COLUMNS} 
    data={TEMP_DATA} 
    eventFilter={eventFilter}
    onRowSelect={onEventSelect}
  />
};

export default DashboardTable
