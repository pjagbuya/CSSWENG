import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Folder, ReceiptText } from 'lucide-react';

const EventSelectModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Event Name</DialogTitle>
        </DialogHeader>

        <div className="py-4">  
          <p>Created On: X</p>
          <p>Last Modified On: Y</p>
        </div>

        <DialogFooter className="grid grid-flow-col auto-cols-fr gap-4">
          {/* TODO: Make links dynamic */}
          <Button asChild>
            <a href="/forms/0">
              <Folder className="mr-2 w-4" /> View Forms
            </a>
          </Button>

          <Button asChild>
            <a href="">
              <ReceiptText className="mr-2 w-4" />View Transactions
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventSelectModal;
