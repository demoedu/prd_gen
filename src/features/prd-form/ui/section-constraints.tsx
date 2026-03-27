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

export function SectionConstraints() {
  const { control } = useFormContext<PrdFormData>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="constraints.network"
        render={({ field }) => (
          <FormItem>
            <FormLabel>네트워크</FormLabel>
            <FormControl>
              <Input
                placeholder="예: 사내망만 가능 / 외부 접속 가능"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="constraints.availableServices"
        render={({ field }) => (
          <FormItem>
            <FormLabel>사용 가능 서비스</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: Google Workspace, Slack, Notion 사용 가능. AWS 불가."
                rows={2}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="constraints.securityRequirements"
        render={({ field }) => (
          <FormItem>
            <FormLabel>보안 요구사항</FormLabel>
            <FormControl>
              <Textarea
                placeholder="예: 개인정보 포함 없음 / 고객 데이터 포함, 외부 전송 불가"
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
