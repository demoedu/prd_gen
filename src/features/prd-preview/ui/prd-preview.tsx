"use client";

import { LuClipboardCopy, LuDownload } from "react-icons/lu";
import { toast } from "sonner";
import { Button, ScrollArea, Separator } from "@/shared/ui";
import { copyToClipboard, downloadMarkdownFile } from "@/shared/lib";

interface PrdPreviewProps {
  markdown: string;
  taskName?: string;
}

export function PrdPreview({ markdown, taskName }: PrdPreviewProps) {
  const handleCopy = async () => {
    const success = await copyToClipboard(markdown);
    if (success) {
      toast.success("마크다운이 클립보드에 복사되었습니다");
    } else {
      toast.error("복사에 실패했습니다");
    }
  };

  const handleDownload = () => {
    const date = new Date().toISOString().slice(0, 10);
    const name = taskName?.trim() || "prd";
    const filename = `prd-${name}-${date}.md`;
    downloadMarkdownFile(markdown, filename);
    toast.success(`${filename} 다운로드 완료`);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          미리보기
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <LuClipboardCopy className="mr-1.5 size-3.5" />
            복사
          </Button>
          <Button variant="default" size="sm" onClick={handleDownload}>
            <LuDownload className="mr-1.5 size-3.5" />
            저장
          </Button>
        </div>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <pre className="whitespace-pre-wrap p-6 font-mono text-sm leading-relaxed">
          {markdown}
        </pre>
      </ScrollArea>
    </div>
  );
}
