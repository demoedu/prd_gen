"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "sonner";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeToggle,
} from "@/shared/ui";
import { useIsMobile } from "@/shared/hooks";
import {
  generatePrdMarkdown,
  prdDefaultValues,
  prdSchema,
  type PrdFormData,
} from "@/shared/lib";
import { PrdForm } from "@/features/prd-form";
import { PrdPreview } from "@/features/prd-preview";

export function PrdPage() {
  const isMobile = useIsMobile();
  const form = useForm<PrdFormData>({
    resolver: zodResolver(prdSchema),
    defaultValues: prdDefaultValues,
    mode: "onChange",
  });

  const values = form.watch();
  const markdown = generatePrdMarkdown(values);

  return (
    <div className="flex h-dvh flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-6 py-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight">PRD Generator</h1>
          <p className="text-muted-foreground text-sm">
            바이브 코딩을 위한 업무 요구사항 정의서
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {isMobile ? (
          <Tabs defaultValue="form" className="flex h-full flex-col">
            <TabsList className="mx-4 mt-2 grid w-auto grid-cols-2">
              <TabsTrigger value="form">작성</TabsTrigger>
              <TabsTrigger value="preview">미리보기</TabsTrigger>
            </TabsList>
            <TabsContent value="form" className="flex-1 overflow-hidden">
              <PrdForm form={form} />
            </TabsContent>
            <TabsContent value="preview" className="flex-1 overflow-hidden">
              <PrdPreview
                markdown={markdown}
                taskName={values.overview.taskName}
              />
            </TabsContent>
          </Tabs>
        ) : (
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={60} minSize={35}>
              <PrdForm form={form} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40} minSize={25}>
              <PrdPreview
                markdown={markdown}
                taskName={values.overview.taskName}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      <Toaster />
    </div>
  );
}
