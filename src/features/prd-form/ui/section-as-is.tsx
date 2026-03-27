"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { LuPlus, LuX } from "react-icons/lu";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea,
} from "@/shared/ui";
import type { PrdFormData } from "@/shared/lib";

export function SectionAsIs() {
  const { control } = useFormContext<PrdFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "asIs.workflowSteps" as never,
  });

  return (
    <div className="space-y-4">
      <div>
        <FormLabel className="mb-2 block">단계별 작업 흐름</FormLabel>
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <span className="text-muted-foreground w-6 shrink-0 text-center text-sm">
                {index + 1}.
              </span>
              <FormField
                control={control}
                name={`asIs.workflowSteps.${index}`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder={`${index + 1}단계`} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 shrink-0"
                  onClick={() => remove(index)}
                >
                  <LuX className="size-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => append("")}
        >
          <LuPlus className="mr-1 size-3" />
          단계 추가
        </Button>
      </div>

      <FormField
        control={control}
        name="asIs.tools"
        render={({ field }) => (
          <FormItem>
            <FormLabel>사용 중인 도구</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 엑셀, 이메일, Google Sheets, 사내 ERP"
                rows={2}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="asIs.bottlenecks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>병목/반복/실수 발생 지점</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 5명의 보고서를 수작업으로 복붙하는 과정에서 누락 발생"
                rows={2}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
