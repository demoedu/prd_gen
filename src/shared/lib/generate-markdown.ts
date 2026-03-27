import type { PrdFormData } from "./prd-schema";

function nonEmpty(value: string | undefined): boolean {
  return !!value?.trim();
}

function formatSteps(steps: string[]): string {
  return steps
    .filter((s) => s.trim())
    .map((s, i) => `${i + 1}. ${s}`)
    .join("\n");
}

function formatList(items: string[]): string {
  return items
    .filter((s) => s.trim())
    .map((s) => `- ${s}`)
    .join("\n");
}

export function generatePrdMarkdown(data: PrdFormData): string {
  const { overview, asIs, toBe, data: dataSection, users, constraints, success } = data;
  const lines: string[] = [];

  // 타이틀
  const title = nonEmpty(overview.taskName) ? overview.taskName : "새 업무";
  lines.push(`# PRD: ${title}`);
  lines.push("");

  // 메타 정보
  const meta: string[] = [];
  if (nonEmpty(overview.owner)) meta.push(`담당자: ${overview.owner}`);
  if (nonEmpty(overview.department)) meta.push(`부서: ${overview.department}`);
  meta.push(`빈도: ${overview.frequency}`);
  if (nonEmpty(overview.currentDuration))
    meta.push(`현재 소요 시간: ${overview.currentDuration}`);
  lines.push(`> ${meta.join(" | ")}`);
  lines.push("");

  // 1. 업무 개요
  lines.push("## 1. 업무 개요");
  lines.push("");
  lines.push(`| 항목 | 내용 |`);
  lines.push(`| --- | --- |`);
  lines.push(`| 업무명 | ${overview.taskName || "-"} |`);
  lines.push(`| 담당자/부서 | ${overview.owner || "-"} / ${overview.department || "-"} |`);
  lines.push(`| 빈도 | ${overview.frequency} |`);
  lines.push(`| 현재 소요 시간 | ${overview.currentDuration || "-"} |`);
  lines.push("");

  // 2. 현재 프로세스 (As-Is)
  lines.push("## 2. 현재 프로세스 (As-Is)");
  lines.push("");
  const steps = formatSteps(asIs.workflowSteps);
  if (steps) {
    lines.push("### 단계별 작업 흐름");
    lines.push(steps);
    lines.push("");
  }
  if (nonEmpty(asIs.tools)) {
    lines.push(`### 사용 중인 도구`);
    lines.push(asIs.tools);
    lines.push("");
  }
  if (nonEmpty(asIs.bottlenecks)) {
    lines.push(`### 병목/반복/실수 발생 지점`);
    lines.push(asIs.bottlenecks);
    lines.push("");
  }

  // 3. 원하는 결과 (To-Be)
  lines.push("## 3. 원하는 결과 (To-Be)");
  lines.push("");
  const reqs = formatList(toBe.coreRequirements);
  if (reqs) {
    lines.push("### 핵심 요구사항");
    lines.push(reqs);
    lines.push("");
  }
  if (nonEmpty(toBe.scenario)) {
    lines.push("### 사용 시나리오");
    lines.push(toBe.scenario);
    lines.push("");
  }
  if (nonEmpty(toBe.expectedDuration)) {
    lines.push(`**기대 소요 시간:** ${toBe.expectedDuration}`);
    lines.push("");
  }

  // 4. 데이터
  lines.push("## 4. 데이터");
  lines.push("");
  if (nonEmpty(dataSection.inputFormat)) {
    lines.push(`### 입력 데이터`);
    lines.push(`**형식:** ${dataSection.inputFormat}`);
    if (nonEmpty(dataSection.inputSample)) {
      lines.push("");
      lines.push("**샘플:**");
      lines.push("```");
      lines.push(dataSection.inputSample);
      lines.push("```");
    }
    lines.push("");
  }
  if (nonEmpty(dataSection.outputFormat)) {
    lines.push(`### 출력 데이터`);
    lines.push(`**형식:** ${dataSection.outputFormat}`);
    if (nonEmpty(dataSection.outputSample)) {
      lines.push("");
      lines.push("**샘플:**");
      lines.push("```");
      lines.push(dataSection.outputSample);
      lines.push("```");
    }
    lines.push("");
  }
  if (nonEmpty(dataSection.dataVolume)) {
    lines.push(`**데이터 양:** ${dataSection.dataVolume}`);
    lines.push("");
  }

  // 5. 사용자
  lines.push("## 5. 사용자");
  lines.push("");
  lines.push(`| 항목 | 내용 |`);
  lines.push(`| --- | --- |`);
  lines.push(`| 사용자 수 | ${users.userCount || "-"} |`);
  lines.push(`| IT 역량 수준 | ${users.itLevel || "-"} |`);
  lines.push(`| 사용 기기 | ${users.devices || "-"} |`);
  lines.push("");

  // 6. 환경 제약
  lines.push("## 6. 환경 제약");
  lines.push("");
  lines.push(`| 항목 | 내용 |`);
  lines.push(`| --- | --- |`);
  lines.push(`| 네트워크 | ${constraints.network || "-"} |`);
  lines.push(`| 사용 가능 서비스 | ${constraints.availableServices || "-"} |`);
  lines.push(`| 보안 요구사항 | ${constraints.securityRequirements || "-"} |`);
  lines.push("");

  // 7. 성공 기준
  lines.push("## 7. 성공 기준");
  lines.push("");
  if (nonEmpty(success.timeBefore) || nonEmpty(success.timeAfter)) {
    lines.push(
      `**시간 절약:** ${success.timeBefore || "?"} → ${success.timeAfter || "?"}`,
    );
    lines.push("");
  }
  if (nonEmpty(success.verificationMethod)) {
    lines.push("### 검증 방법");
    lines.push(success.verificationMethod);
    lines.push("");
  }

  return lines.join("\n");
}
