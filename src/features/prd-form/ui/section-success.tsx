"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea,
} from "@/shared/ui";
import type { PrdFormData } from "@/shared/lib";

export function SectionSuccess() {
  const { control } = useFormContext<PrdFormData>();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="success.timeBefore"
          render={({ field }) => (
            <FormItem>
              <FormLabel>현재 소요 시간 (Before)</FormLabel>
              <FormControl>
                <Input placeholder="예: 2시간" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="success.timeAfter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>목표 소요 시간 (After)</FormLabel>
              <FormControl>
                <Input placeholder="예: 10분" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="success.verificationMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>검증 방법</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 이 샘플 데이터를 넣었을 때 이 결과가 나오면 성공"
                rows={3}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
