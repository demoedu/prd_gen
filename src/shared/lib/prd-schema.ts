import { z } from "zod";

export const prdSchema = z.object({
  // 1. 업무 개요
  overview: z.object({
    taskName: z.string(),
    owner: z.string(),
    department: z.string(),
    frequency: z.enum(["매일", "주간", "월간", "수시"]),
    currentDuration: z.string(),
  }),

  // 2. 현재 프로세스 (As-Is)
  asIs: z.object({
    workflowSteps: z.array(z.string()),
    tools: z.string(),
    bottlenecks: z.string(),
  }),

  // 3. 원하는 결과 (To-Be)
  toBe: z.object({
    coreRequirements: z.array(z.string()),
    scenario: z.string(),
    expectedDuration: z.string(),
  }),

  // 4. 데이터
  data: z.object({
    inputFormat: z.string(),
    inputSample: z.string(),
    outputFormat: z.string(),
    outputSample: z.string(),
    dataVolume: z.string(),
  }),

  // 5. 사용자
  users: z.object({
    userCount: z.string(),
    itLevel: z.string(),
    devices: z.string(),
  }),

  // 6. 환경 제약
  constraints: z.object({
    network: z.string(),
    availableServices: z.string(),
    securityRequirements: z.string(),
  }),

  // 7. 성공 기준
  success: z.object({
    timeBefore: z.string(),
    timeAfter: z.string(),
    verificationMethod: z.string(),
  }),
});

export type PrdFormData = z.infer<typeof prdSchema>;

export const prdDefaultValues: PrdFormData = {
  overview: {
    taskName: "",
    owner: "",
    department: "",
    frequency: "주간",
    currentDuration: "",
  },
  asIs: {
    workflowSteps: [""],
    tools: "",
    bottlenecks: "",
  },
  toBe: {
    coreRequirements: [""],
    scenario: "",
    expectedDuration: "",
  },
  data: {
    inputFormat: "",
    inputSample: "",
    outputFormat: "",
    outputSample: "",
    dataVolume: "",
  },
  users: {
    userCount: "",
    itLevel: "",
    devices: "",
  },
  constraints: {
    network: "",
    availableServices: "",
    securityRequirements: "",
  },
  success: {
    timeBefore: "",
    timeAfter: "",
    verificationMethod: "",
  },
};
