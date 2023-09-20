import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SummaryModal = ( props : any) => {
    console.log({props},"props modal")
  return (
    <div>
      <Dialog open={props?.isOpen} onOpenChange={(e) => props.setIsOpen(e)}>
        <DialogContent className="sm:max-w-[450px]  max-h-[calc(100%-10px)] overflow-y-scroll scroll-hide">
          <DialogHeader>
            <DialogTitle>Summary</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SummaryModal;
