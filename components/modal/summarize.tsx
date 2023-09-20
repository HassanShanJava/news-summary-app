import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchNewsSummarApi } from "@/utils/helper";

const SummaryModal =  (props : any) => {
  console.log({props})
  const [summary, setSummary]=useState<string>("")

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPENAI_API),
  //   },
  //   body: JSON.stringify({
  //     prompt: `You are a marketing expert, and a customer approaches you to write a very short and exciting marketing copy for them. This is the topic they would like a marketing copy for: "${props?.title}, ${props?.desc}." This is the short marketing copy you came up with:`,
  //     temperature: 0.1,
  //     max_tokens: 50,
  //     top_p: 1,
  //     frequency_penalty: 0,
  //     presence_penalty: 0.5,
  //     stop: ['"""'],
  //   }),
  // };

  // useEffect(()=>{

  //   (async()=>{
  //     const res =await fetchNewsSummarApi(requestOptions)
  //     console.log({res})
  //     setSummary(res)
  //   })();
  // },[])

  // const res = await fetchNewsSummarApi(requestOptions);

  return (
    <div>
      <Dialog open={props?.isOpen} onOpenChange={(e) => props?.setIsOpen(e)}>
        <DialogContent className="sm:max-w-[450px]  max-h-[calc(100%-10px)] overflow-y-scroll scroll-hide">
          <DialogHeader>
            <DialogTitle>Summary</DialogTitle>
            <DialogDescription>
              {/* {summary} */}
              Testing summary modal
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SummaryModal;
