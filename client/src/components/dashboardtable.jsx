import { useState } from "react";

import DataTable from "@/components/datatable";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown } from "lucide-react";

// TODO: Put these table objects somewhere else

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}

/**
 * @type {import('@tanstack/react-table').ColumnDef}
 */
const TEMP_COLUMNS = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Event Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return getFormattedDate(new Date(row.getValue("dateCreated")));
    },
  },
  {
    accessorKey: "dateModified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return getFormattedDate(new Date(row.getValue("dateCreated")));
    },
  },
];

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
];

const DashboardTable = ({ className, eventFilter, onEventSelect }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  // TODO: Proper actions

  function handleRowEdit() {
    setShowEditDialog(true);
  }

  function handleRowDelete() {
    setShowDeleteDialog(true);
  }

  return (
    <>
      <DataTable
        className={className}
        columns={TEMP_COLUMNS}
        data={TEMP_DATA}
        eventFilter={eventFilter}
        onRowEdit={handleRowEdit}
        onRowDelete={handleRowDelete}
        onRowSelect={onEventSelect}
      />

      {/* Event Edit Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Event Name"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            {/* TODO: Emit an edit event of sorts */}
            <Button type="submit" onClick={() => setShowEditDialog(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Event Delete Dialog */}
      <AlertDialog open={showDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Event Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </AlertDialogCancel>

            {/* TODO: Emit a deletion event of sorts */}
            <AlertDialogAction onClick={() => setShowDeleteDialog(false)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DashboardTable;
