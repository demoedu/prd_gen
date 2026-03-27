"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import type { PrdFormData } from "@/shared/lib";

const FREQUENCY_OPTIONS = ["매일", "주간", "월간", "수시"] as const;

export function SectionOverview() {
  const { control } = useFormContext<PrdFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="overview.taskName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>업무명</FormLabel>
            <FormControl>
              <Input placeholder="예: 주간 영업 보고서 취합" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="overview.owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>담당자</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="overview.department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>부서</FormLabel>
              <FormControl>
                <Input placeholder="마케팅팀" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="overview.frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>빈도</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {FREQUENCY_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="overview.currentDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>현재 소요 시간</FormLabel>
              <FormControl>
                <Input placeholder="예: 2시간" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
