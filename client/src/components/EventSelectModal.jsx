import { Button } from './ui/button';
import { Folder, ReceiptText, X } from 'lucide-react';

// TODO: Determine props to take in
const EventSelectModal = ({
  show,
  onExit
}) => {
  if (!show) {
    return null;
  }
  
  return (
    <div 
      className="fixed inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background shadow-[0_0_0_100vmax_rgb(0_0_0_/0.5)] p-8 w-fit h-fit flex flex-col justify-center"
    >
      <Button 
        className="absolute top-2 right-2 px-2 rounded-full"
        variant="ghost" 
        onClick={onExit}
      >
        <X />
      </Button>

      <p className="mb-3 font-bold text-xl">Event Name</p>

      <div className="mb-6">
        <p>Created On: X</p>
        <p>Last Modified On: Y</p>
      </div>

      <div className="grid grid-flow-col auto-cols-fr gap-4">
        {/* TODO: Make link dynamic */}
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
      </div>
    </div>
  )
}

export default EventSelectModal
