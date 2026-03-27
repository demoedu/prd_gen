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

export function SectionUsers() {
  const { control } = useFormContext<PrdFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="users.userCount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>사용자 수</FormLabel>
            <FormControl>
              <Input placeholder="예: 5명 (영업팀 전원)" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="users.itLevel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>IT 역량 수준</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 링크 클릭해서 폼 입력하는 수준, 엑셀 기본 수식 가능"
                rows={2}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="users.devices"
        render={({ field }) => (
          <FormItem>
            <FormLabel>사용 기기</FormLabel>
            <FormControl>
              <Input
                placeholder="예: 사내 Windows PC, Chrome 브라우저"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
