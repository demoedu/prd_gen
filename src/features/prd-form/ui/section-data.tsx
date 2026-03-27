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

export function SectionData() {
  const { control } = useFormContext<PrdFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="data.inputFormat"
        render={({ field }) => (
          <FormItem>
            <FormLabel>입력 데이터 형식</FormLabel>
            <FormControl>
              <Input placeholder="예: 엑셀 (.xlsx), CSV" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="data.inputSample"
        render={({ field }) => (
          <FormItem>
            <FormLabel>입력 데이터 샘플</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 이름, 부서, 매출액, 달성률&#10;홍길동, 영업1팀, 5000만원, 120%"
                rows={3}
                className="font-mono text-sm"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="data.outputFormat"
        render={({ field }) => (
          <FormItem>
            <FormLabel>출력 데이터 형식</FormLabel>
            <FormControl>
              <Input placeholder="예: PDF 보고서, 대시보드, 엑셀" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="data.outputSample"
        render={({ field }) => (
          <FormItem>
            <FormLabel>출력 데이터 샘플</FormLabel>
            <FormControl>
              <Textarea
                placeholder="기대하는 출력 결과의 구조나 형태를 설명해주세요"
                rows={3}
                className="font-mono text-sm"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="data.dataVolume"
        render={({ field }) => (
          <FormItem>
            <FormLabel>데이터 양</FormLabel>
            <FormControl>
              <Input placeholder="예: 월 500건, 파일 당 약 2MB" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
