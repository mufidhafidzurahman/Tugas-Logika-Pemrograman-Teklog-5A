# Asset & Content Checklist

Status legend: ✅ Ready · 🟡 Pending (owner input needed) · ⚠️ Conflict (decide before publish)

_Last updated: 2026-10-15 (Phase 0)._

## 1. Identity

| Item | Status | Notes |
|---|---|---|
| Hero photo | ✅ | Selected: campus photo with red UPI blazer (`assets/images/hero-mufid.*`, 4:5 crop, optimized). Owner approved use. Second photo (KLCC) optimized for About/Journey (`about-international.*`). Replaceable from admin in Phase 3. |
| Display name | ✅ | "Mufid Hafidzurahman" |
| Headline ID/EN | ✅ draft | ID: "Analitik rantai pasok dan logistik untuk negara kepulauan." EN: "Supply chain analytics and logistics for an archipelago economy." Owner delegated writing; review tone. |
| Bio ID | ⚠️ | Uses "semester 5". Correct for Oct 2026 (enrolled Sep 2024). |
| Bio EN | ⚠️ | Source text says "4th semester". Must be "5th semester" to match ID bio and current date. Phase 1 uses 5th. |
| Public email | ✅ | `mufid.hafidzurahman@upi.edu` (approved). The Gmail address in the scholarship deck is **not** used. |
| LinkedIn | ✅ | `https://www.linkedin.com/in/mufid-hafidzurahman` (LinkedIn blocks automated reading; content must be supplied by owner). |
| Instagram | ✅ | `https://www.instagram.com/hafidz759/` (share/tracking parameters removed). |
| Phone number | ✅ excluded | Never published. |

## 2. Assets and resources

| Item | Status | Notes |
|---|---|---|
| CV (PDF) | 🟡 | Received. Decide: public Drive link, or upload to Supabase Storage (recommended: Storage, so the link never breaks). |
| Google Drive portfolio folder | ⚠️ | Owner states access is limited to `mufid.hafidzurahman@upi.edu`. A restricted folder is **not** public; visitors would see "request access". Set sharing to "Anyone with the link – Viewer" only for files meant to be public, or do not link it. |
| Book: Logistics For Kiddos | ✅ | Verified on publisher store page: Penerbit Bukunesia, 2025, ISBN 978-634-7323-92-7, four co-authors. |
| HKI (copyright registrations) | 🟡 | Numbers provided: EC002026167721, EC002026187291, EC002025191962. Need for each: title, type, holder/co-creators, registration date. Only one title appears in CV (Modul Marketing & Branding Edu Wisata Pokdarwis Desa Tambakmekar, Subang). |
| Project images, diagrams, evidence | 🟡 | Scholarship deck contains collage photos (book, certificates, Subang community activity, Universiti Malaya trip). Need original files + permission for any photo showing other people. |
| Certificates and proof | 🟡 | Needed for each achievement before it is shown as fact. |

## 3. Content to verify

### Experience (from CV)
| Entry | Status | Notes |
|---|---|---|
| President, ISLI Muda (Aug 2026–present) | ✅ | Confirm exact official title and start date. |
| Laboratory Assistant, Logistics Engineering Lab (Jan 2026–present) | ✅ | |
| Head of Department, HIPMI PT UPI (Jan 2026–present) | ✅ | |
| Staff Commission 4, DPM HMTL UPI (Sep 2025–May 2026) | 🟡 | CV contains a "tambah data" placeholder; one bullet missing. Supply a real bullet or exclude. |
| Moderator, Logistics National Competition (Jul 2025 & Mar 2026) | 🟡 | Confirm the organizer and event names; the CV title merges two events. |
| Staff Sponsorship, SENAVOK 2025 (Nov 2025) | 🟡 | "5+ sponsorship partners": confirm it is your personal result and can be evidenced. |
| Student Agent, Brain Academy Ruangguru (Dec 2023–Jan 2024) | 🟡 | CV contains a "tambah data" placeholder. Supply a real bullet or exclude. |
| SMA Cendekia Muda | excluded | Master prompt says high-school data stays out unless approved. |

### Candidate items from the scholarship deck (Djarum framing and statistics NOT used)
| Item | Status | Notes |
|---|---|---|
| Funding "BEM Berdampak – Kemendiktisaintek" (2025): MSME empowerment in Subang, honey-pineapple downstream innovation | 🟡 | Need your role (lead/member), outputs, and what exactly was funded. |
| International Youth Impact, Chapter 2, Kuala Lumpur (2025), UPI delegate | 🟡 | Need dates and whether the program is fellowship, exchange, or conference. |
| Edulogistics Hub community | 🟡 | Not in CV. Need role and period. |

## 4. Projects

| Project | CV status | Requested status | Resolution |
|---|---|---|---|
| Logistics For Kiddos | Book publication | completed + published | ✅ Supported by publisher page. Your role: co-author (confirm which chapters). |
| Crude Palm Oil movement, East Kalimantan | "Research" | completed + published | ⚠️ No evidence of publication. Held as `in_progress` until you provide a report/journal link. |
| Smart Racking (RFID + IoT) | "Research and draft" | completed + published | ⚠️ CV says draft. Held as `prototype`/`in_progress` pending evidence. |
| Waste cooking oil → biodiesel | "Research and Draft" | completed + published | ⚠️ Same. Held as `in_progress`. |
| Sugarcane as biofuel | "Research and Draft" | completed + published | ⚠️ Same. Held as `in_progress`. |

Rule applied (master prompt §3): no project is shown as `completed` or `published` without evidence. Labeling a draft as published on a public professional profile is a credibility risk if a recruiter checks.

Homepage featured projects (proposal, max 3): Logistics For Kiddos; Crude Palm Oil movement analysis; Smart Racking RFID/IoT. Revisit once evidence exists.

## 5. Infrastructure

| Item | Status |
|---|---|
| GitHub repository | 🟡 |
| Supabase project | 🟡 |
| Environment variables | 🟡 (template: `.env.example`) |
| Admin account (sign-up disabled) | 🟡 |
| Vercel linked | 🟡 |
| Domain / subdomain | 🟡 |
| RLS + storage policy tests | 🟡 (Phase 2) |
| Public URLs checked logged-out | 🟡 (Phase 4) |

## 6. Security note

A login code was pasted into the chat. It was **not** used or stored. Treat it as exposed and change it at the source. Admin credentials are created later directly in Supabase Auth, never in code, chat or the repository.
