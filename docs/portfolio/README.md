# 포트폴리오 문서

이 폴더가 이 사이트의 문서 정본이다. Cursor 와 Claude 가 자동으로 읽는 룰은 `.claude/rules` 이다. `.cursor/rules` 는 그 접합이다.

ERP 에서 가져온 보드·선적·재고·인쇄 원문은 `docs/erp` 에 있다. 그 폴더는 주입되지 않는다. 나중에 Projects 와 개념 설명을 쓸 때 거기서 꺼낸다.

---

## 이 사이트 문서

| 문서 | 내용 |
| --- | --- |
| `next-vercel.md` | Next.js 설치와 Vercel 연결 계획. 연결은 아직 안 함 |
| `liquid-light.md` | 쓸 라이트 모드. ERP 리퀴드 라이트만 가져옴 |

데이터베이스는 없다.

---

## 메인 룰

`.claude/rules` 만 주입된다. `alwaysApply` 는 채팅 길이 규칙과 무한 루프 금지 둘이다. 나머지는 해당 파일을 고칠 때 붙는다.

| 묶음 | 파일 |
| --- | --- |
| 대화 | `chat-reply-short.mdc` |
| 루프 | `no-infinite-loop-guard.mdc` |
| 문서 | `docs-markdown-no-bold.mdc` · `docs-markdown-section-hr.mdc` · `docs-markdown-terminal-commands.mdc` · `docs-mermaid-required.mdc` |
| 코드 | `comments.mdc` · `code-references.mdc` · `code-readability-checklist.mdc` · `one-concern-per-file.mdc` · `tsx-file-internal-structure.mdc` · `product-source-utf8-encoding.mdc` · `hidden-code-bloat.mdc` · `no-note-placeholder.mdc` |
| 화면 | `dashboard-display-density-media.mdc` · `optimize-review-fhd-qhd-gate.mdc` · `no-browser-reload.mdc` · `no-navigation-toast.mdc` · `shell-first-no-empty-assertion.mdc` |
| 표 | `data-table-blank-cell-no-dash.mdc` · `data-table-header-title-center.mdc` · `data-table-header-filter-title-dblclick.mdc` · `table-column-width-single-rem-map.mdc` |
| 다이얼로그 | `dialog-radix-title-a11y.mdc` · `dialog-scroll-fixed.mdc` · `radix-hydration-dashboard-shell.mdc` |
| 개발 | `dev-fast-refresh-runtime-error-storm.mdc` · `node-no-experimental-webstorage.mdc` · `error-invariant-vs-validation.mdc` |

셸, 열 폭, 무한 루프의 짧은 정본만 여기 있다. 보드별 원문은 `docs/erp/rules` 의 같은 파일 이름이다.

FHD 와 QHD 를 건드리면 `optimize-review-fhd-qhd-gate.mdc` 를 같은 턴에 본다.
