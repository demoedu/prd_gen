"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Form,
  ScrollArea,
} from "@/shared/ui";
import type { PrdFormData } from "@/shared/lib";
import { SectionOverview } from "./section-overview";
import { SectionAsIs } from "./section-as-is";
import { SectionToBe } from "./section-to-be";
import { SectionData } from "./section-data";
import { SectionUsers } from "./section-users";
import { SectionConstraints } from "./section-constraints";
import { SectionSuccess } from "./section-success";

const SECTIONS = [
  { id: "overview", number: "01", title: "업무 개요", Component: SectionOverview },
  { id: "as-is", number: "02", title: "현재 프로세스 (As-Is)", Component: SectionAsIs },
  { id: "to-be", number: "03", title: "원하는 결과 (To-Be)", Component: SectionToBe },
  { id: "data", number: "04", title: "데이터", Component: SectionData },
  { id: "users", number: "05", title: "사용자", Component: SectionUsers },
  { id: "constraints", number: "06", title: "환경 제약", Component: SectionConstraints },
  { id: "success", number: "07", title: "성공 기준", Component: SectionSuccess },
] as const;

interface PrdFormProps {
  form: UseFormReturn<PrdFormData>;
}

export function PrdForm({ form }: PrdFormProps) {
  return (
    <Form {...form}>
      <ScrollArea className="h-full">
        <div className="space-y-1 p-6">
          <Accordion
            type="multiple"
            defaultValue={SECTIONS.map((s) => s.id)}
            className="space-y-3"
          >
            {SECTIONS.map(({ id, number, title, Component }) => (
              <AccordionItem
                key={id}
                value={id}
                className="border-border/50 rounded-lg border px-4"
              >
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="font-mono text-xs tabular-nums"
                    >
                      {number}
                    </Badge>
                    <span className="text-base font-semibold">{title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <Component />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </Form>
  );
}
