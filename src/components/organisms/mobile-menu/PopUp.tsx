import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars4 } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function PopUp() {
  return (
    <div className=" lg:hidden">
      <Sheet>
        <SheetTrigger>
          <HiBars4 className=" text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className=" flex flex-col gap-3 justify-start items-start font-semibold">
            <SheetTitle className=" text-sky-500 w-full text-center mb-10 text-xl">
              Albania Gateway
            </SheetTitle>
            <SheetDescription className=" text-base text-slate-950">
              <Link href="/visit-albania/why-visit-albania">
                <SheetTrigger>Why Albania?</SheetTrigger>
              </Link>
            </SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className=" flex justify-center gap-3">
                  Visit Albania
                </AccordionTrigger>
                <AccordionContent>
                  <Link href="/visit-albania/visit-albania-by-air">
                    <SheetTrigger>by air</SheetTrigger>
                  </Link>
                </AccordionContent>
                <AccordionContent>
                  <Link href="/visit-albania/visit-albania-by-sea">
                    <SheetTrigger>by sea</SheetTrigger>
                  </Link>
                </AccordionContent>
                <AccordionContent>
                  <Link href="/visit-albania/visit-albania-by-land">
                    <SheetTrigger>by land</SheetTrigger>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetDescription className=" text-base text-slate-950">
              <Link href="/visit-albania/why-visit-albania">
                <SheetTrigger>Blog</SheetTrigger>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
