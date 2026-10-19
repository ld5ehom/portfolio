# Next.js 와 Vercel

이 저장소 루트에 Next.js 가 설치되어 있다. Vercel 프로젝트는 아직 연결하지 않았다. 연결은 GitHub `origin` 을 Vercel 에 import 하는 순서로 한다.

---

## 설치

| 항목 | 값 |
| --- | --- |
| 앱 위치 | 저장소 루트 (`app/`, `package.json`) |
| Next.js | 16.4.2 |
| React | 19.3.0 |
| React DOM | 19.3.0 |
| Tailwind | 4 |
| 라우터 | App Router |
| 패키지 이름 | `portfolio` |
| Git remote | `https://github.com/ld5ehom/portfolio.git` |

데이터베이스는 쓰지 않는다. Supabase 환경 변수는 없다. About Me 는 `/`, 프로젝트는 `/projects/[id]` 다. 왼쪽 사이드바는 `next/link` 로 그 경로를 연다. 오른쪽 위 아이콘이 LinkedIn 과 GitHub 다. 예전 정적 사이트는 `legacy/` 에 있다.

로컬에서 `npm run build` 가 경로 `/`, `/projects`, `/projects/[id]`, `/_not-found` 를 만든다.

---

## 로컬 명령

```bash
npm run dev
npm run build
npm run start
```

`npm run dev` 는 개발 서버다. `npm run build` 다음에 `npm run start` 는 그 빌드를 띄운다. Vercel 이 돌리는 명령은 `npm run build` 이다.

---

## Vercel 에 붙일 때

아직 import 하지 않았다. 붙일 때 대시보드에서 이 저장소를 고르고 아래만 맞춘다.

| 설정 | 값 |
| --- | --- |
| Framework | Next.js |
| Root Directory | 저장소 루트 (비움) |
| Build Command | `npm run build` |
| Install Command | `npm install` |
| Output | Next 기본. `output: export` 를 켜지 않는다 |

환경 변수는 스타터에 필요 없다. 나중에 비밀이 생기면 Vercel 프로젝트 설정에만 넣고, `.env*` 는 커밋하지 않는다. `.vercel` 도 커밋하지 않는다. 둘 다 `.gitignore` 에 있다.

연결 뒤에는 `main` 에 올리는 푸시가 Production 배포가 된다. 그 전까지 이 문서는 계획만 적는다.

배포 대상은 이 Next 앱이다. `legacy/` 의 GitHub Pages 사이트를 다시 올리지 않는다. Vercel 이 받는 산출물은 `npm run build` 의 Next 서버 빌드다.
