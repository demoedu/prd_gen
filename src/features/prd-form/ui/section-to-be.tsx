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

export function SectionToBe() {
  const { control } = useFormContext<PrdFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "toBe.coreRequirements" as never,
  });

  return (
    <div className="space-y-4">
      <div>
        <FormLabel className="mb-2 block">핵심 요구사항 (최대 3개)</FormLabel>
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <FormField
                control={control}
                name={`toBe.coreRequirements.${index}`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder={`요구사항 ${index + 1}`}
                        {...field}
                      />
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
        {fields.length < 3 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append("")}
          >
            <LuPlus className="mr-1 size-3" />
            요구사항 추가
          </Button>
        )}
      </div>

      <FormField
        control={control}
        name="toBe.scenario"
        render={({ field }) => (
          <FormItem>
            <FormLabel>사용 시나리오</FormLabel>
            <FormControl>
              <Textarea
                placeholder="누가 → 뭘 하면 → 뭐가 나온다&#10;예: 영업팀이 웹 폼에 입력 → 자동 취합 → 보고서 PDF 생성"
                rows={3}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="toBe.expectedDuration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>기대 소요 시간</FormLabel>
            <FormControl>
              <Input placeholder="예: 10분" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
