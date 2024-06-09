import DataTable from '@/components/datatable';
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge';

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
          Form Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Form Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      let badgeVariant;
      switch (row.getValue('type')) {

        case "Expense":
          badgeVariant = "blue"
          break;
        case "Revenue":
          badgeVariant = "yellow"
          break;
        case "Fund Transfer":
          badgeVariant = "destructive"
          break;
        case "Activity Transfer":
          badgeVariant = "green"
          break;
      }
      return <Badge variant={badgeVariant}>{row.getValue('type')}</Badge>
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
    name: "Form 1",
    type: "Expense",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Form 2",
    type: "Revenue",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Form 3",
    type: "Fund Transfer",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
  {
    name: "Form 4",
    type: "Activity Transfer",
    dateCreated: Date.now(),
    dateModified: Date.now(),
  },
]

const FormsTable = ({
  className,
  eventFilter
}) => {
  return <DataTable
    className={className}
    columns={TEMP_COLUMNS}
    data={TEMP_DATA}
    eventFilter={eventFilter}
  />
};

export default FormsTable
