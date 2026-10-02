// @ts-nocheck
/**
 * OneManShow | One Stop Business Shop
 * Your trusted work partners in Pakistan
 */

import React, { useState, useEffect, useRef } from "react";
import * as jsxRuntime from "react/jsx-runtime";
import {
  ArrowLeft as re,
  ArrowRight as C,
  ArrowUpRight as ie,
  Award as ae,
  BookOpenCheck as oe,
  Calendar as se,
  Check as ce,
  ChevronDown as le,
  ChevronLeft as ue,
  ChevronRight as de,
  CheckCircle as w,
  CircleHelp as fe,
  CircleX as pe,
  Clock as me,
  CreditCard as he,
  DollarSign as ge,
  Download as _e,
  ExternalLink as ve,
  FileText as ye,
  GraduationCap as be,
  Globe as xe,
  Handshake as Se,
  LayoutDashboard as Ce,
  Lock as we,
  LogOut as Te,
  Menu as T,
  MessageSquarePlus as E,
  MessageSquare as Ee,
  Paperclip as De,
  Pause as Oe,
  PhoneCall as ke,
  Play as D,
  Plus as O,
  Quote as Ae,
  RefreshCw as je,
  Rocket as Me,
  Search as Ne,
  Send as Pe,
  ShieldCheck as Fe,
  Shield as Ie,
  SlidersHorizontal as Le,
  Sparkles as Re,
  SquareCheckBig as ze,
  Star as Be,
  Trash2 as Ve,
  Upload as He,
  UserCheck as Ue,
  X as We,
  Zap as Ge,
} from "lucide-react";

const k = jsxRuntime;
const x = React;

let Ye = ({ className: e = ``, variant: t = `light`, size: n = `md` }) => {
    let r = t === `dark`;
    return (0, k.jsxs)(`div`, {
      className: `flex items-center gap-2.5 select-none ${e}`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `${{ sm: `w-7 h-7 text-xs`, md: `w-9 h-9 text-sm`, lg: `w-11 h-11 text-base` }[n]} relative rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-700 to-slate-900 flex items-center justify-center text-white font-black shadow-md ring-1 ring-emerald-500/30`,
          children: [
            (0, k.jsxs)(`svg`, {
              viewBox: `0 0 24 24`,
              fill: `none`,
              className: `w-5 h-5 text-white stroke-[2.2]`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: [
                (0, k.jsx)(`path`, { d: `M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z` }),
                (0, k.jsx)(`path`, { d: `M6 21v-2a6 6 0 0 1 12 0v2` }),
                (0, k.jsx)(`path`, { d: `M12 11v5` }),
                (0, k.jsx)(`polygon`, {
                  points: `12,12 13.5,14 12,16 10.5,14`,
                  fill: `currentColor`,
                  opacity: `0.9`,
                }),
              ],
            }),
            (0, k.jsx)(`span`, {
              className: `absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white shadow-xs`,
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `flex flex-col leading-tight`,
          style: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" },
          children: [
            (0, k.jsx)(`div`, {
              className: `flex items-center gap-1.5`,
              children: (0, k.jsxs)(`span`, {
                className: `font-black tracking-tight ${{ sm: `text-base`, md: `text-lg`, lg: `text-2xl` }[n]}`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: r ? `text-white` : `text-slate-950`,
                    children: `One`,
                  }),
                  (0, k.jsx)(`span`, {
                    className: r ? `text-emerald-400` : `text-emerald-500`,
                    children: `Man`,
                  }),
                  (0, k.jsx)(`span`, {
                    className: r ? `text-white` : `text-black`,
                    children: `Show`,
                  }),
                ],
              }),
            }),
            (0, k.jsx)(`span`, {
              className: `font-bold uppercase tracking-wider text-[9px] sm:text-[10px] ${r ? `text-emerald-300` : `text-emerald-700`}`,
              children: `One Stop Business Shop`,
            }),
          ],
        }),
      ],
    });
  },
  Xe = [
    {
      id: `executive-va`,
      title: `Executive Virtual Assistants`,
      subtitle: `High-level administrative partners who manage your calendar, clean your inbox, and organize your business life.`,
      category: `Virtual Assistants`,
      badge: `Most In-Demand`,
      image: `/images/portal_exec_va_1790549674384.jpg`,
      dialogue: {
        clientQuote: `“My calendar currently resembles abstract modern art with 3 double-booked Zooms, and my inbox is an archaeological dig site of 1,400 unread messages!”`,
        assistantQuote: `“A shimmering golden portal ripples open directly into the CEO suite! Our executive assistant calmly syncs all timezones, defuses the double-bookings, and delivers a pristine Zero-Inbox briefing before your morning chai gets cold.”`,
      },
      highlights: [
        `Proactive calendar & conflict-free scheduling across US/UK/EU time zones`,
        `Zero-Inbox email triage & high-priority VIP escalation`,
        `Complex travel bookings, flight itinerary & hotel coordination`,
        `Meeting minutes, board agendas & action item follow-ups`,
      ],
      deliverables: [
        `Calendar management across Google Workspace & Outlook`,
        `Daily email inbox triage and executive drafting`,
        `Meeting prep dossiers and contact background notes`,
        `Client relationship & CRM updating (HubSpot/Salesforce)`,
      ],
      tools: [
        `Google Workspace`,
        `Outlook 365`,
        `Calendly`,
        `Slack`,
        `Notion`,
        `Zoom`,
      ],
      priceEstimate: `Full Shift $1,200/mo · Part-Time & Half-Time Available`,
      hoursSaved: `20+ Hours / Week Saved`,
    },
    {
      id: `sales-lead-generation`,
      title: `Sales & B2B Lead Generation`,
      subtitle: `Relentless sales assistants who research verified decision-makers, craft outreach campaigns, and book qualified meetings on your calendar.`,
      category: `Sales`,
      badge: `High ROI`,
      image: `/images/portal_sales_va_1790549689661.jpg`,
      dialogue: {
        clientQuote: `“Our sales pipeline is currently drier than the Sahara desert, and our reps are spending all day copy-pasting names from LinkedIn instead of closing deals!”`,
        assistantQuote: `“A crackling cyan portal opens straight into the revenue department! Our sales specialist connects verified B2B prospect databases, launches high-converting outreach sequences, and fills the pipeline with 30+ hot discovery meetings.”`,
      },
      highlights: [
        `LinkedIn Sales Navigator verified prospect list building & data enrichment`,
        `Multi-channel cold email sequences & deliverability monitoring`,
        `Inbound lead qualification, CRM pipeline updates, and quick appointment booking`,
        `Objection handling scripts and warm prospect handoffs to your closers`,
      ],
      deliverables: [
        `Verified lead list scraping (Apollo, ZoomInfo, Sales Navigator)`,
        `Cold email personalization and sequence maintenance (Instantly)`,
        `CRM updating and deal stage tracking (HubSpot, Pipedrive)`,
        `Calendar booking management for incoming sales discovery calls`,
      ],
      tools: [
        `Apollo.io`,
        `LinkedIn Sales Navigator`,
        `HubSpot`,
        `Instantly`,
        `Clay`,
      ],
      priceEstimate: `Full Shift $1,500/mo · Part-Time & Half-Time Available`,
      hoursSaved: `20+ Hours / Week Saved`,
    },
    {
      id: `ecommerce-support`,
      title: `E-Commerce Store Management`,
      subtitle: `Energetic store management assistants who handle product listings, delight buyers, resolve tickets quickly, and keep orders moving.`,
      category: `E-Commerce Store Management`,
      badge: `24/7 Coverage`,
      image: `/images/portal_ecom_va_1790549703796.jpg`,
      dialogue: {
        clientQuote: `“Customers are inquiring about tracking numbers while 4 angry returns are piling up, and my Shopify notifications sound like an unending drum solo!”`,
        assistantQuote: `“A swirling emerald-gold portal materializes behind the customer care desk! Our e-commerce specialist responds to all buyer inquiries in under 7 minutes, issues swift replacements, and turns frowning shoppers into loyal 5-star brand champions.”`,
      },
      highlights: [
        `Omnichannel Tier-1 & Tier-2 customer ticket resolution via live chat & email`,
        `Shopify, Amazon & WooCommerce store management, order fulfillment & tracking`,
        `Customer return processing, refund evaluations & supplier coordination`,
        `Product catalog maintenance, pricing updates & inventory alerts`,
      ],
      deliverables: [
        `Fast response SLA (< 10 minutes) for customer chats and emails`,
        `Order dispatching and tracking number coordination`,
        `Returns, exchanges, and warranty claim handling`,
        `Review moderation & 5-star customer feedback follow-up`,
      ],
      tools: [
        `Shopify`,
        `Zendesk`,
        `Gorgias`,
        `Klaviyo`,
        `ShipStation`,
        `Freshdesk`,
      ],
      priceEstimate: `Full Shift $1,200/mo · Part-Time & Half-Time Available`,
      hoursSaved: `25+ Hours / Week Saved`,
    },
    {
      id: `web-app-development`,
      title: `Web and App Development`,
      subtitle: `Full-stack software engineers and technical assistants who squash bugs, build sleek web applications, and keep your tech running.`,
      category: `Web & App Development`,
      badge: `Top Rated`,
      image: `/images/portal_dev_va_1790549716428.jpg`,
      dialogue: {
        clientQuote: `“Our checkout button decided to take an impromptu vacation, error 500 logs are multiplying like rabbits, and our launch deadline is this Friday!”`,
        assistantQuote: `“An electric green cyber-portal bridges the gap directly into the engineering department! Our full-stack developer squashes the rogue bugs, refactors the React components, and deploys a blazing-fast production build 48 hours ahead of schedule.”`,
      },
      highlights: [
        `Full-stack web application development in React, Next.js, Node.js & TypeScript`,
        `Mobile application maintenance & cross-platform updates (Flutter, React Native)`,
        `REST & GraphQL API integration, backend database schemas, and webhooks`,
        `Automated testing, continuous integration QA, and performance speed tuning`,
      ],
      deliverables: [
        `Frontend and backend feature implementation & PR code reviews`,
        `Bug fixes, security patches, and performance optimization`,
        `Mobile store build configuration and staging updates`,
        `Daily standup reporting and clean GitHub branch workflows`,
      ],
      tools: [
        `React`,
        `Next.js`,
        `Node.js`,
        `Flutter`,
        `TypeScript`,
        `PostgreSQL`,
        `GitHub`,
      ],
      priceEstimate: `Full Shift $1,500/mo · Part-Time & Half-Time Available`,
      hoursSaved: `30+ Hours / Week Saved`,
    },
    {
      id: `bookkeeping-accounting`,
      title: `Bookkeeping & Financial Administration`,
      subtitle: `Certified financial virtual assistants who balance your books, chase invoices, and prep your monthly P&L.`,
      category: `Financial Operations`,
      badge: `High Accuracy`,
      image: `/images/portal_fin_va_1790549730183.jpg`,
      dialogue: {
        clientQuote: `“I have a shoe box full of mysterious crumpled receipts, three overdue client invoices, and my accountant sent an email titled ‘Please Explain Immediately’!”`,
        assistantQuote: `“A radiant jade portal unlocks right above the finance department! Our certified bookkeeping specialist categorizes every transaction in QuickBooks, politely collects the overdue invoices, and serves up a squeaky-clean P&L statement.”`,
      },
      highlights: [
        `Daily transaction categorization in QuickBooks Online or Xero`,
        `Accounts payable invoice verification & payment scheduling`,
        `Accounts receivable invoicing and polite payment chasing`,
        `Multi-currency bank reconciliations and clean tax-ready books`,
      ],
      deliverables: [
        `Weekly ledger reconciliations & expense categorization`,
        `Accounts payable & receivable management`,
        `Payroll preprocessing & 1099 contractor payment tracking`,
        `Monthly P&L, balance sheet, and CPA liaison support`,
      ],
      tools: [
        `QuickBooks Online`,
        `Xero`,
        `Bill.com`,
        `Expensify`,
        `Gusto`,
        `Excel`,
      ],
      priceEstimate: `Full Shift $1,200/mo · Part-Time & Half-Time Available`,
      hoursSaved: `15+ Hours / Week Saved`,
    },
    {
      id: `marketing-social-media`,
      title: `Social Media & Content Marketing`,
      subtitle: `Grow your brand without living on social media. Our assistants create graphics in Canva, schedule posts, format newsletters, and engage followers.`,
      category: `Marketing & Creative`,
      badge: `High Engagement`,
      image: `/images/portal_mkt_va_1790549744052.jpg`,
      dialogue: {
        clientQuote: `“Our company LinkedIn page has not posted since the Jurassic period, and our social media strategy currently consists of ‘hoping people find us’!”`,
        assistantQuote: `“A vibrant glowing portal connects into the creative marketing department! Our content assistant designs eye-catching Canva carousels, formats the monthly newsletter, and sparks genuine community discussions while you focus on high-level strategy.”`,
      },
      highlights: [
        `Weekly content calendar scheduling across LinkedIn, X, Instagram & Facebook`,
        `Newsletter formatting & campaign delivery via Mailchimp, Substack & Klaviyo`,
        `Canva Pro design of social carousel decks, quote tiles, and video thumbnails`,
        `Community comment replies, DM triage, and active follower engagement`,
      ],
      deliverables: [
        `Monthly scheduled social media posting calendar`,
        `Weekly custom branded graphics and carousel slides`,
        `Bi-weekly newsletter layout, testing, and send execution`,
        `Daily inbound message and comment triage report`,
      ],
      tools: [
        `Canva Pro`,
        `Buffer`,
        `Mailchimp`,
        `Klaviyo`,
        `LinkedIn`,
        `Figma`,
      ],
      priceEstimate: `Full Shift $1,200/mo · Part-Time & Half-Time Available`,
      hoursSaved: `15+ Hours / Week Saved`,
    },
    {
      id: `tech-website-maintenance`,
      title: `Tech & Website Maintenance`,
      subtitle: `Keep your digital storefronts and websites fast, secure, and bug-free. Our technical assistants handle WordPress, Shopify updates, plugin QA, and webhooks.`,
      category: `Operations & Tech`,
      badge: `Zero Downtime`,
      image: `/images/portal_dev_va_1790549716428.jpg`,
      dialogue: {
        clientQuote: `“Our WordPress plugins are having a loud argument with each other, page load speeds are moving like snails, and our lead forms stopped forwarding!”`,
        assistantQuote: `“A glowing dimensional portal bridges into the IT operations department! Our technical specialist audits the plugins, optimizes database queries, fixes broken webhooks, and leaves your website humming along at top speed.”`,
      },
      highlights: [
        `WordPress & Shopify theme tweaks, product uploads, and landing page edits`,
        `Plugin updates, broken link checks, and Google Core Web Vitals speed tuning`,
        `Cross-browser QA testing across mobile and desktop before new campaign launches`,
        `Form integration, Zapier & Make webhook workflows, and automated error logging`,
      ],
      deliverables: [
        `Weekly automated backup and plugin compatibility audit`,
        `Store theme updates and landing page speed optimization`,
        `Checkout flow testing and conversion funnel bug fixes`,
        `Zapier/Make automation management between web forms and CRM`,
      ],
      tools: [
        `WordPress`,
        `Shopify`,
        `Webflow`,
        `Zapier`,
        `Make`,
        `Google Analytics`,
      ],
      priceEstimate: `Full Shift $1,500/mo · Part-Time & Half-Time Available`,
      hoursSaved: `20+ Hours / Week Saved`,
    },
    {
      id: `personal-concierge`,
      title: `Personal & Family Concierge`,
      subtitle: `Executive coordination for your personal life. From doctor appointments and school events to holiday gift sourcing and vacation planning.`,
      category: `Executive Support`,
      badge: `Lifestyle Ease`,
      image: `/images/portal_exec_va_1790549674384.jpg`,
      dialogue: {
        clientQuote: `“Between forgotten dental appointments, an unbooked family vacation, and an anniversary gift I forgot to buy, my personal life is running on dial-up internet!”`,
        assistantQuote: `“A serene magic portal opens into the executive family coordination department! Flights get reserved with optimal seats, school schedules are synced to your phone, and curated anniversary gifts arrive right at your doorstep on time.”`,
      },
      highlights: [
        `Family schedule coordination, doctor & dental appointment booking`,
        `Vacation research, custom itineraries, restaurant and hotel reservations`,
        `Personal bill tracking, subscription auditing, and warranty registrations`,
        `Online shopping research, holiday gift purchasing, and home contractor scheduling`,
      ],
      deliverables: [
        `Master personal calendar synchronization and reminder alerts`,
        `Custom travel booking itineraries with confirmed reservations`,
        `Household bill auditing and recurring subscription reviews`,
        `Gift curation, purchasing, and delivery tracking`,
      ],
      tools: [
        `Google Calendar`,
        `Apple Reminders`,
        `TripIt`,
        `WhatsApp`,
        `Notion`,
      ],
      priceEstimate: `Full Shift $1,200/mo · Part-Time & Half-Time Available`,
      hoursSaved: `15+ Hours / Week Saved`,
    },
    {
      id: `data-research-entry`,
      title: `Data Entry, Web Research & Intelligence`,
      subtitle: `Meticulous data specialists who turn messy information into structured, actionable databases. Competitor pricing research, contact validation, and data entry.`,
      category: `Research & Data`,
      badge: `High Precision`,
      image: `/images/portal_data_va_1790549760010.jpg`,
      dialogue: {
        clientQuote: `“We have 9 mismatched spreadsheets filled with duplicate records, broken VLOOKUPs, and data so tangled it would make Sherlock Holmes weep!”`,
        assistantQuote: `“A sparkling matrix portal materializes right inside the data intelligence department! Our specialist cleans, deduplicates, and validates all 10,000 rows into a sparkling dashboard that actually makes sense at your Monday team meeting.”`,
      },
      highlights: [
        `Competitor product pricing, feature comparisons, and market benchmarking`,
        `Messy spreadsheet cleansing, deduplication, and formula normalization`,
        `Real estate MLS listing extraction and property record lookups`,
        `Document transcription, invoice extraction, and OCR verification`,
      ],
      deliverables: [
        `Scrubbed, deduplicated master databases in Google Sheets/Excel`,
        `Weekly competitor pricing and feature tracking report`,
        `Verified company contact research and enrichment`,
        `Automated dashboard charts for weekly leadership reviews`,
      ],
      tools: [`Excel`, `Google Sheets`, `Airtable`, `Notion`, `Tableau`],
      priceEstimate: `Avg. $1,200 / mo · (Part-Time from $450)`,
      hoursSaved: `20+ Hours / Week Saved`,
    },
    {
      id: `podcast-video-repurposing`,
      title: `Podcast & Video Repurposing`,
      subtitle: `Transform long audio or video recordings into bite-sized clips, blog posts, transcripts, and viral social snippets without spending hours in editing software.`,
      category: `Media & Production`,
      badge: `Trending Format`,
      image: `/images/podcast_solution_1790274969394.jpg`,
      dialogue: {
        clientQuote: `“I have hours of raw podcast footage and zero time to cut clips or edit captions!”`,
        assistantQuote: `“Done! 10 viral Shorts/Reels created, dynamic captions added, and episode show notes published!”`,
      },
      highlights: [
        `Descript and CapCut trimming for 30-60 second Shorts, Reels, and TikToks`,
        `Clean audio transcription, show notes writing, and chapter timestamps`,
        `YouTube thumbnail creation, SEO title & description optimization`,
        `Guest outreach, calendar coordination, and release day asset kit delivery`,
      ],
      deliverables: [
        `5-10 edited vertical video clips per episode with dynamic animated subtitles`,
        `Full episode show notes, key takeaways, and timestamped chapters`,
        `High-CTR YouTube thumbnail designs in Canva/Photoshop`,
        `Distribution kit formatted for LinkedIn, TikTok, and Instagram`,
      ],
      tools: [
        `Descript`,
        `CapCut`,
        `Canva`,
        `YouTube Studio`,
        `Spotify for Podcasters`,
      ],
      priceEstimate: `Avg. $1,200 / mo · (Part-Time from $550)`,
      hoursSaved: `20+ Hours / Week Saved`,
    },
  ];
Xe.map((e) => ({
  id: e.id,
  title: e.title,
  category: e.category,
  description: e.subtitle,
  deliverables: e.deliverables,
  tools: e.tools,
  idealFor: e.hoursSaved,
  averageOnboardingTime: `48 Hours`,
  priceEstimate: e.priceEstimate,
  badge: e.badge,
  image: e.image,
  dialogue: e.dialogue,
  worriedBuyerProblem: e.dialogue.clientQuote,
  happyAssistantSolution: e.dialogue.assistantQuote,
}));
var Ze = [
    {
      id: `test-1`,
      quote: `We hired an Executive Assistant to take over calendar scheduling and email sorting across US and London hours. She picked up our systems in two days and has been completely reliable every single morning.`,
      role: `Managing Director & Founder`,
      company: `Fintech Advisory Group`,
      location: `San Francisco, CA`,
      serviceUsed: `Executive Virtual Assistants`,
      impactMetric: `Saved 18 hours/week`,
      rating: 5,
    },
    {
      id: `test-2`,
      quote: `Our sales rep was spending half his week looking up leads manually. The assistant from OneManShow cleans list databases in Apollo, verifies emails, and drafts outreach. We had 24 meetings booked in month one.`,
      role: `Head of Business Development`,
      company: `B2B Software Firm`,
      location: `Chicago, IL`,
      serviceUsed: `Sales & B2B Lead Generation`,
      impactMetric: `24 Qualified Sales Calls`,
      rating: 5,
    },
    {
      id: `test-3`,
      quote: `Customer inquiries on Shopify used to sit in our inbox overnight. With our new customer support assistant, response times are down under 10 minutes and buyer feedback has been great.`,
      role: `Chief Operating Officer`,
      company: `Apparel E-Commerce Brand`,
      location: `New York, NY`,
      serviceUsed: `E-Commerce Store Management`,
      impactMetric: `< 10 Min Response Time`,
      rating: 5,
    },
    {
      id: `test-4`,
      quote: `We needed help fixing UI bugs in our React codebase and managing GitHub pull requests. The developer assistant integrated right into our daily Slack standup and delivered clean code on time.`,
      role: `VP of Engineering`,
      company: `Logistics SaaS Platform`,
      location: `Austin, TX`,
      serviceUsed: `Web and App Development`,
      impactMetric: `Zero Backlog in Sprint 2`,
      rating: 5,
    },
    {
      id: `test-5`,
      quote: `Reconciling QuickBooks and chasing late client invoices used to take up my whole weekend. Our bookkeeping assistant is meticulous, balances every account weekly, and makes tax prep painless.`,
      role: `Principal Partner`,
      company: `Commercial Architecture Studio`,
      location: `London, United Kingdom`,
      serviceUsed: `Bookkeeping & Financial Administration`,
      impactMetric: `100% On-time reconciliations`,
      rating: 5,
    },
    {
      id: `test-6`,
      quote: `We had about 8,000 messy rows in our contact sheets with missing domains and duplicates. Our research assistant cleaned the entire database in 3 days with zero errors.`,
      role: `Operations Lead`,
      company: `Commercial Real Estate Brokerage`,
      location: `Toronto, Canada`,
      serviceUsed: `Data Entry, Web Research & Intelligence`,
      impactMetric: `8,000 Records Cleansed`,
      rating: 5,
    },
    {
      id: `test-7`,
      quote: `Our team posts consistently on LinkedIn now with branded carousels and monthly email newsletters. The workflow is smooth and our follower engagement has noticeably improved.`,
      role: `Marketing Director`,
      company: `Healthcare Technology Consultancy`,
      location: `Boston, MA`,
      serviceUsed: `Social Media & Content Marketing`,
      impactMetric: `4x Content Output`,
      rating: 5,
    },
    {
      id: `test-8`,
      quote: `Our assistant handles WordPress plugin updates, runs weekly speed checks, and fixes broken web forms before customers notice. Very responsive and easy to work with.`,
      role: `Digital Director`,
      company: `Online Education Portal`,
      location: `Denver, CO`,
      serviceUsed: `Tech & Website Maintenance`,
      impactMetric: `99.9% Uptime Maintained`,
      rating: 5,
    },
    {
      id: `test-9`,
      quote: `She books our family travel, coordinates doctor visits, and tracks renewal dates. It feels like having a personal concierge handling the details so I can focus during the day.`,
      role: `Managing Partner`,
      company: `Private Equity Practice`,
      location: `Seattle, WA`,
      serviceUsed: `Personal & Family Concierge`,
      impactMetric: `Peace of Mind Daily`,
      rating: 5,
    },
    {
      id: `test-10`,
      quote: `He cuts our 45-minute webinar recordings into 5 sharp short-form clips with subtitles every week. Turnaround is quick and our YouTube channel is growing steadily.`,
      role: `Media & Communications Lead`,
      company: `Growth Venture Accelerator`,
      location: `Miami, FL`,
      serviceUsed: `Podcast & Video Repurposing`,
      impactMetric: `15 Viral Clips / Month`,
      rating: 5,
    },
    {
      id: `test-11`,
      quote: `English communication is clear and articulate, tasks get turned around ahead of schedule, and having someone working during our night hours means projects are ready first thing in the morning.`,
      role: `Chief of Staff`,
      company: `Enterprise Cloud Solutions`,
      location: `Atlanta, GA`,
      serviceUsed: `Executive Virtual Assistants`,
      impactMetric: `Overnight Task Turnaround`,
      rating: 5,
    },
    {
      id: `test-12`,
      quote: `Honestly, having an assistant who anticipates what I need before our morning meeting feels like a genuine super power. It took away the daily scramble completely.`,
      role: `Chief Executive Officer`,
      company: `Direct-to-Consumer Retail Group`,
      location: `Los Angeles, CA`,
      serviceUsed: `Executive Virtual Assistants`,
      impactMetric: `Reclaimed 20+ hrs/week`,
      rating: 5,
    },
  ],
  Qe = [
    {
      id: `doc-001`,
      name: `Mutual_Bilateral_NDA_Executed_2026.pdf`,
      category: `Legal & NDAs`,
      size: `1.4 MB`,
      uploadedAt: `Sep 18, 2026`,
      checksumSha256: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`,
      encryptionStatus: `AES-256-GCM Encrypted`,
      uploadedBy: `Marcus Sterling (Client)`,
      accessLevel: `Confidential`,
    },
    {
      id: `doc-002`,
      name: `Executive_Calendar_Rules_and_Travel_Preferences_SOP.pdf`,
      category: `Standard Operating Procedures`,
      size: `840 KB`,
      uploadedAt: `Sep 19, 2026`,
      checksumSha256: `9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08`,
      encryptionStatus: `Zero-Knowledge Verified`,
      uploadedBy: `Ayesha Khan (Dedicated VA Pro)`,
      accessLevel: `Restricted`,
    },
    {
      id: `doc-003`,
      name: `Q3_Financial_Reconciliation_Ledger_QuickBooks.xlsx`,
      category: `Financial & Tax`,
      size: `3.2 MB`,
      uploadedAt: `Sep 21, 2026`,
      checksumSha256: `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`,
      encryptionStatus: `AES-256-GCM Encrypted`,
      uploadedBy: `Bilal Tariq (Finance Lead)`,
      accessLevel: `Executive Only`,
    },
    {
      id: `doc-004`,
      name: `Board_Meeting_Briefing_Deck_Q3_Review.pptx`,
      category: `Executive Briefs`,
      size: `7.8 MB`,
      uploadedAt: `Sep 22, 2026`,
      checksumSha256: `4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a`,
      encryptionStatus: `AES-256-GCM Encrypted`,
      uploadedBy: `Ayesha Khan (Dedicated VA Pro)`,
      accessLevel: `Confidential`,
    },
  ],
  $e = [
    {
      id: `tsk-101`,
      title: `Resolve calendar overlap for Singapore Tech Summit & book SQ321 flight`,
      category: `Inbox & Calendar`,
      status: `In Progress`,
      priority: `High`,
      dueDate: `Sep 25, 2026`,
      assignedTo: `Ayesha Khan (VA Pro)`,
      hoursSpent: 2.5,
    },
    {
      id: `tsk-102`,
      title: `Reconcile August 2026 Stripe payouts & categorized Amex expense receipts`,
      category: `Bookkeeping`,
      status: `Completed`,
      priority: `High`,
      dueDate: `Sep 22, 2026`,
      assignedTo: `Bilal Tariq`,
      hoursSpent: 4,
    },
    {
      id: `tsk-103`,
      title: `Prepare executive dossiers & LinkedIn bios for 6 partner meeting attendees`,
      category: `Research`,
      status: `In Progress`,
      priority: `Medium`,
      dueDate: `Sep 26, 2026`,
      assignedTo: `Ayesha Khan (VA Pro)`,
      hoursSpent: 3,
    },
    {
      id: `tsk-104`,
      title: `Update monthly vendor contract expiration register in Notion workspace`,
      category: `Operations`,
      status: `Completed`,
      priority: `Routine`,
      dueDate: `Sep 20, 2026`,
      assignedTo: `Ayesha Khan (VA Pro)`,
      hoursSpent: 1.5,
    },
  ],
  et = [
    {
      id: `msg-1`,
      sender: `assistant`,
      senderName: `Ayesha Khan (Dedicated VA Pro)`,
      timestamp: `08:30 AM PKT`,
      content: `Good morning Marcus! I reviewed your inbox from overnight. 4 high-priority investor inquiries have been tagged and drafted for your review. The Singapore flight seats on Singapore Airlines SQ321 are on hold.`,
      isEncrypted: !0,
    },
    {
      id: `msg-2`,
      sender: `client`,
      senderName: `Marcus Sterling`,
      timestamp: `08:45 AM PKT`,
      content: `Excellent work Ayesha. Please proceed with booking the Singapore flight and use the corporate Amex in our secure vault. Also, let’s make sure the board briefing deck is finalized by 3 PM.`,
      isEncrypted: !0,
    },
    {
      id: `msg-3`,
      sender: `assistant`,
      senderName: `Ayesha Khan (Dedicated VA Pro)`,
      timestamp: `09:10 AM PKT`,
      content: `All confirmed! Ticket issued and calendar updated with flight details, terminal directions, and confirmation code. Deck draft is 90% ready.`,
      isEncrypted: !0,
    },
  ],
  tt = ({
    onOpenPortal: e,
    onOpenConsultation: t,
    onNavigateToService: n,
    onNavigateToTerms: r,
    onOpenSpecialOffer: openOfferCb,
  }) => {
    let [i, a] = (0, x.useState)(!1),
      [o, s] = (0, x.useState)(!1),
      c = (0, x.useRef)(null);
    return (
      (0, x.useEffect)(() => {
        let e = (e) => {
          c.current && !c.current.contains(e.target) && s(!1);
        };
        return (
          document.addEventListener(`mousedown`, e),
          () => document.removeEventListener(`mousedown`, e)
        );
      }, []),
      (0, k.jsxs)(`header`, {
        className: `sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between`,
            children: [
              (0, k.jsx)(`a`, {
                href: `#`,
                className: `flex items-center gap-2 mr-6 lg:mr-8 shrink-0`,
                children: (0, k.jsx)(Ye, { size: `md` }),
              }),
              (0, k.jsxs)(`nav`, {
                className: `hidden md:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm font-semibold text-slate-700`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `relative`,
                    ref: c,
                    children: [
                      (0, k.jsxs)(`button`, {
                        onClick: () => s(!o),
                        className: `inline-flex items-center gap-1.5 py-2 hover:text-emerald-700 transition-colors font-bold text-slate-950 cursor-pointer`,
                        "aria-expanded": o,
                        children: [
                          (0, k.jsx)(`span`, { children: `Services` }),
                          (0, k.jsx)(le, {
                            className: `w-3.5 h-3.5 transition-transform duration-200 ${o ? `rotate-180 text-emerald-700` : `text-slate-400`}`,
                          }),
                        ],
                      }),
                      o &&
                        (0, k.jsxs)(`div`, {
                          className: `absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150`,
                          children: [
                            (0, k.jsxs)(`div`, {
                              className: `px-3 py-2 border-b border-slate-100 flex items-center justify-between`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  className: `text-[11px] font-black uppercase tracking-wider text-slate-400`,
                                  children: `Our Specialized VA Services`,
                                }),
                                (0, k.jsx)(`span`, {
                                  className: `text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full`,
                                  children: `9 Domain Solutions`,
                                }),
                              ],
                            }),
                            (0, k.jsx)(`div`, {
                              className: `max-h-[380px] overflow-y-auto py-1 space-y-1`,
                              children: Xe.map((e) =>
                                (0, k.jsxs)(
                                  `button`,
                                  {
                                    onClick: () => {
                                      (s(!1),
                                        n
                                          ? n(e.id)
                                          : document
                                              .getElementById(`top-services`)
                                              ?.scrollIntoView({
                                                behavior: `smooth`,
                                              }));
                                    },
                                    className: `w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group cursor-pointer flex items-center justify-between`,
                                    children: [
                                      (0, k.jsxs)(`div`, {
                                        children: [
                                          (0, k.jsx)(`div`, {
                                            className: `text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors`,
                                            children: e.title,
                                          }),
                                          (0, k.jsx)(`div`, {
                                            className: `text-[11px] text-slate-500 line-clamp-1`,
                                            children: e.subtitle,
                                          }),
                                        ],
                                      }),
                                      (0, k.jsx)(`span`, {
                                        className: `text-[10px] font-bold text-slate-400 group-hover:text-emerald-700 shrink-0 ml-2`,
                                        children: `View Details →`,
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                            (0, k.jsxs)(`div`, {
                              className: `pt-2 border-t border-slate-100 mt-1 flex items-center justify-between px-2 text-[11px]`,
                              children: [
                                (0, k.jsx)(`a`, {
                                  href: `#top-services`,
                                  onClick: () => s(!1),
                                  className: `font-bold text-slate-700 hover:text-emerald-700`,
                                  children: `View All in Slider`,
                                }),
                                (0, k.jsx)(`button`, {
                                  onClick: () => {
                                    (s(!1), t());
                                  },
                                  className: `font-bold text-emerald-700 hover:underline`,
                                  children: `Request Custom Scope`,
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, k.jsx)(`a`, {
                    href: `#why-pakistan`,
                    className: `hover:text-emerald-700 transition-colors`,
                    children: `Why Pakistan`,
                  }),
                  (0, k.jsx)(`a`, {
                    href: `#how-it-works`,
                    className: `hover:text-emerald-700 transition-colors`,
                    children: `How It Works`,
                  }),
                  (0, k.jsx)(`a`, {
                    href: `#calculator`,
                    className: `hover:text-emerald-700 transition-colors`,
                    children: `Pricing & ROI`,
                  }),
                  (0, k.jsx)(`a`, {
                    href: `#contact`,
                    className: `hover:text-emerald-700 transition-colors`,
                    children: `Contact`,
                  }),
                  r &&
                    (0, k.jsx)(`button`, {
                      onClick: r,
                      className: `hover:text-emerald-700 transition-colors text-slate-500 hover:underline cursor-pointer`,
                      children: `Terms`,
                    }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `hidden sm:flex items-center gap-3`,
                children: [
                  (0, k.jsxs)(`button`, {
                    onClick: e,
                    className: `inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 rounded-lg border border-slate-200 transition-colors cursor-pointer`,
                    children: [
                      (0, k.jsx)(Ue, {
                        className: `w-3.5 h-3.5 text-emerald-700`,
                      }),
                      (0, k.jsx)(`span`, { children: `Client Portal` }),
                    ],
                  }),
                  (0, k.jsxs)(`button`, {
                    onClick: t,
                    className: `inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95`,
                    children: [
                      (0, k.jsx)(`span`, { children: `Book a Call` }),
                      (0, k.jsx)(C, { className: `w-3.5 h-3.5` }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `md:hidden flex items-center gap-2`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: e,
                    className: `p-2 text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200`,
                    "aria-label": `Client Portal`,
                    children: (0, k.jsx)(Ue, { className: `w-4 h-4` }),
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => a(!i),
                    className: `p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200`,
                    "aria-label": `Toggle navigation menu`,
                    children: i
                      ? (0, k.jsx)(We, { className: `w-5 h-5` })
                      : (0, k.jsx)(T, { className: `w-5 h-5` }),
                  }),
                ],
              }),
            ],
          }),
          i &&
            (0, k.jsxs)(`div`, {
              className: `md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `grid gap-1 text-sm font-medium text-slate-700`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider`,
                      children: `All Specialized Services`,
                    }),
                    Xe.map((e) =>
                      (0, k.jsxs)(
                        `button`,
                        {
                          onClick: () => {
                            (a(!1),
                              n
                                ? n(e.id)
                                : document
                                    .getElementById(`top-services`)
                                    ?.scrollIntoView({ behavior: `smooth` }));
                          },
                          className: `text-left px-3 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 text-xs font-semibold text-slate-800`,
                          children: [`• `, e.title],
                        },
                        e.id,
                      ),
                    ),
                    (0, k.jsxs)(`div`, {
                      className: `pt-2 border-t border-slate-100 mt-1 grid gap-1`,
                      children: [
                        (0, k.jsx)(`a`, {
                          href: `#why-pakistan`,
                          onClick: () => a(!1),
                          className: `px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold`,
                          children: `Why Pakistan`,
                        }),
                        (0, k.jsx)(`a`, {
                          href: `#how-it-works`,
                          onClick: () => a(!1),
                          className: `px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold`,
                          children: `How It Works`,
                        }),
                        (0, k.jsx)(`a`, {
                          href: `#calculator`,
                          onClick: () => a(!1),
                          className: `px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold`,
                          children: `Pricing & ROI`,
                        }),
                        (0, k.jsx)(`a`, {
                          href: `#contact`,
                          onClick: () => a(!1),
                          className: `px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold`,
                          children: `Contact`,
                        }),
                        r &&
                          (0, k.jsx)(`button`, {
                            onClick: () => {
                              (a(!1), r());
                            },
                            className: `text-left px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold text-slate-500`,
                            children: `Terms and Conditions`,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 border-t border-slate-100 flex flex-col gap-2`,
                  children: [
                    (0, k.jsx)(`button`, {
                      onClick: () => {
                        (a(!1), t());
                      },
                      className: `w-full py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm`,
                      children: `Book a Discovery Call`,
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => {
                        (a(!1), e());
                      },
                      className: `w-full py-2.5 text-center text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-800`,
                      children: `Client Portal Login`,
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  },
  nt = ({
    onOpenConsultation: e,
    onOpenPortal: t,
    slideIndex: extSlideIndex,
    setSlideIndex: extSetSlideIndex,
  }) => {
    let [internalSlide, setInternalSlide] = (0, x.useState)(0),
      [isHovered, setIsHovered] = (0, x.useState)(!1);

    let slideIndex = extSlideIndex !== undefined ? extSlideIndex : internalSlide;
    let setSlideIndex = extSetSlideIndex || setInternalSlide;

    (0, x.useEffect)(() => {
      if (isHovered) return;
      let timer = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % 3);
      }, 7000);
      return () => clearInterval(timer);
    }, [isHovered, setSlideIndex]);

    let slides = [
      {
        id: "va",
        image: "/images/hero_portal_va_1790549659014.jpg",
        imagePosition: "object-[center_top] sm:object-top",
        alt: "Stop running a One Man Show - Hire a Virtual Assistant in Pakistan",
        topTag: (0, k.jsxs)(`span`, {
          children: [
            `One Stop Business Shop · `,
            (0, k.jsx)(`span`, {
              className: `font-extrabold text-white`,
              children: `“Your trusted work partners in Pakistan”`,
            }),
          ],
        }),
        titleLine1: `Stop running a One Man Show`,
        titleLine2: `Hire a Virtual Assistant`,
        paragraph: (0, k.jsxs)(`span`, {
          children: [
            `Running a business shouldn’t feel like an exhausting solo grind. Delegate operational noise with complete ease and comfort so you can `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `focus on what matters more`,
            }),
            `. We pair you with dedicated `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `Virtual Assistants in Pakistan`,
            }),
            ` trained for strict adherence to your company guidelines, SOPs, and checklists—reclaiming 20–40 hours every week.`,
          ],
        }),
        checkmarks: [
          `Strict adherence to your SOPs & guidelines`,
          `100% Money-Back Guarantee`,
          `Zero overhead: no payroll taxes, benefits, or desk costs`,
          (0, k.jsxs)(`a`, {
            href: `https://www.fiverr.com/s/8xz3prZ`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-1 text-slate-100 hover:text-emerald-400 hover:underline transition-colors font-medium flex-wrap`,
            title: `5 Years on Fiverr, 350+ orders, 250+ 5 Star Reviews, 0 Negative Reviews`,
            children: [
              (0, k.jsx)(`span`, {
                children: `5 Years on Fiverr, 350+ orders, 250+ 5`,
              }),
              (0, k.jsx)(Be, {
                className: `w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 inline mb-0.5`,
              }),
              (0, k.jsx)(`span`, {
                children: `Reviews, 0 Negative Reviews`,
              }),
            ],
          }),
        ],
        buttonText: `Book Free Discovery Call`,
        action: () => e && e(),
        trustBar: (0, k.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-4 text-xs text-slate-300`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, k.jsx)(Be, {
                  className: `w-3.5 h-3.5 text-amber-400 fill-amber-400`,
                }),
                (0, k.jsx)(`span`, {
                  className: `ml-1 text-white font-semibold`,
                  children: `4.7/5`,
                }),
              ],
            }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, { children: `20+ Years of Experience` }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, {
              children: `120+ Global founders & businesses served`,
            }),
          ],
        }),
        indicatorLabel: `Virtual Assistant`,
      },
      {
        id: "pk-startup",
        image: "/images/pk_startup_offer.jpg",
        imagePosition: "object-center",
        alt: "Special Limited Time Start Up Offer - PKR 9,999/- All Inclusive for Pakistan Businesses",
        topTag: (0, k.jsxs)(`span`, {
          children: [
            `Special Start Up Offer · `,
            (0, k.jsx)(`span`, {
              className: `font-extrabold text-white`,
              children: `80% OFF · Exclusive for Pakistan Businesses`,
            }),
          ],
        }),
        titleLine1: `Launch Your Business Online`,
        titleLine2: `Complete Website & US Hosting for PKR 9,999/-`,
        paragraph: (0, k.jsxs)(`span`, {
          children: [
            `Launching your business shouldn’t cost a fortune. Get a complete custom AI-assisted website with `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `1 Full Year of US Cloud Hosting`,
            }),
            ` (99.99% uptime commitment), `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `1 Year FREE Website Maintenance & Dedicated Support`,
            }),
            ` so you can attract clients with instant credibility.`,
          ],
        }),
        checkmarks: [
          `Complete AI-assisted custom website creation`,
          `1 Year managed US Cloud Hosting (99.99% uptime)`,
          `1 Year FREE Website Maintenance & Dedicated Support`,
          `Direct WhatsApp connect & mobile responsive (Domain not included)`,
        ],
        buttonText: `Claim PKR 9,999/- Special Offer`,
        action: () =>
          e &&
          e(
            "Special Start Up Offer - PKR 9999 (AI Website + 1-Yr US Hosting + Free Maintenance & Dedicated Support)"
          ),
        trustBar: (0, k.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-4 text-xs text-slate-300`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, k.jsx)(Ge, {
                  className: `w-3.5 h-3.5 text-amber-400 fill-amber-400`,
                }),
                (0, k.jsx)(`span`, {
                  className: `ml-1 text-amber-300 font-bold`,
                  children: `80% Introductory Savings`,
                }),
              ],
            }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, { children: `48-Hour Delivery Commitment` }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, { children: `100% Client Ownership & No Lock-in` }),
          ],
        }),
        indicatorLabel: `PKR 9,999 Offer`,
      },
      {
        id: "global-startup",
        image: "/images/global_startup_offer.jpg",
        imagePosition: "object-center",
        alt: "Global Start Up Offer - $49 All Inclusive for Startups & Small Businesses Worldwide",
        topTag: (0, k.jsxs)(`span`, {
          children: [
            `Global Start Up Offer · `,
            (0, k.jsx)(`span`, {
              className: `font-extrabold text-white`,
              children: `80% OFF · USA, UK, Canada, Australia & Worldwide`,
            }),
          ],
        }),
        titleLine1: `Scale Your Startup Globally`,
        titleLine2: `AI Website, US Hosting & Social Pages for $49`,
        paragraph: (0, k.jsxs)(`span`, {
          children: [
            `Scale your startup worldwide without paying expensive agency retainers. Receive an enterprise-grade AI-developed website, `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `1 Year Enterprise US Cloud Hosting`,
            }),
            ` (99.99% uptime guarantee), `,
            (0, k.jsx)(`strong`, {
              className: `text-white font-bold`,
              children: `1 Year FREE Website Maintenance & Dedicated Support`,
            }),
            `, and 3 official social media business pages linked to drive overseas sales.`,
          ],
        }),
        checkmarks: [
          `International AI website development & setup`,
          `1 Year Enterprise US Cloud Hosting (99.99% SLA)`,
          `1 Year FREE Website Maintenance & Dedicated Support`,
          `3 Official Social Media Business Pages linked (Domain not included)`,
        ],
        buttonText: `Claim $49 Global Offer`,
        action: () =>
          e &&
          e(
            "Global Start Up Offer - $49 (AI Website + US Hosting + 3 Social Pages + Dedicated Support)"
          ),
        trustBar: (0, k.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-4 text-xs text-slate-300`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, k.jsx)(xe, {
                  className: `w-3.5 h-3.5 text-blue-400`,
                }),
                (0, k.jsx)(`span`, {
                  className: `ml-1 text-blue-300 font-bold`,
                  children: `80% Introductory Savings`,
                }),
              ],
            }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, { children: `Global Edge CDN & SSL Included` }),
            (0, k.jsx)(`span`, { className: `text-slate-600`, children: `|` }),
            (0, k.jsx)(`span`, { children: `14-Day Money Back Guarantee` }),
          ],
        }),
        indicatorLabel: `$49 Global Offer`,
      },
    ];

    let current = slides[slideIndex];

    return (0, k.jsxs)(`section`, {
      id: `hero-slider`,
      className: `relative w-full min-h-[500px] sm:min-h-[520px] lg:min-h-[540px] overflow-hidden flex items-center justify-center py-6 sm:py-8 lg:py-10 bg-slate-950 select-none`,
      onMouseEnter: () => setIsHovered(!0),
      onMouseLeave: () => setIsHovered(!1),
      children: [
        /* Full Screen Background Image (with face visibility positioning) */
        (0, k.jsx)(`img`, {
          key: current.image,
          src: current.image,
          alt: current.alt,
          className: `absolute inset-0 w-full h-full object-cover ${current.imagePosition || "object-center"} transition-opacity duration-700 ease-in-out`,
          referrerPolicy: `no-referrer`,
        }),

        /* Contrast Overlay */
        (0, k.jsx)(`div`, {
          className: `absolute inset-0 bg-black/35 pointer-events-none`,
        }),

        /* Text Box Which is 70% Transparent Black (bg-black/70 backdrop-blur-md) with Even Top & Bottom Space */
        (0, k.jsxs)(`div`, {
          className: `relative z-10 w-full max-w-4xl mx-3 sm:mx-6 lg:mx-8 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl text-white my-auto transition-all duration-300`,
          children: [
            /* Top Tag */
            (0, k.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-2 shadow-2xs`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`,
                }),
                current.topTag,
              ],
            }),

            /* Big Headline in High-Visibility White & Emerald */
            (0, k.jsxs)(`h1`, {
              className: `text-xl sm:text-2xl lg:text-[29px] font-black tracking-tight text-white leading-[1.18]`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `block text-white`,
                  children: current.titleLine1,
                }),
                (0, k.jsx)(`span`, {
                  className: `block text-emerald-400 underline decoration-emerald-400/60 underline-offset-4 mt-0.5`,
                  children: current.titleLine2,
                }),
              ],
            }),

            /* Paragraph Description in Clear White/Slate-200 */
            (0, k.jsx)(`p`, {
              className: `text-xs sm:text-[13px] text-slate-200 leading-relaxed max-w-3xl font-normal mt-1.5`,
              children: current.paragraph,
            }),

            /* 4 Checkmarks in 2x2 Grid with Bright Emerald Icons & White Text */
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-2.5 text-xs sm:text-[13px] text-slate-100 font-medium`,
              children: current.checkmarks.map((item, idx) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, k.jsx)(w, {
                        className: `w-4 h-4 text-emerald-400 shrink-0`,
                      }),
                      (0, k.jsx)(`span`, { children: item }),
                    ],
                  },
                  idx
                )
              ),
            }),

            /* CTA Button */
            (0, k.jsx)(`div`, {
              className: `flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3`,
              children: (0, k.jsxs)(`button`, {
                onClick: current.action,
                className: `inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer active:scale-95`,
                children: [
                  (0, k.jsx)(`span`, {
                    children: current.buttonText,
                  }),
                  (0, k.jsx)(C, { className: `w-4 h-4` }),
                ],
              }),
            }),

            /* Trust Bar */
            (0, k.jsx)(`div`, {
              className: `pt-2`,
              children: current.trustBar,
            }),
          ],
        }),

        /* Previous Slide Button */
        (0, k.jsx)(`button`, {
          type: `button`,
          onClick: (ev) => {
            ev.stopPropagation();
            setSlideIndex((prev) => (prev === 0 ? 2 : prev - 1));
          },
          className: `absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl cursor-pointer transition-all active:scale-90`,
          "aria-label": `Previous slide`,
          children: (0, k.jsx)(ue, { className: `w-5 h-5` }),
        }),

        /* Next Slide Button */
        (0, k.jsx)(`button`, {
          type: `button`,
          onClick: (ev) => {
            ev.stopPropagation();
            setSlideIndex((prev) => (prev + 1) % 3);
          },
          className: `absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl cursor-pointer transition-all active:scale-90`,
          "aria-label": `Next slide`,
          children: (0, k.jsx)(de, { className: `w-5 h-5` }),
        }),

        /* Pagination Indicators */
        (0, k.jsx)(`div`, {
          className: `absolute bottom-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20`,
          children: slides.map((s, idx) =>
            (0, k.jsxs)(
              `button`,
              {
                type: `button`,
                onClick: (ev) => {
                  ev.stopPropagation();
                  setSlideIndex(idx);
                },
                className: `flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  slideIndex === idx
                    ? `bg-emerald-500 text-slate-950 shadow`
                    : `text-slate-300 hover:text-white`
                }`,
                "aria-label": `Go to slide ${idx + 1}`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full ${
                      slideIndex === idx ? `bg-slate-950` : `bg-white/50`
                    }`,
                  }),
                  (0, k.jsx)(`span`, {
                    children: s.indicatorLabel,
                  }),
                ],
              },
              idx
            )
          ),
        }),
      ],
    });  };

var rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, zt;

((rt = () =>
  (0, k.jsx)(`section`, {
    className: `bg-slate-900 text-white py-4 sm:py-5 border-y border-slate-800`,
    children: (0, k.jsx)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: (0, k.jsx)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left`,
        children: [
          {
            value: `20+ Yrs`,
            label: `Proven Experience`,
            sub: `Two decades of executive business mastery`,
          },
          {
            value: `48 Hrs`,
            label: `Match Guarantee`,
            sub: `From discovery call to introduction`,
          },
          {
            value: `70%`,
            label: `Cost Reduction`,
            sub: `Compared to domestic US/UK hiring`,
          },
          {
            value: `20+ Hrs`,
            label: `Saved Weekly`,
            sub: `Average time reclaimed by clients`,
          },
          {
            value: `99.2%`,
            label: `Retention Rate`,
            sub: `Long-term trusted partnerships`,
          },
        ].map((e, t) =>
          (0, k.jsxs)(
            `div`,
            {
              className: `space-y-1`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `text-2xl lg:text-3xl font-black text-emerald-400 font-mono tracking-tight`,
                  children: e.value,
                }),
                (0, k.jsx)(`div`, {
                  className: `text-sm font-semibold text-white`,
                  children: e.label,
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-slate-400`,
                  children: e.sub,
                }),
              ],
            },
            t,
          ),
        ),
      }),
    }),
  })),
  (it = ({ onSelectService: e }) => {
    let [t, n] = (0, x.useState)(0),
      [r, i] = (0, x.useState)(!0),
      a = (0, x.useRef)(null),
      o = Xe[t],
      s = () => {
        n((e) => (e + 1) % Xe.length);
      };
    return (
      (0, x.useEffect)(
        () => (
          r &&
            (a.current = setInterval(() => {
              s();
            }, 5500)),
          () => {
            a.current && clearInterval(a.current);
          }
        ),
        [r, t],
      ),
      (0, k.jsx)(`section`, {
        id: `top-services`,
        className: `py-8 sm:py-10 bg-slate-50 border-b border-slate-200 overflow-hidden`,
        children: (0, k.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3`,
              children: [
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                        }),
                        (0, k.jsx)(`span`, {
                          children: `One Stop Business Shop · Top Services`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`h2`, {
                      className: `text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight`,
                      children: [
                        `Top `,
                        (0, k.jsx)(`span`, {
                          className: `text-emerald-800`,
                          children: `Virtual Assistant Services`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`p`, {
                      className: `mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl font-normal`,
                      children: [
                        (0, k.jsx)(`strong`, {
                          className: `text-slate-950 font-bold`,
                          children: `Your trusted work partners in Pakistan`,
                        }),
                        `. Select any tab below or let the slider cycle through our specialized virtual assistant roles.`,
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex items-center gap-2 self-start md:self-end`,
                  children: [
                    (0, k.jsx)(`button`, {
                      onClick: () => i(!r),
                      className: `p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      title: r ? `Pause slideshow` : `Play slideshow`,
                      "aria-label": r ? `Pause slideshow` : `Play slideshow`,
                      children: r
                        ? (0, k.jsx)(Oe, { className: `w-4 h-4` })
                        : (0, k.jsx)(D, { className: `w-4 h-4` }),
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => {
                        n((e) => (e - 1 + Xe.length) % Xe.length);
                      },
                      className: `p-2 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      "aria-label": `Previous service`,
                      children: (0, k.jsx)(ue, { className: `w-5 h-5` }),
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: s,
                      className: `p-2 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      "aria-label": `Next service`,
                      children: (0, k.jsx)(de, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 mb-6`,
              children: Xe.map((e, r) => {
                let i = r === t;
                return (0, k.jsxs)(
                  `button`,
                  {
                    onClick: () => {
                      n(r);
                    },
                    className: `text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer ${i ? `bg-white border-emerald-700 shadow-sm ring-2 ring-emerald-700/20` : `bg-white/70 hover:bg-white border-slate-200 text-slate-600`}`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1`,
                        children: [
                          (0, k.jsx)(`span`, {
                            className: i
                              ? `text-emerald-700 font-black`
                              : `text-slate-400`,
                            children: r < 9 ? `0${r + 1}` : r + 1,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `px-1.5 py-0.5 rounded text-[9px] font-bold truncate max-w-[85px] ${i ? `bg-emerald-100 text-emerald-800` : `bg-slate-100 text-slate-600`}`,
                            children: e.badge,
                          }),
                        ],
                      }),
                      (0, k.jsx)(`div`, {
                        className: `text-xs font-bold truncate ${i ? `text-slate-950 font-black` : `text-slate-700`}`,
                        children: e.title,
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
            (0, k.jsx)(`div`, {
              onMouseEnter: () => i(!1),
              onMouseLeave: () => i(!0),
              className: `bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden`,
              children: (0, k.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex flex-wrap items-center gap-2 text-xs`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200`,
                                children: o.category,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-300`,
                                children: `·`,
                              }),
                              (0, k.jsxs)(`span`, {
                                className: `font-semibold text-slate-700 flex items-center gap-1`,
                                children: [
                                  (0, k.jsx)(me, {
                                    className: `w-3.5 h-3.5 text-emerald-700`,
                                  }),
                                  o.hoursSaved,
                                ],
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-300`,
                                children: `·`,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `font-black text-slate-950 bg-slate-100 px-2 py-0.5 rounded`,
                                children: o.priceEstimate,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-300`,
                                children: `·`,
                              }),
                              (0, k.jsxs)(`span`, {
                                className: `inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200`,
                                children: [
                                  (0, k.jsx)(`span`, {
                                    className: `w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse`,
                                  }),
                                  `Available Now`,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`h3`, {
                                className: `text-xl sm:text-2xl font-black text-slate-950 tracking-tight`,
                                children: o.title,
                              }),
                              (0, k.jsx)(`p`, {
                                className: `mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal`,
                                children: o.subtitle,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsxs)(`h4`, {
                                className: `text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5`,
                                children: [
                                  (0, k.jsx)(Fe, {
                                    className: `w-3.5 h-3.5 text-emerald-700`,
                                  }),
                                  `Core Deliverables & Workflow Management`,
                                ],
                              }),
                              (0, k.jsx)(`div`, {
                                className: `grid grid-cols-1 sm:grid-cols-2 gap-2`,
                                children: o.highlights.map((e, t) =>
                                  (0, k.jsxs)(
                                    `div`,
                                    {
                                      className: `flex items-start gap-2 text-xs text-slate-700`,
                                      children: [
                                        (0, k.jsx)(w, {
                                          className: `w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5`,
                                        }),
                                        (0, k.jsx)(`span`, {
                                          className: `leading-snug`,
                                          children: e,
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `pt-1`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5`,
                                children: `Daily Software Stack`,
                              }),
                              (0, k.jsx)(`div`, {
                                className: `flex flex-wrap gap-1.5`,
                                children: o.tools.map((e) =>
                                  (0, k.jsx)(
                                    `span`,
                                    {
                                      className: `px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium rounded-md transition-colors`,
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `pt-5 mt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `text-xs text-slate-500 flex items-center gap-2`,
                            children: [
                              (0, k.jsxs)(`span`, {
                                className: `flex items-center gap-1 font-semibold text-slate-700`,
                                children: [
                                  (0, k.jsx)(w, {
                                    className: `w-3.5 h-3.5 text-emerald-600`,
                                  }),
                                  `Hand-matched in 48h`,
                                ],
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-300`,
                                children: `·`,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200`,
                                children: `100% Money-Back Guarantee`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`button`, {
                            onClick: () => e(o.title),
                            className: `inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95`,
                            children: [
                              (0, k.jsx)(`span`, {
                                children: `Book This Virtual Assistant`,
                              }),
                              (0, k.jsx)(C, { className: `w-4 h-4` }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-5 relative min-h-[380px] sm:min-h-[440px] lg:min-h-full flex flex-col justify-between overflow-hidden bg-slate-950 p-4 sm:p-5 border-t lg:border-t-0 lg:border-l border-slate-100`,
                    children: [
                      (0, k.jsx)(`img`, {
                        src: o.image,
                        alt: `${o.title} - Superhero Virtual Assistant in Pakistani Attire`,
                        className: `absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 hover:scale-102`,
                        referrerPolicy: `no-referrer`,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none`,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `relative z-10 flex items-center justify-between gap-2`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-md`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`,
                              }),
                              (0, k.jsx)(`span`, { children: o.badge }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-slate-200`,
                            children: (0, k.jsxs)(`span`, {
                              children: [`Slide `, t + 1, ` of `, Xe.length],
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsx)(`div`, {
                        className: `relative z-10 flex items-center justify-center gap-1.5 py-1`,
                        children: Xe.map((e, r) =>
                          (0, k.jsx)(
                            `button`,
                            {
                              onClick: () => n(r),
                              className: `h-1.5 rounded-full transition-all cursor-pointer ${r === t ? `w-6 bg-emerald-400 shadow-sm` : `w-1.5 bg-white/50 hover:bg-white/80`}`,
                              "aria-label": `Go to slide ${r + 1}`,
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, k.jsxs)(`div`, {
              className: `mt-8 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `space-y-1 text-center md:text-left`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200`,
                      children: (0, k.jsx)(`span`, {
                        children: `One Stop Business Shop`,
                      }),
                    }),
                    (0, k.jsx)(`h4`, {
                      className: `text-sm sm:text-base font-bold text-slate-950`,
                      children: `Need a specialized or hybrid Virtual Assistant role?`,
                    }),
                    (0, k.jsx)(`p`, {
                      className: `text-xs text-slate-600 max-w-2xl`,
                      children: `We hand-pick and vet custom assistants across Pakistan for niche software, sales workflows, Amazon/Shopify stores, and high-security enterprise tasks.`,
                    }),
                  ],
                }),
                (0, k.jsx)(`button`, {
                  onClick: () => e(`Custom Hybrid Role`),
                  className: `shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95`,
                  children: `Request Custom Skillset`,
                }),
              ],
            }),
          ],
        }),
      })
    );
  }),
  (at = ({ onOpenConsultation: e }) =>
    (0, k.jsx)(`section`, {
      id: `how-it-works`,
      className: `py-8 sm:py-10 bg-white border-b border-slate-200`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `text-center max-w-2xl mx-auto mb-14`,
            children: [
              (0, k.jsx)(`div`, {
                className: `text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2`,
                children: `Simple 3-Step Process`,
              }),
              (0, k.jsx)(`h2`, {
                className: `text-3xl sm:text-4xl font-black text-slate-950 tracking-tight`,
                children: `How we get you started in 48 hours.`,
              }),
              (0, k.jsx)(`p`, {
                className: `mt-3 text-base text-slate-600`,
                children: `No long hiring cycles, recruiter fees, or candidate interviews. We handle the vetting, matching, and payroll.`,
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-3 gap-8 relative`,
            children: [
              {
                number: `01`,
                title: `Discovery Call`,
                timeframe: `Day 1 (20 mins)`,
                description: `We meet to understand your work style, time zones, key bottlenecks, and tools you use daily.`,
                icon: (0, k.jsx)(ke, { className: `w-5 h-5 text-emerald-700` }),
              },
              {
                number: `02`,
                title: `Meet Your Matched VA`,
                timeframe: `Within 48 Hours`,
                description: `We introduce you to your dedicated assistant, carefully hand-selected from our top 1% vetted Pakistan talent.`,
                icon: (0, k.jsx)(Ue, { className: `w-5 h-5 text-emerald-700` }),
              },
              {
                number: `03`,
                title: `Start Delegating`,
                timeframe: `Day 3 & Beyond`,
                description: `Begin delegating immediately. Your assistant takes over routine operations while you gain back 20+ hours each week.`,
                icon: (0, k.jsx)(Me, { className: `w-5 h-5 text-emerald-700` }),
              },
            ].map((e, t) =>
              (0, k.jsxs)(
                `div`,
                {
                  className: `relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `flex items-center justify-between mb-4`,
                          children: [
                            (0, k.jsx)(`span`, {
                              className: `text-3xl font-black text-emerald-800/30 font-mono`,
                              children: e.number,
                            }),
                            (0, k.jsx)(`div`, {
                              className: `w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center`,
                              children: e.icon,
                            }),
                          ],
                        }),
                        (0, k.jsx)(`div`, {
                          className: `text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1`,
                          children: e.timeframe,
                        }),
                        (0, k.jsx)(`h3`, {
                          className: `text-xl font-black text-slate-950 mb-2`,
                          children: e.title,
                        }),
                        (0, k.jsx)(`p`, {
                          className: `text-sm text-slate-600 leading-relaxed`,
                          children: e.description,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-slate-400`,
                      children: [`Step `, t + 1, ` of 3`],
                    }),
                  ],
                },
                e.number,
              ),
            ),
          }),
          (0, k.jsx)(`div`, {
            className: `mt-12 text-center`,
            children: (0, k.jsxs)(`button`, {
              onClick: e,
              className: `inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95`,
              children: [
                (0, k.jsx)(`span`, {
                  children: `Schedule Your 20-Minute Discovery Call`,
                }),
                (0, k.jsx)(C, { className: `w-4 h-4` }),
              ],
            }),
          }),
        ],
      }),
    })),
  (ot = ({ onOpenConsultation: e }) =>
    (0, k.jsx)(`section`, {
      id: `why-pakistan`,
      className: `py-8 sm:py-10 bg-white border-b border-slate-200`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `text-center max-w-3xl mx-auto mb-10`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                  }),
                  (0, k.jsx)(`span`, { children: `One Stop Business Shop` }),
                ],
              }),
              (0, k.jsx)(`h2`, {
                className: `text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight`,
                children: `“Your trusted work partners in Pakistan”`,
              }),
              (0, k.jsxs)(`p`, {
                className: `mt-3 text-sm sm:text-base text-slate-600 leading-relaxed`,
                children: [
                  `Backed by `,
                  (0, k.jsx)(`strong`, {
                    className: `text-slate-950 font-bold`,
                    children: `20+ years of industry experience`,
                  }),
                  `, OneManShow is your complete One Stop Business Shop. We bridge the gap between global entrepreneurs and Pakistan’s premier professional workforce with seamless remote collaboration built on trust, quality, and results.`,
                ],
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14`,
            children: [
              {
                icon: (0, k.jsx)(be, { className: `w-5 h-5 text-emerald-700` }),
                title: `Top 1% University-Educated Talent`,
                description: `Every Virtual Assistant is a college graduate with native-level English proficiency, critical thinking skills, and specialized domain training.`,
              },
              {
                icon: (0, k.jsx)(me, { className: `w-5 h-5 text-emerald-700` }),
                title: `Synchronized US, UK & EU Hours`,
                description: `Whether you operate in New York (EST), California (PST), London (GMT), or Sydney (AEST), your assistant works your real-time schedule.`,
              },
              {
                icon: (0, k.jsx)(ge, { className: `w-5 h-5 text-emerald-700` }),
                title: `Up to 70% Operational Savings`,
                description: `Eliminate expensive local recruiter fees, payroll taxes, benefits, and office hardware overhead while getting higher-quality daily execution.`,
              },
              {
                icon: (0, k.jsx)(Fe, { className: `w-5 h-5 text-emerald-700` }),
                title: `Enterprise Confidentiality & NDAs`,
                description: `Bilateral legal non-disclosure agreements, encrypted password vaults (1Password/Bitwarden), and zero client data sharing.`,
              },
              {
                icon: (0, k.jsx)(Ge, { className: `w-5 h-5 text-emerald-700` }),
                title: `24/7 Redundant Fiber Infrastructure`,
                description: `Modern centralized operations with dual-redundant high-speed fiber internet and continuous backup power ensure zero downtime.`,
              },
              {
                icon: (0, k.jsx)(Se, { className: `w-5 h-5 text-emerald-700` }),
                title: `Proactive Ownership & Integrity`,
                description: `Not task-clickers—true operational partners who think ahead, spot bottlenecks, optimize SOPs, and help you grow with genuine passion.`,
              },
            ].map((e, t) =>
              (0, k.jsxs)(
                `div`,
                {
                  className: `p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all space-y-3`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center`,
                      children: e.icon,
                    }),
                    (0, k.jsx)(`h3`, {
                      className: `text-base font-bold text-slate-900`,
                      children: e.title,
                    }),
                    (0, k.jsx)(`p`, {
                      className: `text-xs sm:text-sm text-slate-600 leading-relaxed`,
                      children: e.description,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden`,
            children: [
              (0, k.jsx)(`div`, {
                className: `absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none`,
              }),
              (0, k.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-7 space-y-4`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `text-xs font-bold text-emerald-400 uppercase tracking-widest`,
                        children: `20+ Years Of Experience · The Pakistan Advantage`,
                      }),
                      (0, k.jsx)(`h3`, {
                        className: `text-2xl sm:text-3xl font-black tracking-tight text-white`,
                        children: `Turn your solo operation into a formidable company.`,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-sm text-slate-300 leading-relaxed`,
                        children: `Stop juggling sales, coding, customer support, and administrative chaos on your own. With OneManShow, you gain dedicated Virtual Assistants in Pakistan who take pride in executing your daily workload with precision and integrity.`,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-200`,
                        children: [
                          (0, k.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400`,
                              }),
                              `College-educated talent pool`,
                            ],
                          }),
                          (0, k.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400`,
                              }),
                              `Zero long-term contracts`,
                            ],
                          }),
                          (0, k.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400`,
                              }),
                              `Dedicated Account Manager`,
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsx)(`div`, {
                        className: `pt-4`,
                        children: (0, k.jsxs)(`button`, {
                          onClick: e,
                          className: `inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer active:scale-95`,
                          children: [
                            (0, k.jsx)(`span`, {
                              children: `Meet Your Pakistan Work Partner`,
                            }),
                            (0, k.jsx)(C, { className: `w-4 h-4` }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-5 grid grid-cols-2 gap-4`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `text-3xl sm:text-4xl font-black text-white`,
                            children: `20+`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-xs text-emerald-400 font-semibold mt-1`,
                            children: `Years Experience`,
                          }),
                          (0, k.jsx)(`p`, {
                            className: `text-[10px] text-slate-400 mt-1`,
                            children: `Proven business mastery`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `text-3xl sm:text-4xl font-black text-white`,
                            children: `70%`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-xs text-emerald-400 font-semibold mt-1`,
                            children: `Payroll Savings`,
                          }),
                          (0, k.jsx)(`p`, {
                            className: `text-[10px] text-slate-400 mt-1`,
                            children: `Vs. hiring locally in US/UK`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `text-3xl sm:text-4xl font-black text-white`,
                            children: `98.4%`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-xs text-emerald-400 font-semibold mt-1`,
                            children: `Client Retention`,
                          }),
                          (0, k.jsx)(`p`, {
                            className: `text-[10px] text-slate-400 mt-1`,
                            children: `Long-term partnerships`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `text-3xl sm:text-4xl font-black text-white`,
                            children: `100%`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-xs text-emerald-400 font-semibold mt-1`,
                            children: `Timezone Overlap`,
                          }),
                          (0, k.jsx)(`p`, {
                            className: `text-[10px] text-slate-400 mt-1`,
                            children: `Working your local hours`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })),
  (st = ({ onOpenConsultation: e }) =>
    (0, k.jsx)(`section`, {
      className: `py-8 sm:py-10 bg-gradient-to-b from-white via-emerald-50/25 to-slate-50 border-b border-slate-200`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `max-w-3xl mx-auto text-center space-y-3 mb-16`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-2xs`,
                children: [
                  (0, k.jsx)(Se, { className: `w-3.5 h-3.5 text-emerald-700` }),
                  (0, k.jsx)(`span`, {
                    children: `Customer Ease & Peace of Mind`,
                  }),
                ],
              }),
              (0, k.jsxs)(`h2`, {
                className: `text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight`,
                children: [
                  `Focus on what matters most. `,
                  (0, k.jsx)(`br`, { className: `hidden sm:inline` }),
                  (0, k.jsx)(`span`, {
                    className: `text-emerald-700`,
                    children: `We take care of the rest.`,
                  }),
                ],
              }),
              (0, k.jsx)(`p`, {
                className: `text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto`,
                children: `Running a growing business shouldn't mean drowning in calendar conflicts, unanswered inboxes, repetitive spreadsheets, and operational burnout. Delegate with complete confidence so you can direct 100% of your energy toward revenue, strategic deals, product innovation, and family.`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all space-y-3.5 group`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform`,
                    children: (0, k.jsx)(oe, { className: `w-6 h-6` }),
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-base font-bold text-slate-950`,
                    children: `Strict SOP & Guideline Adherence`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-600 leading-relaxed`,
                    children: `No guesswork or unapproved assumptions. Every assistant is trained in rigid compliance with your standard operating procedures, checklists, approval hierarchies, and brand voice guidelines.`,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700`,
                    children: [
                      (0, k.jsx)(w, { className: `w-3.5 h-3.5` }),
                      (0, k.jsx)(`span`, {
                        children: `Zero-deviation execution`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all space-y-3.5 group`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform`,
                    children: (0, k.jsx)(je, { className: `w-6 h-6` }),
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-base font-bold text-slate-950`,
                    children: `Trained Standby Backup Assistant`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-600 leading-relaxed`,
                    children: `Never fear single points of failure, illness, or disruptions. Your primary assistant documents recurring processes so our pre-trained standby assistant can step in seamlessly with zero downtime.`,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700`,
                    children: [
                      (0, k.jsx)(w, { className: `w-3.5 h-3.5` }),
                      (0, k.jsx)(`span`, {
                        children: `100% operational continuity`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all space-y-3.5 group`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform`,
                    children: (0, k.jsx)(me, { className: `w-6 h-6` }),
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-base font-bold text-slate-950`,
                    children: `Working Your Time Zone`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-600 leading-relaxed`,
                    children: `Whether you operate on US Eastern, Pacific, UK GMT, Central European, or Australian time, your assistant’s dedicated shift is synchronized to your active workday for real-time collaboration.`,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700`,
                    children: [
                      (0, k.jsx)(w, { className: `w-3.5 h-3.5` }),
                      (0, k.jsx)(`span`, {
                        children: `Live Slack & Teams collaboration`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all space-y-3.5 group`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform`,
                    children: (0, k.jsx)(Fe, { className: `w-6 h-6` }),
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-base font-bold text-slate-950`,
                    children: `Bilateral NDA & Security Vault`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-600 leading-relaxed`,
                    children: `Your proprietary company data, customer databases, and credentials remain 100% confidential under legally binding non-disclosure covenants and encrypted password vault protocols.`,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700`,
                    children: [
                      (0, k.jsx)(w, { className: `w-3.5 h-3.5` }),
                      (0, k.jsx)(`span`, {
                        children: `100% Money-back guarantee`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-slate-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-800 shadow-xl overflow-hidden relative`,
            children: [
              (0, k.jsx)(`div`, {
                className: `absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none`,
              }),
              (0, k.jsxs)(`div`, {
                className: `max-w-3xl mb-8`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2`,
                    children: `Transform Your Daily Executive Experience`,
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-2xl sm:text-3xl font-black text-white tracking-tight`,
                    children: `Life Without OneManShow vs. Life With Your Dedicated Work Partner`,
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `p-6 rounded-2xl bg-slate-900/80 border border-red-900/30 space-y-4`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-rose-400 font-bold text-sm`,
                        children: [
                          (0, k.jsx)(pe, { className: `w-5 h-5 shrink-0` }),
                          (0, k.jsx)(`span`, {
                            children: `Your own OneManShow grind`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`ul`, {
                        className: `space-y-3 text-xs sm:text-sm text-slate-300`,
                        children: [
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `text-rose-400 font-bold shrink-0`,
                                children: `✕`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Constantly context-switching between executive strategy and low-value administrative chores.`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `text-rose-400 font-bold shrink-0`,
                                children: `✕`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Spending 15–20 hours a week answering repetitive emails, rescheduling meetings, and chasing invoices.`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `text-rose-400 font-bold shrink-0`,
                                children: `✕`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Hiring expensive local staff ($35/hr + $6,000/mo) with painful recruitment lead times and high churn.`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `text-rose-400 font-bold shrink-0`,
                                children: `✕`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Ending every workday exhausted, with your critical strategic goals deferred yet again.`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `p-6 rounded-2xl bg-emerald-950/40 border border-emerald-600/50 space-y-4 relative shadow-inner`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-emerald-400 font-bold text-sm`,
                        children: [
                          (0, k.jsx)(w, { className: `w-5 h-5 shrink-0` }),
                          (0, k.jsx)(`span`, {
                            children: `With Your Trusted Work Partner`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`ul`, {
                        className: `space-y-3 text-xs sm:text-sm text-slate-200`,
                        children: [
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400 shrink-0 mt-0.5`,
                              }),
                              (0, k.jsxs)(`span`, {
                                children: [
                                  (0, k.jsx)(`strong`, {
                                    children: `Clear Headspace:`,
                                  }),
                                  ` Arrive to a prioritized inbox, organized schedule, and completed tasks daily.`,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400 shrink-0 mt-0.5`,
                              }),
                              (0, k.jsxs)(`span`, {
                                children: [
                                  (0, k.jsx)(`strong`, {
                                    children: `Flawless Guideline Adherence:`,
                                  }),
                                  ` Operations executed strictly by your company playbooks and SOPs.`,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400 shrink-0 mt-0.5`,
                              }),
                              (0, k.jsxs)(`span`, {
                                children: [
                                  (0, k.jsx)(`strong`, {
                                    children: `Massive Savings:`,
                                  }),
                                  ` Predictable flat packages ($99 to $899/mo) saving $30,000–$62,000+ vs. $35/hr local hires.`,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`li`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-4 h-4 text-emerald-400 shrink-0 mt-0.5`,
                              }),
                              (0, k.jsxs)(`span`, {
                                children: [
                                  (0, k.jsx)(`strong`, {
                                    children: `Zero Risk:`,
                                  }),
                                  ` 100% Money-Back Guarantee and instant free replacement whenever you need.`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-xs text-slate-400 text-center sm:text-left`,
                    children: [
                      (0, k.jsx)(Re, {
                        className: `w-4 h-4 text-emerald-400 shrink-0`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: `Ready to reclaim 20 to 40 hours every week? Get matched with your pre-vetted assistant in under 48 hours.`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`button`, {
                    onClick: () => e(`Part Time`),
                    className: `inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer shrink-0`,
                    children: [
                      (0, k.jsx)(`span`, {
                        children: `Explore Packages & Hire Now`,
                      }),
                      (0, k.jsx)(C, { className: `w-4 h-4` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })),
  (ct = ({ onOpenConsultation: e }) => {
    let t = [
        {
          id: `starter`,
          name: `Starter / Onboarding`,
          badge: `Flexible Trial`,
          badgeColor: `bg-slate-100 text-slate-800 border-slate-300`,
          price: 99,
          period: `/month`,
          hours: `20 Hours total / month`,
          effectiveRate: `~$4.95 / hr`,
          headline: `Best for testing delegation, ad-hoc tasks & clearing backlog`,
          timezone: `Any Time Zone Aligned`,
          perks: [
            `20 Dedicated Hours / Month (Use flexibly anytime)`,
            `Synchronized to Any Time Zone (US, UK, EU, AUS)`,
            `Strict SOP & Guideline Adherence (Exact checklist execution)`,
            `Pre-vetted English-fluent Specialist`,
            `Direct WhatsApp & Email Task Coordination`,
            `Client Portal Access & Live Task Tracking`,
            `Confidential Bilateral NDA Protection`,
            `Standard Email & Chat Support (Under 4-hr SLA)`,
            `No Long-Term Commitment · Cancel Anytime`,
            `100% Money-Back Guarantee`,
          ],
          inHouseCompare: `$700/mo at $35/hr in-house`,
          savings: `Save $601 / month (86% savings)`,
          popular: !1,
          buttonText: `Get Started with 20 Hours`,
          buttonStyle: `bg-slate-900 hover:bg-slate-800 text-white`,
        },
        {
          id: `part-time`,
          name: `Part Time`,
          badge: `Most Popular · Recommended`,
          badgeColor: `bg-emerald-600 text-white border-emerald-700 shadow-xs`,
          price: 499,
          period: `/month`,
          hours: `20 Hours / week (~80 hrs/mo)`,
          effectiveRate: `~$6.24 / hr`,
          headline: `Ideal for consistent weekly workflows, inbox & calendar relief`,
          timezone: `Dedicated Daily Shift in Your Time Zone`,
          perks: [
            `Everything in Starter, PLUS:`,
            `20 Hours Every Week (~80 Hours / Month Dedicated)`,
            `Dedicated Primary Specialist assigned exclusively to you`,
            `Dedicated Client Success Manager for quality audits`,
            `Rigid SOP & Playbook Adherence (Audited compliance)`,
            `Trained Standby Backup Assistant (Zero downtime guarantee)`,
            `Integrates with Your Tools (Slack, Teams, Notion, Asana, CRM)`,
            `Weekly Task Efficiency & Productivity Reports`,
            `Priority Support Line (Under 1-hr response time)`,
            `Free Instant Replacement Guarantee`,
            `100% Money-Back Guarantee`,
          ],
          inHouseCompare: `$3,033/mo at $35/hr in-house`,
          savings: `Save $2,534 / month ($30,400+ / year)`,
          popular: !0,
          buttonText: `Choose Part-Time ($499/mo)`,
          buttonStyle: `bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg`,
        },
        {
          id: `full-time`,
          name: `Full Time`,
          badge: `Best Value · Complete Offload`,
          badgeColor: `bg-emerald-100 text-emerald-950 border-emerald-300`,
          price: 899,
          period: `/month`,
          hours: `40 Hours / week (~160 hrs/mo)`,
          effectiveRate: `~$5.62 / hr`,
          headline: `Full operational scale for founders ready to reclaim 40 hrs/wk`,
          timezone: `Full 8-Hour Working Shift in Your Time Zone`,
          perks: [
            `Everything in Part-Time, PLUS:`,
            `40 Hours Every Week (~160 Hours / Month 1-on-1 Dedicated)`,
            `Complete 1-on-1 Dedicated Senior Specialist`,
            `Live Real-time Slack / Microsoft Teams / WhatsApp Collaboration`,
            `Custom SOP Documentation & Company Playbook Building`,
            `Advanced High-Value Workflows (Sales outreach, dev, finance, ops)`,
            `Direct 24/7 Client Success Director Emergency Line`,
            `Enterprise Security Protocol & Encrypted Credential Vault`,
            `Immediate 0-Downtime Standby Backup Specialist`,
            `Quarterly Strategy & Operational Scale Consultation`,
            `100% Money-Back Guarantee`,
          ],
          inHouseCompare: `$6,066/mo at $35/hr in-house`,
          savings: `Save $5,167 / month ($62,000+ / year)`,
          popular: !1,
          buttonText: `Hire Full-Time Assistant ($899/mo)`,
          buttonStyle: `bg-slate-900 hover:bg-emerald-700 text-white`,
        },
      ],
      [n, r] = (0, x.useState)(20),
      [i, a] = (0, x.useState)(!1),
      o = (e) => {
        if (i) return 99;
        if (e <= 10) return 275;
        if (e <= 20) {
          let t = (e - 10) / 10;
          return Math.round(275 + t * 224);
        }
        if (e <= 40) {
          let t = (e - 20) / 20;
          return Math.round(499 + t * 400);
        }
        return 899;
      },
      s = (e) => (i ? 700 : Math.round(e * 35 * 4.333)),
      c = o(n),
      l = s(n),
      u = l - c,
      d = u * 12,
      f = (c / (i ? 20 : Math.round(n * 4.333))).toFixed(2);
    return (0, k.jsx)(`section`, {
      id: `calculator`,
      className: `py-8 sm:py-10 bg-white border-b border-slate-200`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `max-w-3xl mx-auto text-center mb-8 sm:mb-10`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-2 mb-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider shadow-2xs`,
                    children: [
                      (0, k.jsx)(w, {
                        className: `w-3.5 h-3.5 text-emerald-600`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: `Transparent 3-Tier Packages`,
                      }),
                    ],
                  }),
                  (0, k.jsx)(`div`, {
                    className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-2xs`,
                    children: (0, k.jsx)(`span`, {
                      children: `★ 100% Money-Back Guarantee`,
                    }),
                  }),
                ],
              }),
              (0, k.jsxs)(`h2`, {
                className: `text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight`,
                children: [
                  `Transparent packages. `,
                  (0, k.jsx)(`br`, { className: `hidden sm:inline` }),
                  (0, k.jsx)(`span`, {
                    className: `text-emerald-700`,
                    children: `Predictable monthly peace of mind.`,
                  }),
                ],
              }),
              (0, k.jsx)(`p`, {
                className: `mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed`,
                children: `Choose the dedicated support level that matches your growth stage. Every package includes strict SOP adherence, trained backup coverage, your local time zone alignment, and our 100% risk-free guarantee.`,
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 items-stretch`,
            children: t.map((t) =>
              (0, k.jsxs)(
                `div`,
                {
                  className: `rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all relative ${t.popular ? `bg-gradient-to-b from-emerald-50/70 via-white to-white border-2 border-emerald-600 shadow-lg ring-2 ring-emerald-600/20` : `bg-white border border-slate-200 shadow-sm hover:shadow-md`}`,
                  // Compact space-saving pricing card
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-2 mb-4`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${t.badgeColor}`,
                          children: t.badge,
                        }),
                        (0, k.jsx)(`span`, {
                          className: `text-xs font-semibold text-slate-500`,
                          children: t.timezone,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`h3`, {
                          className: `text-2xl font-black text-slate-950 tracking-tight`,
                          children: t.name,
                        }),
                        (0, k.jsx)(`p`, {
                          className: `text-xs text-slate-600 mt-1 mb-3 min-h-[26px]`,
                          children: t.headline,
                        }),
                        (0, k.jsxs)(`div`, {
                          className: `p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-3`,
                          children: [
                            (0, k.jsxs)(`div`, {
                              className: `flex items-baseline gap-1.5`,
                              children: [
                                (0, k.jsxs)(`span`, {
                                  className: `text-4xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight`,
                                  children: [`$`, t.price],
                                }),
                                (0, k.jsx)(`span`, {
                                  className: `text-slate-600 text-sm font-semibold`,
                                  children: t.period,
                                }),
                              ],
                            }),
                            (0, k.jsxs)(`div`, {
                              className: `mt-2 flex items-center justify-between text-xs pt-2 border-t border-slate-200 text-slate-600 font-medium`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  className: `font-bold text-emerald-800`,
                                  children: t.hours,
                                }),
                                (0, k.jsx)(`span`, {
                                  className: `bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-[11px]`,
                                  children: t.effectiveRate,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          className: `mb-3 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-xs`,
                          children: [
                            (0, k.jsxs)(`div`, {
                              className: `text-slate-500 line-through text-[11px]`,
                              children: [`vs. `, t.inHouseCompare],
                            }),
                            (0, k.jsx)(`div`, {
                              className: `font-black text-emerald-800 text-xs mt-0.5`,
                              children: t.savings,
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          className: `space-y-1.5 mb-5 text-xs text-slate-700`,
                          children: [
                            (0, k.jsx)(`div`, {
                              className: `font-bold uppercase tracking-wider text-[10px] text-slate-400 mb-2`,
                              children: `Included Perks & Guarantees:`,
                            }),
                            t.perks.map((e, t) =>
                              (0, k.jsxs)(
                                `div`,
                                {
                                  className: `flex items-start gap-2.5 leading-relaxed`,
                                  children: [
                                    (0, k.jsx)(`div`, {
                                      className: `w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5`,
                                      children: (0, k.jsx)(ce, {
                                        className: `w-2.5 h-2.5 stroke-[3]`,
                                      }),
                                    }),
                                    (0, k.jsx)(`span`, {
                                      className: e.includes(`PLUS`)
                                        ? `font-bold text-slate-900`
                                        : ``,
                                      children: e,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`button`, {
                      onClick: () => e(t.name),
                      className: `w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${t.buttonStyle}`,
                      children: [
                        (0, k.jsx)(`span`, { children: t.buttonText }),
                        (0, k.jsx)(C, { className: `w-4 h-4` }),
                      ],
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
          (0, k.jsxs)(`div`, {
            className: `max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-200 gap-2.5`,
                children: [
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsxs)(`span`, {
                        className: `text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5`,
                        children: [
                          (0, k.jsx)(Le, { className: `w-3.5 h-3.5` }),
                          `ROI & Savings Calculator`,
                        ],
                      }),
                      (0, k.jsx)(`h3`, {
                        className: `text-lg sm:text-xl font-black text-slate-950 mt-0.5`,
                        children: `Compare In-House Staff vs OneManShow`,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] text-slate-500 mt-0.5`,
                        children: `Standard $35/hr local staff vs dedicated Pakistani work partner.`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 shrink-0`,
                    children: [
                      (0, k.jsx)(`button`, {
                        type: `button`,
                        onClick: () => a(!1),
                        className: `px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${i ? `bg-white text-slate-600 border border-slate-200 hover:text-slate-900` : `bg-emerald-700 text-white shadow-xs`}`,
                        children: `Weekly Shift`,
                      }),
                      (0, k.jsx)(`button`, {
                        type: `button`,
                        onClick: () => a(!0),
                        className: `px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${i ? `bg-emerald-700 text-white shadow-xs` : `bg-white text-slate-600 border border-slate-200 hover:text-slate-900`}`,
                        children: `Starter ($99)`,
                      }),
                    ],
                  }),
                ],
              }),
              i
                ? (0, k.jsxs)(`div`, {
                    className: `mb-3 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsx)(`span`, {
                            className: `font-bold text-slate-900 block text-xs`,
                            children: `Starter Package Selected`,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[11px] text-slate-500`,
                            children: `20 Dedicated Hours / Month · Any time zone support · Strict guideline adherence.`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `text-right font-mono`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `text-lg font-black text-emerald-800`,
                            children: `$99 / mo`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-[10px] text-slate-500 font-sans`,
                            children: `~$4.95/hr effective`,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, k.jsxs)(`div`, {
                    className: `mb-3.5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-1.5`,
                        children: [
                          (0, k.jsxs)(`label`, {
                            htmlFor: `hours-slider`,
                            className: `text-xs font-bold text-slate-900 flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(me, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Weekly Assistant Hours:`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, k.jsxs)(`span`, {
                                className: `text-lg font-black font-mono text-emerald-800`,
                                children: [n, ` hrs/wk`],
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900`,
                                children:
                                  n === 20
                                    ? `Part-Time ($499/mo)`
                                    : n === 40
                                      ? `Full-Time ($899/mo)`
                                      : `$${f}/hr rate`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsx)(`input`, {
                        id: `hours-slider`,
                        type: `range`,
                        min: 10,
                        max: 40,
                        step: 5,
                        value: n,
                        onChange: (e) => r(Number(e.target.value)),
                        className: `w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700`,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex justify-between text-[11px] text-slate-500 mt-1 font-medium`,
                        children: [
                          (0, k.jsx)(`span`, { children: `10 hrs ($275)` }),
                          (0, k.jsx)(`span`, {
                            className: `font-bold text-emerald-800`,
                            children: `20 hrs ($499)`,
                          }),
                          (0, k.jsx)(`span`, { children: `30 hrs ($699)` }),
                          (0, k.jsx)(`span`, {
                            className: `font-bold text-emerald-800`,
                            children: `40 hrs ($899)`,
                          }),
                        ],
                      }),
                    ],
                  }),
              (0, k.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-white border border-slate-200`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5`,
                        children: [`Typical In-House Hire ($35/hr)`],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `text-2xl font-black text-slate-900 font-mono`,
                        children: [
                          `$`,
                          l.toLocaleString(),
                          ` `,
                          (0, k.jsx)(`span`, {
                            className: `text-xs font-normal text-slate-500`,
                            children: `/ mo`,
                          }),
                        ],
                      }),
                      (0, k.jsx)(`div`, {
                        className: `text-[11px] text-slate-500 mt-1`,
                        children: `Base pay without factoring payroll taxes, medical benefits, and recruiting fees.`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-0.5`,
                        children: [
                          (0, k.jsx)(`span`, {
                            className: `text-[11px] font-bold text-emerald-800 uppercase tracking-wider`,
                            children: `OneManShow Dedicated Partner`,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[9px] font-black text-white bg-emerald-700 px-1.5 py-0.5 rounded`,
                            children: `Flat Fee`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `text-2xl font-black text-emerald-800 font-mono`,
                        children: [
                          `$`,
                          c.toLocaleString(),
                          ` `,
                          (0, k.jsx)(`span`, {
                            className: `text-xs font-bold text-emerald-800`,
                            children: `/ mo`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `text-[11px] text-emerald-950 mt-1 flex items-center justify-between`,
                        children: [
                          (0, k.jsx)(`span`, {
                            children: `Vetted talent + 48h backup guarantee`,
                          }),
                          (0, k.jsxs)(`span`, {
                            className: `font-bold`,
                            children: [`$`, f, `/hr`],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `bg-slate-950 text-white rounded-xl p-3.5 sm:p-4 text-center sm:flex sm:items-center sm:justify-between border border-slate-800 shadow-md mb-2.5`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `text-left mb-2 sm:mb-0`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5`,
                        children: [
                          (0, k.jsx)(Re, {
                            className: `w-3.5 h-3.5 text-amber-400`,
                          }),
                          `Estimated Net Cash Saved Annually`,
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `text-2xl sm:text-3xl font-black text-white font-mono mt-0.5`,
                        children: [
                          `$`,
                          Math.round(d).toLocaleString(),
                          ` `,
                          (0, k.jsx)(`span`, {
                            className: `text-xs font-normal text-slate-300`,
                            children: `/ year saved`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`button`, {
                    onClick: () =>
                      e(
                        i
                          ? `Starter / Onboarding`
                          : n === 40
                            ? `Full Time`
                            : `Part Time`,
                      ),
                    className: `inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md cursor-pointer active:scale-95 shrink-0`,
                    children: [
                      (0, k.jsx)(`span`, { children: `Get Started Risk-Free` }),
                      (0, k.jsx)(C, { className: `w-4 h-4 text-white` }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1`,
                children: [
                  (0, k.jsx)(`span`, {
                    children: `Need a custom schedule (e.g. 15, 25, 60+ hrs/wk) or hybrid multi-domain roles?`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => e(`Custom Scope Request`),
                    className: `text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer`,
                    children: `Request Custom Scope →`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }),
  (lt = ({ onOpenConsultation: e }) => {
    let [t, n] = (0, x.useState)(0),
      [r, i] = (0, x.useState)(!0),
      a = (0, x.useRef)(null),
      o = Ze[t],
      s = () => {
        n((e) => (e + 1) % Ze.length);
      };
    return (
      (0, x.useEffect)(
        () => (
          r &&
            (a.current = setInterval(() => {
              s();
            }, 6e3)),
          () => {
            a.current && clearInterval(a.current);
          }
        ),
        [r, t],
      ),
      (0, k.jsx)(`section`, {
        id: `testimonials`,
        className: `py-8 sm:py-10 bg-white border-b border-slate-200 overflow-hidden`,
        children: (0, k.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4`,
              children: [
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                        }),
                        (0, k.jsx)(`span`, {
                          children: `Verified Client Stories`,
                        }),
                      ],
                    }),
                    (0, k.jsx)(`h2`, {
                      className: `text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight`,
                      children: `Trusted by busy founders and global leaders`,
                    }),
                    (0, k.jsx)(`p`, {
                      className: `mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl`,
                      children: `Honest operational feedback from founders, executives, and team leads across North America and Europe delegating to their dedicated work partners in Pakistan.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex items-center gap-2 self-start md:self-end`,
                  children: [
                    (0, k.jsx)(`button`, {
                      onClick: () => i(!r),
                      className: `p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      title: r ? `Pause auto-slide` : `Play auto-slide`,
                      "aria-label": r ? `Pause auto-slide` : `Play auto-slide`,
                      children: r
                        ? (0, k.jsx)(Oe, { className: `w-4 h-4` })
                        : (0, k.jsx)(D, { className: `w-4 h-4` }),
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => {
                        n((e) => (e - 1 + Ze.length) % Ze.length);
                      },
                      className: `p-2 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      "aria-label": `Previous review`,
                      children: (0, k.jsx)(ue, { className: `w-5 h-5` }),
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: s,
                      className: `p-2 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer`,
                      "aria-label": `Next review`,
                      children: (0, k.jsx)(de, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              onMouseEnter: () => i(!1),
              onMouseLeave: () => i(!0),
              className: `bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl overflow-hidden`,
              children: (0, k.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12 items-stretch`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex flex-wrap items-center gap-2 text-xs`,
                            children: [
                              (0, k.jsx)(`div`, {
                                className: `flex items-center gap-1 text-amber-400`,
                                children: [...Array(o.rating || 5)].map(
                                  (e, t) =>
                                    (0, k.jsx)(
                                      Be,
                                      {
                                        className: `w-4 h-4 fill-amber-400 text-amber-400`,
                                      },
                                      t,
                                    ),
                                ),
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-600`,
                                children: `·`,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full`,
                                children: o.serviceUsed,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-slate-600`,
                                children: `·`,
                              }),
                              (0, k.jsxs)(`span`, {
                                className: `text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 px-2.5 py-0.5 rounded-full flex items-center gap-1`,
                                children: [
                                  (0, k.jsx)(w, {
                                    className: `w-3 h-3 text-emerald-400`,
                                  }),
                                  o.impactMetric,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `relative pt-2`,
                            children: [
                              (0, k.jsx)(Ae, {
                                className: `w-8 h-8 text-emerald-600/30 absolute -top-3 -left-2 -z-0 pointer-events-none`,
                              }),
                              (0, k.jsxs)(`p`, {
                                className: `text-base sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed italic relative z-10`,
                                children: [`"`, o.quote, `"`],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsxs)(`div`, {
                                className: `font-bold text-white text-base flex items-center gap-2`,
                                children: [
                                  (0, k.jsx)(`span`, { children: o.role }),
                                  (0, k.jsx)(`span`, {
                                    className: `text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full`,
                                    children: `Verified Client`,
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `text-xs text-slate-300 mt-0.5 font-medium`,
                                children: [
                                  o.company,
                                  ` · `,
                                  (0, k.jsx)(`span`, {
                                    className: `text-slate-400`,
                                    children: o.location,
                                  }),
                                ],
                              }),
                              (0, k.jsx)(`div`, {
                                className: `text-[11px] text-emerald-400 font-medium mt-1`,
                                children: `Partnered via OneManShow`,
                              }),
                            ],
                          }),
                          e &&
                            (0, k.jsxs)(`button`, {
                              onClick: e,
                              className: `inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer active:scale-95`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  children: `Hire Similar Talent`,
                                }),
                                (0, k.jsx)(C, { className: `w-3.5 h-3.5` }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden bg-slate-900 flex flex-col justify-end p-4`,
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950`,
                        children: (0, k.jsx)(`img`, {
                          src: `/images/super_vas_pointing_reviews_1790550319711.jpg`,
                          alt: `Super Hero Pakistani Virtual Assistants proudly pointing toward verified client reviews`,
                          className: `w-full h-full object-contain sm:object-cover transition-all duration-700`,
                          referrerPolicy: `no-referrer`,
                        }),
                      }),
                      (0, k.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none`,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `relative z-10 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-xs border border-white/10 text-white flex items-center justify-between`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `text-[10px] text-slate-300 font-medium truncate max-w-[200px] flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(Re, {
                                className: `w-3 h-3 text-emerald-400`,
                              }),
                              (0, k.jsxs)(`span`, {
                                children: [`Review `, t + 1, ` of `, Ze.length],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: Ze.map((e, r) =>
                              (0, k.jsx)(
                                `button`,
                                {
                                  onClick: () => n(r),
                                  className: `h-1.5 rounded-full transition-all cursor-pointer ${r === t ? `w-5 bg-emerald-500` : `w-1.5 bg-white/40 hover:bg-white/80`}`,
                                  "aria-label": `Go to review ${r + 1}`,
                                },
                                r,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-4`,
              children: Ze.slice(0, 6).map((e, r) =>
                (0, k.jsxs)(
                  `button`,
                  {
                    onClick: () => n(r),
                    className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer ${r === t ? `bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs` : `bg-white border-slate-200 text-slate-600 hover:border-slate-300`}`,
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `text-[11px] font-bold text-slate-900 truncate`,
                        children: e.role,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `text-[10px] text-slate-500 truncate mt-0.5`,
                        children: e.company,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      })
    );
  }),
  (ut = [
    {
      id: `faq-1`,
      category: `Hiring & Matching`,
      question: `How quickly can I be hand-matched with my Pakistan work partner?`,
      answer: `Our average match turnaround is under 48 hours. After our initial discovery call where we audit your daily bottlenecks and tools, we present you with pre-vetted, college-educated candidates from our Pakistan talent roster who already have specific experience in your software and workflows.`,
    },
    {
      id: `faq-2`,
      category: `Pricing & Trial`,
      question: `How does the 100% Risk-Free Trial work?`,
      answer: `Every new partnership starts with a risk-free trial period. If during your first week you feel the fit isn’t 100% ideal, we either re-match you immediately with a different specialist at no additional cost or refund your deposit with zero hassle.`,
    },
    {
      id: `faq-3`,
      category: `Working Hours & Shifts`,
      question: `What working hours and time zones do your Virtual Assistants cover?`,
      answer: `Our dedicated Pakistan team operates on synchronized shifts aligned directly to US Eastern (EST), Central (CST), Pacific (PST), United Kingdom (GMT/BST), and European (CET) business days. Your assistant is online and working during your exact business hours.`,
    },
    {
      id: `faq-4`,
      category: `Security & NDAs`,
      question: `How do you safeguard client data, credentials, and confidential systems?`,
      answer: `We treat confidentiality with enterprise rigor. Every assistant signs strict bilateral legal non-disclosure agreements (NDAs) and IP assignment contracts. We encourage password management via 1Password or Bitwarden so you never reveal plain-text credentials, and we provide an encrypted Client Portal for files.`,
    },
    {
      id: `faq-5`,
      category: `Hiring & Matching`,
      question: `What is the English proficiency and educational background of your assistants?`,
      answer: `Every Virtual Assistant is a university graduate with native-level English fluency, written clarity, and strong critical thinking. Candidates undergo thorough assessments in English communication, technical problem solving, and industry software.`,
    },
    {
      id: `faq-6`,
      category: `Pricing & Trial`,
      question: `What are your rates and how does the hourly rate scale as hours increase?`,
      answer: `We offer transparent tiered pricing with rates starting as low as ~$8.31/hr for part-time (10 hrs/week). As your scheduled hours increase, our progressive volume discount automatically reduces your effective hourly rate so that full-time 40 hours per week is capped at $1,200 per month flat for administrative/operational roles and $1,500 per month flat for tech, software development, and B2B sales roles. All plans are backed by our 100% money-back guarantee.`,
    },
    {
      id: `faq-7`,
      category: `Communication`,
      question: `How do I communicate with my assistant on a day-to-day basis?`,
      answer: `You communicate using whichever tools your company already loves: Slack, Microsoft Teams, WhatsApp, Zoom, Google Meet, or Email. In addition, you get full access to the OneManShow Client Portal for delegating tasks, reviewing time logs, and sharing documents.`,
    },
    {
      id: `faq-8`,
      category: `Working Hours & Shifts`,
      question: `What equipment, internet redundancy, and backup power do associates use?`,
      answer: `Our associates operate in centralized modern office hubs in Islamabad equipped with enterprise dual-fiber internet lines, commercial battery UPS backups, and on-site generators to ensure uninterrupted 100% power and connectivity.`,
    },
    {
      id: `faq-9`,
      category: `Pricing & Trial`,
      question: `Can I scale from part-time to full-time or build a dedicated multi-person team?`,
      answer: `Yes! Many clients begin with a dedicated 20-hour/week executive assistant and quickly expand to full-time (40 hrs/week) or add complementary team members such as an e-commerce support lead, sales prospector, or full-stack web developer.`,
    },
    {
      id: `faq-10`,
      category: `Security & NDAs`,
      question: `Who handles Pakistani labor laws, payroll compliance, and taxes?`,
      answer: `OneManShow manages 100% of local employment compliance, healthcare, statutory benefits, bonuses, and local Pakistani tax filings. For your business, you receive a standard, deductible B2B service invoice in USD, GBP, or EUR.`,
    },
  ]),
  (dt = ({ onOpenConsultation: e }) => {
    let [t, n] = (0, x.useState)(`All`),
      [r, i] = (0, x.useState)(``),
      [a, o] = (0, x.useState)(`faq-1`),
      s = [
        `All`,
        `Hiring & Matching`,
        `Pricing & Trial`,
        `Security & NDAs`,
        `Working Hours & Shifts`,
        `Communication`,
      ],
      c = ut.filter((e) => {
        let n = t === `All` || e.category === t,
          i =
            e.question.toLowerCase().includes(r.toLowerCase()) ||
            e.answer.toLowerCase().includes(r.toLowerCase());
        return n && i;
      }),
      l = (e) => {
        o((t) => (t === e ? null : e));
      };
    return (0, k.jsx)(`section`, {
      id: `faq`,
      className: `py-8 sm:py-10 bg-slate-50 border-b border-slate-200`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `text-center max-w-2xl mx-auto mb-10`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                  }),
                  (0, k.jsx)(`span`, {
                    children: `Frequently Asked Questions`,
                  }),
                ],
              }),
              (0, k.jsx)(`h2`, {
                className: `text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight`,
                children: `Everything you need to know about partnering with us`,
              }),
              (0, k.jsx)(`p`, {
                className: `mt-2 text-xs sm:text-sm text-slate-600`,
                children: `Clear answers about onboarding, security, working hours, and how your trusted work partner in Pakistan will accelerate your company.`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `mb-8 space-y-4`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `relative max-w-xl mx-auto`,
                children: [
                  (0, k.jsx)(Ne, {
                    className: `w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2`,
                  }),
                  (0, k.jsx)(`input`, {
                    type: `text`,
                    placeholder: `Search questions (e.g. trial, hours, security, pricing)...`,
                    value: r,
                    onChange: (e) => i(e.target.value),
                    className: `w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all text-slate-800 shadow-2xs`,
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `flex items-center justify-center gap-1.5 flex-wrap`,
                children: s.map((e) =>
                  (0, k.jsx)(
                    `button`,
                    {
                      onClick: () => n(e),
                      className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${t === e ? `bg-emerald-700 text-white shadow-xs` : `bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-800`}`,
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              c.map((e) => {
                let t = a === e.id;
                return (0, k.jsxs)(
                  `div`,
                  {
                    className: `bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs hover:border-slate-300`,
                    children: [
                      (0, k.jsxs)(`button`, {
                        onClick: () => l(e.id),
                        className: `w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none`,
                        "aria-expanded": t,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0`,
                                children: (0, k.jsx)(fe, {
                                  className: `w-4 h-4`,
                                }),
                              }),
                              (0, k.jsx)(`span`, {
                                className: `font-bold text-sm sm:text-base text-slate-900 text-left`,
                                children: e.question,
                              }),
                            ],
                          }),
                          (0, k.jsx)(le, {
                            className: `w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${t ? `rotate-180 text-emerald-700` : ``}`,
                          }),
                        ],
                      }),
                      t &&
                        (0, k.jsxs)(`div`, {
                          className: `px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50`,
                          children: [
                            (0, k.jsx)(`p`, { children: e.answer }),
                            (0, k.jsxs)(`div`, {
                              className: `mt-3 flex items-center gap-2 text-[11px] font-semibold text-emerald-800`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  className: `w-1.5 h-1.5 rounded-full bg-emerald-500`,
                                }),
                                (0, k.jsx)(`span`, { children: e.category }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  },
                  e.id,
                );
              }),
              c.length === 0 &&
                (0, k.jsxs)(`div`, {
                  className: `text-center py-10 bg-white rounded-2xl border border-slate-200`,
                  children: [
                    (0, k.jsxs)(`p`, {
                      className: `text-sm text-slate-500`,
                      children: [`No questions found matching "`, r, `".`],
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => i(``),
                      className: `mt-2 text-xs font-bold text-emerald-700 hover:underline`,
                      children: `Clear search filter`,
                    }),
                  ],
                }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `mt-10 p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-slate-800`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `space-y-1 text-center sm:text-left`,
                children: [
                  (0, k.jsx)(`h3`, {
                    className: `text-sm sm:text-base font-bold text-white`,
                    children: `Have a specific workflow or question not answered here?`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-400`,
                    children: `Speak directly with our senior operations team on a quick 15-minute discovery consultation.`,
                  }),
                ],
              }),
              (0, k.jsxs)(`button`, {
                onClick: e,
                className: `shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95`,
                children: [
                  (0, k.jsx)(`span`, { children: `Ask Us Directly` }),
                  (0, k.jsx)(C, { className: `w-3.5 h-3.5` }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }),
  (ft = () => {
    let [e, t] = (0, x.useState)({
        fullName: ``,
        workEmail: ``,
        phoneNumber: ``,
        company: ``,
        timezone: `US Eastern (EST/EDT)`,
        serviceType: `Executive Virtual Assistant`,
        serviceShift: `Full Shift`,
        hoursNeeded: `20-30 Hours / Week`,
        notes: ``,
      }),
      [n, r] = (0, x.useState)(!1),
      [i, a] = (0, x.useState)(`Tomorrow at 10:00 AM`);
    return (0, k.jsx)(`section`, {
      id: `contact`,
      className: `py-8 sm:py-10 bg-white border-b border-slate-200`,
      children: (0, k.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-12 items-start`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `lg:col-span-5 space-y-6`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `text-xs font-bold text-emerald-800 uppercase tracking-wider`,
                  children: `Start The Conversation`,
                }),
                (0, k.jsx)(`h2`, {
                  className: `text-3xl sm:text-4xl font-black text-slate-950 tracking-tight`,
                  children: `Schedule your free 30-minute delegation audit.`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-base text-slate-600 leading-relaxed`,
                  children: `Tell us what is on your plate. Our leadership team will review your requirements, design an operational workflow, and present 2–3 curated candidate profiles from our vetted Pakistan talent pool within 48 hours.`,
                }),
                (0, k.jsxs)(`div`, {
                  className: `space-y-4 pt-2`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-start gap-3`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5`,
                          children: (0, k.jsx)(me, { className: `w-4 h-4` }),
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`h4`, {
                              className: `text-sm font-bold text-slate-900`,
                              children: `48-Hour Matching Guarantee`,
                            }),
                            (0, k.jsx)(`p`, {
                              className: `text-xs text-slate-500`,
                              children: `Review resumes, recorded video introductions, and test portfolios within 2 business days.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex items-start gap-3`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5`,
                          children: (0, k.jsx)(Ie, { className: `w-4 h-4` }),
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`h4`, {
                              className: `text-sm font-bold text-slate-900`,
                              children: `100% Money-Back Guarantee`,
                            }),
                            (0, k.jsx)(`p`, {
                              className: `text-xs text-slate-500`,
                              children: `Flexible month-to-month contracts backed by our 14-day 100% money-back satisfaction guarantee.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex items-start gap-3`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5`,
                          children: (0, k.jsx)(xe, { className: `w-4 h-4` }),
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`h4`, {
                              className: `text-sm font-bold text-slate-900`,
                              children: `Direct Pakistan Operations Support`,
                            }),
                            (0, k.jsx)(`p`, {
                              className: `text-xs text-slate-500`,
                              children: `Dedicated Client Success Manager + Assistant backup contingency coverage included.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `font-semibold text-slate-800 block`,
                      children: `Direct Contact & Operational Office:`,
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        `Prime Contact Phone:`,
                        ` `,
                        (0, k.jsx)(`a`, {
                          href: `tel:03005579853`,
                          className: `text-emerald-800 font-bold hover:underline`,
                          children: `03005579853`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center justify-between pt-1`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `font-medium text-slate-700`,
                          children: `WhatsApp:`,
                        }),
                        (0, k.jsxs)(`a`, {
                          href: `https://wa.me/923005579853?text=Hello%20OneManShow,%20I%20am%20interested%20in%20hiring%20a%20Virtual%20Assistant`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `inline-flex items-center gap-1 px-3 py-1 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95`,
                          children: [
                            (0, k.jsx)(`span`, {
                              children: `Chat on WhatsApp`,
                            }),
                            (0, k.jsx)(`span`, { children: `↗` }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `text-slate-500 pt-1 border-t border-slate-200`,
                      children: [
                        (0, k.jsx)(`strong`, { children: `Address:` }),
                        ` 204, Pak Towers, Range Road, Rawalpindi Cantt, 46000, Pakistan`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm`,
              children: n
                ? (0, k.jsxs)(`div`, {
                    className: `py-8 text-center space-y-4 animate-in fade-in duration-300`,
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto`,
                        children: (0, k.jsx)(w, { className: `w-8 h-8` }),
                      }),
                      (0, k.jsx)(`h3`, {
                        className: `text-2xl font-bold text-slate-900`,
                        children: `Consultation Request Received!`,
                      }),
                      (0, k.jsxs)(`p`, {
                        className: `text-sm text-slate-600 max-w-md mx-auto`,
                        children: [
                          `Thank you, `,
                          (0, k.jsx)(`span`, {
                            className: `font-semibold text-slate-800`,
                            children: e.fullName,
                          }),
                          `. One of our Client Success Directors will reach out to `,
                          (0, k.jsx)(`span`, {
                            className: `font-semibold text-slate-800`,
                            children: e.workEmail,
                          }),
                          ` (or phone: `,
                          e.phoneNumber,
                          `) to confirm your discovery call for `,
                          (0, k.jsx)(`span`, {
                            className: `font-bold text-emerald-800`,
                            children: i,
                          }),
                          `.`,
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `p-4 rounded-xl bg-white border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1.5`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `font-semibold text-slate-800`,
                            children: `Booking Overview:`,
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `text-slate-600`,
                            children: [
                              `Service: `,
                              e.serviceType,
                              ` (`,
                              e.serviceShift,
                              `)`,
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `text-slate-600`,
                            children: [`Timezone: `, e.timezone],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `text-slate-600`,
                            children: [`Phone: `, e.phoneNumber],
                          }),
                        ],
                      }),
                      (0, k.jsx)(`button`, {
                        onClick: () => r(!1),
                        className: `text-xs text-emerald-700 font-bold hover:underline cursor-pointer`,
                        children: `Submit another inquiry`,
                      }),
                    ],
                  })
                : (0, k.jsxs)(`form`, {
                    onSubmit: (t) => {
                      (t.preventDefault(),
                        e.fullName && e.workEmail && e.phoneNumber && r(!0));
                    },
                    className: `space-y-4`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-3 gap-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Full Name *`,
                              }),
                              (0, k.jsx)(`input`, {
                                type: `text`,
                                required: !0,
                                placeholder: `e.g. Marcus Sterling`,
                                value: e.fullName,
                                onChange: (n) =>
                                  t({ ...e, fullName: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Work Email *`,
                              }),
                              (0, k.jsx)(`input`, {
                                type: `email`,
                                required: !0,
                                placeholder: `e.g. marcus@company.com`,
                                value: e.workEmail,
                                onChange: (n) =>
                                  t({ ...e, workEmail: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Contact Number (with Country Code) *`,
                              }),
                              (0, k.jsx)(`input`, {
                                type: `tel`,
                                required: !0,
                                placeholder: `+1 (555) 000-0000`,
                                value: e.phoneNumber || ``,
                                onChange: (n) =>
                                  t({ ...e, phoneNumber: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent font-medium`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Company Name`,
                              }),
                              (0, k.jsx)(`input`, {
                                type: `text`,
                                placeholder: `e.g. Apex Global Partners`,
                                value: e.company,
                                onChange: (n) =>
                                  t({ ...e, company: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Your Primary Timezone`,
                              }),
                              (0, k.jsxs)(`select`, {
                                value: e.timezone,
                                onChange: (n) =>
                                  t({ ...e, timezone: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`,
                                children: [
                                  (0, k.jsx)(`option`, {
                                    value: `US Eastern (EST/EDT)`,
                                    children: `US Eastern (EST/EDT)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `US Central (CST/CDT)`,
                                    children: `US Central (CST/CDT)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `US Pacific (PST/PDT)`,
                                    children: `US Pacific (PST/PDT)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `UK London (GMT/BST)`,
                                    children: `UK London (GMT/BST)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Central Europe (CET/CEST)`,
                                    children: `Central Europe (CET/CEST)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Gulf Standard (GST)`,
                                    children: `Gulf Standard (GST)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Australia Eastern (AEST)`,
                                    children: `Australia Eastern (AEST)`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Primary Service Category`,
                              }),
                              (0, k.jsxs)(`select`, {
                                value: e.serviceType,
                                onChange: (n) =>
                                  t({ ...e, serviceType: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent font-medium`,
                                children: [
                                  (0, k.jsx)(`option`, {
                                    value: `Executive Virtual Assistant`,
                                    children: `Executive Virtual Assistant`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Sales & B2B Lead Generation`,
                                    children: `Sales & B2B Lead Generation`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `E-Commerce Store Management`,
                                    children: `E-Commerce Store Management`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Web and App Development`,
                                    children: `Web and App Development`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Bookkeeping & Financial Administration`,
                                    children: `Bookkeeping & Financial Administration`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Social Media & Digital Content Admin`,
                                    children: `Social Media & Digital Content Admin`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Tech & Website Maintenance`,
                                    children: `Tech & Website Maintenance`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Personal & Family Concierge`,
                                    children: `Personal & Family Concierge`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Data Entry & Research`,
                                    children: `Data Entry & Research`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Podcast & Media Repurposing`,
                                    children: `Podcast & Media Repurposing`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Custom Bespoke Scope`,
                                    children: `Custom Bespoke Scope`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Service Package / Type *`,
                              }),
                              (0, k.jsxs)(`select`, {
                                value: e.serviceShift || `Full Shift`,
                                onChange: (n) =>
                                  t({ ...e, serviceShift: n.target.value }),
                                className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent font-medium`,
                                children: [
                                  (0, k.jsx)(`option`, {
                                    value: `Starter / Onboarding`,
                                    children: `Starter / Onboarding (20 Hours / Month - $99)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Part Time`,
                                    children: `Part Time (20 Hours / Week - $499/mo)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Full Shift`,
                                    children: `Full Shift (40 Hours / Week - $899/mo)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Half Time`,
                                    children: `Half Time (Custom Scope)`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsxs)(`label`, {
                            className: `block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(se, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `Select Preferred Discovery Call Window`,
                              }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `grid grid-cols-2 sm:grid-cols-3 gap-2`,
                            children: [
                              `Tomorrow at 10:00 AM`,
                              `Tomorrow at 02:00 PM`,
                              `In 2 Days at 11:30 AM`,
                              `In 2 Days at 04:00 PM`,
                              `Next Monday at 09:00 AM`,
                              `Next Monday at 01:00 PM`,
                            ].map((e) =>
                              (0, k.jsx)(
                                `button`,
                                {
                                  type: `button`,
                                  onClick: () => a(e),
                                  className: `text-xs p-2 rounded-lg border text-left transition-colors cursor-pointer ${i === e ? `bg-emerald-50 border-emerald-600 text-emerald-950 font-bold` : `bg-white border-slate-200 text-slate-600 hover:border-slate-300`}`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsx)(`label`, {
                            className: `block text-xs font-semibold text-slate-700 mb-1`,
                            children: `Describe your main administrative bottlenecks (Optional)`,
                          }),
                          (0, k.jsx)(`textarea`, {
                            rows: 3,
                            placeholder: `e.g. In need of proactive calendar management across SF and London, flight bookings, and weekly QuickBooks reconciliation...`,
                            value: e.notes,
                            onChange: (n) => t({ ...e, notes: n.target.value }),
                            className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent resize-none`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `pt-2`,
                        children: [
                          (0, k.jsxs)(`button`, {
                            type: `submit`,
                            className: `w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95`,
                            children: [
                              (0, k.jsx)(`span`, {
                                children: `Request My Matched Candidate Profiles`,
                              }),
                              (0, k.jsx)(Pe, { className: `w-4 h-4` }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center justify-center gap-2 text-slate-500 text-xs mt-3`,
                            children: [
                              (0, k.jsx)(w, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `No spam. 100% Money-Back Guarantee. Bilateral NDA protected.`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] text-slate-500 text-center`,
                        children: `Protected by bilateral non-disclosure terms. We never share your email or business information.`,
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  }),
  (pt = ({
    onOpenPortal: e,
    onOpenConsultation: t,
    onNavigateToTerms: n,
    onNavigateToService: r,
  }) =>
    (0, k.jsx)(`footer`, {
      className: `bg-slate-950 text-slate-400 text-sm border-t border-slate-800`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `lg:col-span-2 space-y-4`,
                children: [
                  (0, k.jsx)(Ye, { variant: `dark`, size: `lg` }),
                  (0, k.jsxs)(`p`, {
                    className: `text-xs text-slate-400 leading-relaxed max-w-sm`,
                    children: [
                      (0, k.jsx)(`strong`, {
                        className: `text-white font-semibold`,
                        children: `One Stop Business Shop · “Your trusted work partners in Pakistan”`,
                      }),
                      `. Backed by 20+ years of executive experience, delivering dedicated administrative excellence, sales outreach, web development, and certified financial management for businesses worldwide.`,
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `space-y-1.5 text-xs text-slate-400`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-slate-300`,
                        children: [
                          (0, k.jsx)(xe, {
                            className: `w-3.5 h-3.5 text-emerald-500 shrink-0`,
                          }),
                          (0, k.jsx)(`span`, {
                            children: `Headquarters: 204, Pak Towers, Range Road, Rawalpindi Cantt, 46000, Pakistan`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, k.jsx)(we, {
                            className: `w-3.5 h-3.5 text-emerald-500 shrink-0`,
                          }),
                          (0, k.jsx)(`span`, {
                            children: `Encrypted Vault & Confidential Bilateral NDAs · 100% Money-Back Guarantee`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-3`,
                    children: [
                      (0, k.jsx)(`button`, {
                        onClick: e,
                        className: `px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-emerald-400 text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer`,
                        children: `Client Portal Login`,
                      }),
                      (0, k.jsx)(`button`, {
                        onClick: t,
                        className: `px-3.5 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer shadow-sm`,
                        children: `Book Discovery Call`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `text-xs font-bold text-white uppercase tracking-wider`,
                    children: `Top Services`,
                  }),
                  (0, k.jsxs)(`ul`, {
                    className: `space-y-2 text-xs`,
                    children: [
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Executive Virtual Assistants`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Sales & B2B Lead Generation`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `E-Commerce Store Management`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Web & App Development`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Bookkeeping & Financial Admin`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `text-xs font-bold text-white uppercase tracking-wider`,
                    children: `Specialized Roles`,
                  }),
                  (0, k.jsxs)(`ul`, {
                    className: `space-y-2 text-xs`,
                    children: [
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Social Media & Content Marketing`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Tech & Website Maintenance`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Data Entry & Intelligence`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Personal & Family Concierge`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#top-services`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Podcast & Media Repurposing`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `text-xs font-bold text-white uppercase tracking-wider`,
                    children: `Work Partners & FAQ`,
                  }),
                  (0, k.jsxs)(`ul`, {
                    className: `space-y-2 text-xs`,
                    children: [
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#why-pakistan`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Why Pakistan Work Partners`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#how-it-works`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `4-Step Vetting & Match Process`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#calculator`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Salary & ROI Calculator`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsx)(`a`, {
                          href: `#testimonials`,
                          className: `hover:text-emerald-400 transition-colors`,
                          children: `Client Success Stories`,
                        }),
                      }),
                      (0, k.jsx)(`li`, {
                        children: (0, k.jsxs)(`a`, {
                          href: `#faq`,
                          className: `text-slate-300 hover:text-white font-semibold transition-colors flex items-center gap-1`,
                          children: [
                            (0, k.jsx)(`span`, {
                              children: `Frequently Asked Questions (FAQ)`,
                            }),
                            (0, k.jsx)(ie, { className: `w-3 h-3` }),
                          ],
                        }),
                      }),
                      n &&
                        (0, k.jsx)(`li`, {
                          children: (0, k.jsxs)(`button`, {
                            onClick: n,
                            className: `text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1`,
                            children: [
                              (0, k.jsx)(`span`, {
                                children: `Terms & Conditions`,
                              }),
                              (0, k.jsx)(ie, { className: `w-3 h-3` }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `pt-6 pb-6 border-t border-slate-800/80`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `mb-4 pb-4 border-b border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-slate-400`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`,
                      }),
                      (0, k.jsx)(`span`, {
                        className: `font-semibold text-slate-200`,
                        children: `Legal & Transparency:`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: `Enterprise NDA, 100% Client IP Ownership, & 48-Hour Continuity SLA.`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, k.jsxs)(`button`, {
                        onClick: n,
                        className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-700/60 hover:border-emerald-500 font-bold transition-all cursor-pointer shadow-xs active:scale-95`,
                        children: [
                          (0, k.jsx)(Fe, {
                            className: `w-3.5 h-3.5 text-emerald-400`,
                          }),
                          (0, k.jsx)(`span`, {
                            children: `Terms and Conditions`,
                          }),
                        ],
                      }),
                      (0, k.jsx)(`span`, {
                        className: `text-slate-600`,
                        children: `·`,
                      }),
                      (0, k.jsx)(`button`, {
                        onClick: n,
                        className: `text-slate-400 hover:text-white font-medium transition-colors cursor-pointer`,
                        children: `Privacy Policy`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex flex-col md:flex-row items-center justify-between gap-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `text-center md:text-left`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `text-xs font-bold text-white uppercase tracking-wider block`,
                        children: `Connect With OneManShow`,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-xs text-slate-400 mt-0.5`,
                        children: `Follow our official channels for operational tips, founder case studies, and remote team insights.`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-2.5 flex-wrap justify-center`,
                    children: [
                      (0, k.jsxs)(`a`, {
                        href: `#testimonials`,
                        className: `inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white text-xs font-bold transition-all border border-slate-800 hover:border-emerald-500 shadow-xs cursor-pointer active:scale-95`,
                        title: `Client Reviews & Ratings`,
                        "aria-label": `Client Reviews`,
                        children: [
                          (0, k.jsx)(Be, {
                            className: `w-3.5 h-3.5 text-amber-400 fill-amber-400`,
                          }),
                          (0, k.jsx)(`span`, { children: `Reviews` }),
                        ],
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://www.fiverr.com/s/8xz3prZ`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#1dbf73] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#1dbf73] shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on Fiverr`,
                        "aria-label": `Fiverr`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M23.003 13.565c-.046-1.579-.475-2.883-1.321-3.791-.849-.91-1.996-1.368-3.414-1.368-1.547 0-2.827.525-3.805 1.571-.979 1.045-1.488 2.457-1.488 4.214 0 1.777.514 3.208 1.503 4.264.99 1.055 2.295 1.583 3.89 1.583 1.348 0 2.463-.357 3.313-1.077.851-.718 1.31-1.688 1.353-2.903h-2.585c-.059.563-.254.98-.584 1.25-.331.272-.77.409-1.319.409-.646 0-1.182-.228-1.604-.683-.424-.457-.656-1.109-.687-1.956h6.946v-.518zm-4.708-3.329c.563 0 1.026.182 1.378.544.354.364.555.882.593 1.564h-3.957c.07-.682.28-1.205.626-1.564.348-.362.799-.544 1.36-.544zm-9.336-1.849h-2.56v1.273h-1.696v1.89h1.696v6.942h2.56v-6.942h2.209v-1.89h-2.209v-.895c0-.46.096-.78.293-.956.196-.178.536-.266 1.018-.266.353 0 .684.037.989.112v-1.884c-.452-.086-.967-.129-1.545-.129-.982 0-1.748.243-2.296.726-.549.484-.823 1.228-.823 2.228v1.064h-1.44v1.89h1.44v6.942h2.56v-6.942h2.209v-1.89h-2.209v-1.273zM5.5 5.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z`,
                          }),
                        }),
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://linkedin.com/company/onemanshow`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#0A66C2] shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on LinkedIn`,
                        "aria-label": `LinkedIn`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z`,
                          }),
                        }),
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://facebook.com/onemanshowpro`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#1877F2] shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on Facebook`,
                        "aria-label": `Facebook`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`,
                          }),
                        }),
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://instagram.com/onemanshowpro`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#E4405F] shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on Instagram`,
                        "aria-label": `Instagram`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`,
                          }),
                        }),
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://youtube.com/@onemanshowpro`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#FF0000] shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on YouTube`,
                        "aria-label": `YouTube`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`,
                          }),
                        }),
                      }),
                      (0, k.jsx)(`a`, {
                        href: `https://tiktok.com/@onemanshowpro`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `w-9 h-9 rounded-xl bg-slate-900 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-slate-700 shadow-xs cursor-pointer active:scale-95`,
                        title: `OneManShow on TikTok`,
                        "aria-label": `TikTok`,
                        children: (0, k.jsx)(`svg`, {
                          className: `w-4 h-4 fill-current`,
                          viewBox: `0 0 24 24`,
                          children: (0, k.jsx)(`path`, {
                            d: `M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-6.27 6.34 6.34 6.34 0 0 0 10.83 4.47 6.27 6.27 0 0 0 1.81-4.46V8.62a8.28 8.28 0 0 0 5.17 1.83v-3.45a4.84 4.84 0 0 1-2.28-.31z`,
                          }),
                        }),
                      }),
                      (0, k.jsxs)(`a`, {
                        href: `https://wa.me/923005579853?text=Hello%20OneManShow,%20I%20am%20interested%20in%20hiring%20a%20Virtual%20Assistant`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95`,
                        title: `Chat with OneManShow on WhatsApp`,
                        "aria-label": `Chat on WhatsApp`,
                        children: [
                          (0, k.jsx)(`svg`, {
                            className: `w-4 h-4 fill-current`,
                            viewBox: `0 0 24 24`,
                            children: (0, k.jsx)(`path`, {
                              d: `M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.948.825 2.796.826h.005c3.18 0 5.767-2.587 5.768-5.766 0-1.542-.601-2.992-1.692-4.082a5.729 5.729 0 0 0-4.081-1.931zm3.39 8.174c-.145.408-.847.781-1.18.827-.333.047-.768.069-1.242-.083-.306-.098-.7-.228-1.206-.446-2.145-.928-3.535-3.099-3.642-3.242-.107-.143-.87-1.157-.87-2.207 0-1.05.55-1.567.746-1.782.196-.215.428-.269.571-.269.143 0 .286.002.411.008.132.006.309-.05.483.369.174.419.596 1.455.648 1.562.052.107.087.233.018.376-.07.143-.105.233-.21.358-.105.125-.221.28-.316.376-.105.105-.215.22-.093.43.122.21.543.896 1.164 1.45 1.034.922 1.452 1.051 1.666 1.141.214.09.34.076.467-.07.127-.146.545-.635.69-853.145-.218.29-.182.49-.109.2.073 1.272.6 1.49.709.218.109.363.163.418.254.055.091.055.526-.09 1.034z`,
                            }),
                          }),
                          (0, k.jsx)(`span`, { children: `WhatsApp` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500`,
            children: [
              (0, k.jsxs)(`div`, {
                children: [
                  `© `,
                  new Date().getFullYear(),
                  ` OneManShow. All rights reserved. · 20+ Years Experience`,
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex items-center gap-6`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `text-emerald-400 font-bold`,
                    children: `One Stop Business Shop · “Your trusted work partners in Pakistan”`,
                  }),
                  (0, k.jsx)(`span`, {
                    className: `text-slate-600`,
                    children: `·`,
                  }),
                  (0, k.jsx)(`a`, {
                    href: `#faq`,
                    className: `hover:text-slate-300 transition-colors`,
                    children: `FAQ`,
                  }),
                  (0, k.jsx)(`span`, {
                    className: `text-slate-600`,
                    children: `·`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: n,
                    className: `hover:text-slate-300 transition-colors cursor-pointer`,
                    children: `Privacy Policy`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: n,
                    className: `hover:text-slate-300 transition-colors cursor-pointer`,
                    children: `Terms and Conditions`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })),
  (mt = ({ isOpen: e, onClose: t, preselectedService: n }) => {
    let [r, i] = (0, x.useState)(``),
      [a, o] = (0, x.useState)(``),
      [s, c] = (0, x.useState)(``),
      [l, u] = (0, x.useState)(``),
      [d, f] = (0, x.useState)(`US Eastern (EST)`),
      [p, m] = (0, x.useState)(n || `Executive Virtual Assistant`),
      [h, g] = (0, x.useState)(`Full Shift`),
      [_, v] = (0, x.useState)(!1);
    return (
      (0, x.useEffect)(() => {
        n &&
          (n.includes(`Starter`) || n.includes(`99`)
            ? g(`Starter / Onboarding`)
            : n.includes(`Part`) || n.includes(`499`)
              ? g(`Part Time`)
              : n.includes(`Full`) || n.includes(`899`)
                ? g(`Full Shift`)
                : m(n));
      }, [n, e]),
      e
        ? (0, k.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, k.jsxs)(`div`, {
              className: `relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `bg-slate-950 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm`,
                          children: (0, k.jsx)(se, { className: `w-4 h-4` }),
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`h3`, {
                              className: `text-base font-black text-white`,
                              children: `Book Discovery Consultation`,
                            }),
                            (0, k.jsx)(`p`, {
                              className: `text-xs text-emerald-400 font-medium`,
                              children: `Free 30-min strategy session · 100% Money-Back Guarantee`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: t,
                      className: `text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer`,
                      "aria-label": `Close modal`,
                      children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `p-6 max-h-[85vh] overflow-y-auto`,
                  children: _
                    ? (0, k.jsxs)(`div`, {
                        className: `py-6 text-center space-y-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto`,
                            children: (0, k.jsx)(w, { className: `w-7 h-7` }),
                          }),
                          (0, k.jsx)(`h4`, {
                            className: `text-xl font-black text-slate-950`,
                            children: `Consultation Scheduled!`,
                          }),
                          (0, k.jsxs)(`p`, {
                            className: `text-sm text-slate-600`,
                            children: [
                              `A calendar invitation with Google Meet / Zoom coordinates has been prepared for `,
                              (0, k.jsx)(`strong`, {
                                className: `text-slate-900`,
                                children: a,
                              }),
                              `.`,
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                children: [
                                  `Client Phone: `,
                                  (0, k.jsx)(`span`, {
                                    className: `font-semibold text-slate-800`,
                                    children: s,
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  `Service: `,
                                  (0, k.jsx)(`span`, {
                                    className: `font-semibold text-slate-800`,
                                    children: p,
                                  }),
                                  ` (`,
                                  h,
                                  `)`,
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  `Company: `,
                                  (0, k.jsx)(`span`, {
                                    className: `font-semibold text-slate-800`,
                                    children: l || `Your Company`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`button`, {
                            onClick: t,
                            className: `mt-4 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg cursor-pointer`,
                            children: `Close & Return`,
                          }),
                        ],
                      })
                    : (0, k.jsxs)(`form`, {
                        onSubmit: (e) => {
                          (e.preventDefault(), r && a && s && v(!0));
                        },
                        className: `space-y-3.5`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Full Name *`,
                              }),
                              (0, k.jsx)(`input`, {
                                type: `text`,
                                required: !0,
                                placeholder: `e.g. Eleanor Vance`,
                                value: r,
                                onChange: (e) => i(e.target.value),
                                className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `grid grid-cols-1 sm:grid-cols-2 gap-3`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`label`, {
                                    className: `block text-xs font-semibold text-slate-700 mb-1`,
                                    children: `Work Email *`,
                                  }),
                                  (0, k.jsx)(`input`, {
                                    type: `email`,
                                    required: !0,
                                    placeholder: `e.g. eleanor@lumina.io`,
                                    value: a,
                                    onChange: (e) => o(e.target.value),
                                    className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`label`, {
                                    className: `block text-xs font-semibold text-slate-700 mb-1`,
                                    children: `Contact Number (with Country Code) *`,
                                  }),
                                  (0, k.jsx)(`input`, {
                                    type: `tel`,
                                    required: !0,
                                    placeholder: `+1 (555) 000-0000 or +44...`,
                                    value: s,
                                    onChange: (e) => c(e.target.value),
                                    className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-3`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`label`, {
                                    className: `block text-xs font-semibold text-slate-700 mb-1`,
                                    children: `Company Name`,
                                  }),
                                  (0, k.jsx)(`input`, {
                                    type: `text`,
                                    placeholder: `e.g. Lumina Health`,
                                    value: l,
                                    onChange: (e) => u(e.target.value),
                                    className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`label`, {
                                    className: `block text-xs font-semibold text-slate-700 mb-1`,
                                    children: `Primary Timezone`,
                                  }),
                                  (0, k.jsxs)(`select`, {
                                    value: d,
                                    onChange: (e) => f(e.target.value),
                                    className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                                    children: [
                                      (0, k.jsx)(`option`, {
                                        value: `US Eastern (EST)`,
                                        children: `US Eastern (EST)`,
                                      }),
                                      (0, k.jsx)(`option`, {
                                        value: `US Pacific (PST)`,
                                        children: `US Pacific (PST)`,
                                      }),
                                      (0, k.jsx)(`option`, {
                                        value: `UK London (GMT)`,
                                        children: `UK London (GMT)`,
                                      }),
                                      (0, k.jsx)(`option`, {
                                        value: `Central Europe (CET)`,
                                        children: `Central Europe (CET)`,
                                      }),
                                      (0, k.jsx)(`option`, {
                                        value: `Gulf Standard (GST)`,
                                        children: `Gulf Standard (GST)`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Service Category`,
                              }),
                              (0, k.jsxs)(`select`, {
                                value: p,
                                onChange: (e) => m(e.target.value),
                                className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium`,
                                children: [
                                  (0, k.jsx)(`option`, {
                                    value: `Custom Request / Bespoke Scope`,
                                    children: `Custom Request / Bespoke Scope`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Executive Virtual Assistant`,
                                    children: `Executive Virtual Assistant`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Sales & B2B Lead Generation`,
                                    children: `Sales & B2B Lead Generation`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `E-Commerce Store Management`,
                                    children: `E-Commerce Store Management`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Web and App Development`,
                                    children: `Web and App Development`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Bookkeeping & Financial Administration`,
                                    children: `Bookkeeping & Financial Administration`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Social Media & Content Marketing`,
                                    children: `Social Media & Content Marketing`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Tech & Website Maintenance`,
                                    children: `Tech & Website Maintenance`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Personal & Family Concierge`,
                                    children: `Personal & Family Concierge`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Data Entry & Research`,
                                    children: `Data Entry & Research`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Podcast & Media Repurposing`,
                                    children: `Podcast & Media Repurposing`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`label`, {
                                className: `block text-xs font-semibold text-slate-700 mb-1`,
                                children: `Service Package / Type *`,
                              }),
                              (0, k.jsxs)(`select`, {
                                value: h,
                                onChange: (e) => g(e.target.value),
                                className: `w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium bg-emerald-50/50`,
                                children: [
                                  (0, k.jsx)(`option`, {
                                    value: `Starter / Onboarding`,
                                    children: `Starter / Onboarding (20 hrs/mo - $99)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Part Time`,
                                    children: `Part Time (20 hrs/week - $499/mo)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Full Shift`,
                                    children: `Full Shift (40 hrs/week - $899/mo)`,
                                  }),
                                  (0, k.jsx)(`option`, {
                                    value: `Half Time`,
                                    children: `Half Time (Custom Scope)`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `pt-2`,
                            children: (0, k.jsxs)(`button`, {
                              type: `submit`,
                              className: `w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  children: `Confirm Free Discovery Session`,
                                }),
                                (0, k.jsx)(Pe, { className: `w-4 h-4` }),
                              ],
                            }),
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1`,
                            children: [
                              (0, k.jsx)(Fe, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              (0, k.jsx)(`span`, {
                                children: `100% Money-Back Guarantee · Bilateral NDA Protected`,
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              ],
            }),
          })
        : null
    );
  }),
  (ht = () => {
    let [e, t] = (0, x.useState)(!1),
      [n, r] = (0, x.useState)(``),
      [i, a] = (0, x.useState)(!1),
      [o, s] = (0, x.useState)([
        {
          id: `init-1`,
          sender: `agent`,
          text: `Hello! I am Hassan from OneManShow. How can I assist you with finding your trusted work partner in Pakistan today?`,
          timestamp: `Just now`,
        },
      ]),
      c = (0, x.useRef)(null),
      l = () => {
        c.current?.scrollIntoView({ behavior: `smooth` });
      };
    (0, x.useEffect)(() => {
      e && l();
    }, [o, e]);
    let u = [
        `How quickly can we match with an executive VA?`,
        `What timezones does your Pakistan team cover?`,
        `How is client data encrypted & secured?`,
        `What are your billing plans?`,
      ],
      d = (e) => {
        let t = e || n;
        if (!t.trim()) return;
        let i = {
          id: `usr-${Date.now()}`,
          sender: `user`,
          text: t.trim(),
          timestamp: new Date().toLocaleTimeString([], {
            hour: `2-digit`,
            minute: `2-digit`,
          }),
        };
        (s((e) => [...e, i]),
          e || r(``),
          a(!0),
          setTimeout(() => {
            let e = `Thank you for reaching out! Our team in Pakistan is ready to assist. You can book a free discovery call to receive 2-3 matched candidate profiles within 48 hours.`,
              n = t.toLowerCase();
            n.includes(`quickly`) || n.includes(`match`) || n.includes(`time`)
              ? (e = `We guarantee matching within 48 hours! After a brief 20-minute discovery call to assess your tools and preferences, we present 2 curated candidate profiles from our top 1% vetted Pakistan talent pool.`)
              : n.includes(`timezone`) ||
                  n.includes(`hours`) ||
                  n.includes(`shift`)
                ? (e = `Our dedicated Pakistan team operates 24/7 with full shifts aligned to US Eastern, Central, Pacific, UK (GMT/BST), and European (CET) working hours. Your assistant works directly during your business day.`)
                : n.includes(`security`) ||
                    n.includes(`encrypted`) ||
                    n.includes(`nda`) ||
                    n.includes(`data`)
                  ? (e = `We provide strict bilateral NDAs and an encrypted client portal for all file exchanges. Every associate signs a binding legal confidentiality agreement.`)
                  : (n.includes(`rate`) ||
                      n.includes(`cost`) ||
                      n.includes(`pricing`) ||
                      n.includes(`plan`)) &&
                    (e = `Our base rate is $15/hr for 10 hours/week, and as hours increase our progressive volume discount reduces the rate down to $1,200/month flat for 40 hours full-time dedicated support!`);
            let r = {
              id: `agent-${Date.now()}`,
              sender: `agent`,
              text: e,
              timestamp: new Date().toLocaleTimeString([], {
                hour: `2-digit`,
                minute: `2-digit`,
              }),
            };
            (s((e) => [...e, r]), a(!1));
          }, 900));
      };
    return (0, k.jsxs)(`div`, {
      className: `fixed bottom-5 right-5 z-50`,
      children: [
        e &&
          (0, k.jsxs)(`div`, {
            className: `w-[360px] sm:w-[390px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-3 animate-in slide-in-from-bottom-5 duration-200`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-9 h-9 rounded-full bg-emerald-700 border border-white/20 flex items-center justify-center font-bold text-white text-xs`,
                            children: `HR`,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-slate-950 rounded-full`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `font-bold text-sm text-white flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(`span`, { children: `Hassan Raza` }),
                              (0, k.jsx)(`span`, {
                                className: `text-[10px] bg-green-900/80 text-green-300 border border-green-700/50 px-1.5 py-0.5 rounded font-bold`,
                                children: `Online`,
                              }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-[11px] text-slate-400`,
                            children: `OneManShow · One Stop Business Shop`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => t(!1),
                    className: `text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer`,
                    "aria-label": `Close chat`,
                    children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `bg-emerald-50/90 border-b border-emerald-100 px-3 py-1.5 flex items-center justify-between text-[11px] text-emerald-950`,
                children: [
                  (0, k.jsxs)(`span`, {
                    className: `flex items-center gap-1 font-medium`,
                    children: [
                      (0, k.jsx)(me, { className: `w-3 h-3 text-emerald-700` }),
                      `Response: Under 60s`,
                    ],
                  }),
                  (0, k.jsxs)(`a`, {
                    href: `https://wa.me/923005579853?text=Hello%20OneManShow,%20I%20am%20interested%20in%20hiring%20a%20Virtual%20Assistant`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-0.5 rounded transition-colors`,
                    children: [
                      (0, k.jsx)(`span`, { children: `WhatsApp Chat` }),
                      (0, k.jsx)(`span`, {
                        className: `text-xs`,
                        children: `↗`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50`,
                children: [
                  o.map((e) =>
                    (0, k.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col ${e.sender === `user` ? `items-end` : `items-start`}`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${e.sender === `user` ? `bg-emerald-700 text-white rounded-br-xs font-medium` : `bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs`}`,
                            children: e.text,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[10px] text-slate-400 mt-1 px-1`,
                            children: e.timestamp,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  i &&
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 w-fit text-xs text-slate-500 shadow-2xs`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce`,
                        }),
                        (0, k.jsx)(`span`, {
                          className: `w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce [animation-delay:0.2s]`,
                        }),
                        (0, k.jsx)(`span`, {
                          className: `w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce [animation-delay:0.4s]`,
                        }),
                        (0, k.jsx)(`span`, {
                          className: `text-[11px] text-slate-400 ml-1`,
                          children: `Hassan is typing...`,
                        }),
                      ],
                    }),
                  (0, k.jsx)(`div`, { ref: c }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto`,
                children: u.map((e, t) =>
                  (0, k.jsx)(
                    `button`,
                    {
                      onClick: () => d(e),
                      className: `whitespace-nowrap px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 rounded-md border border-slate-200 transition-colors cursor-pointer`,
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
              (0, k.jsxs)(`div`, {
                className: `p-3 bg-white border-t border-slate-200 flex items-center gap-2`,
                children: [
                  (0, k.jsx)(`input`, {
                    type: `text`,
                    placeholder: `Ask about staffing, vetting, or rates...`,
                    value: n,
                    onChange: (e) => r(e.target.value),
                    onKeyDown: (e) => e.key === `Enter` && d(),
                    className: `flex-1 px-3 py-2 text-xs bg-slate-100 rounded-lg border border-transparent focus:bg-white focus:border-emerald-700 focus:outline-none`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => d(),
                    disabled: !n.trim(),
                    className: `p-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-lg transition-colors cursor-pointer`,
                    "aria-label": `Send message`,
                    children: (0, k.jsx)(Pe, { className: `w-4 h-4` }),
                  }),
                ],
              }),
            ],
          }),
        (0, k.jsxs)(`div`, {
          className: `flex items-center gap-2.5`,
          children: [
            (0, k.jsxs)(`a`, {
              href: `https://wa.me/923005579853?text=Hello%20OneManShow,%20I%20am%20interested%20in%20hiring%20a%20Virtual%20Assistant`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              className: `group flex items-center gap-2 px-3.5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer font-bold text-xs active:scale-95`,
              "aria-label": `Chat on WhatsApp`,
              title: `Chat on WhatsApp`,
              children: [
                (0, k.jsx)(`svg`, {
                  className: `w-5 h-5 fill-current`,
                  viewBox: `0 0 24 24`,
                  children: (0, k.jsx)(`path`, {
                    d: `M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.948.825 2.796.826h.005c3.18 0 5.767-2.587 5.768-5.766 0-1.542-.601-2.992-1.692-4.082a5.729 5.729 0 0 0-4.081-1.931zm3.39 8.174c-.145.408-.847.781-1.18.827-.333.047-.768.069-1.242-.083-.306-.098-.7-.228-1.206-.446-2.145-.928-3.535-3.099-3.642-3.242-.107-.143-.87-1.157-.87-2.207 0-1.05.55-1.567.746-1.782.196-.215.428-.269.571-.269.143 0 .286.002.411.008.132.006.309-.05.483.369.174.419.596 1.455.648 1.562.052.107.087.233.018.376-.07.143-.105.233-.21.358-.105.125-.221.28-.316.376-.105.105-.215.22-.093.43.122.21.543.896 1.164 1.45 1.034.922 1.452 1.051 1.666 1.141.214.09.34.076.467-.07.127-.146.545-.635.69-853.145-.218.29-.182.49-.109.2.073 1.272.6 1.49.709.218.109.363.163.418.254.055.091.055.526-.09 1.034z`,
                  }),
                }),
                (0, k.jsx)(`span`, {
                  className: `hidden sm:inline`,
                  children: `WhatsApp`,
                }),
              ],
            }),
            !e &&
              (0, k.jsxs)(`button`, {
                onClick: () => t(!0),
                className: `group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer font-bold text-xs active:scale-95`,
                "aria-label": `Open live chat`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, k.jsx)(Ee, { className: `w-5 h-5` }),
                      (0, k.jsx)(`span`, {
                        className: `absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border border-emerald-950`,
                      }),
                    ],
                  }),
                  (0, k.jsx)(`span`, { children: `Live Chat` }),
                ],
              }),
          ],
        }),
      ],
    });
  }),
  (gt = ({
    currentTab: e,
    onLogout: t,
    onExitToWebsite: n,
    onToggleSidebar: r,
  }) =>
    (0, k.jsxs)(`header`, {
      className: `h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            r &&
              (0, k.jsx)(`button`, {
                onClick: r,
                className: `md:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100`,
                "aria-label": `Toggle navigation menu`,
                children: (0, k.jsx)(T, { className: `w-5 h-5` }),
              }),
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-2 text-xs`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `font-semibold text-slate-500`,
                  children: `Apex Capital Partners`,
                }),
                (0, k.jsx)(`span`, {
                  className: `text-slate-300`,
                  children: `/`,
                }),
                (0, k.jsx)(`span`, {
                  className: `font-semibold text-slate-500`,
                  children: `Workspace`,
                }),
                (0, k.jsx)(`span`, {
                  className: `text-slate-300`,
                  children: `/`,
                }),
                (0, k.jsx)(`span`, {
                  className: `font-bold text-slate-900 capitalize`,
                  children: e,
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `flex items-center gap-3 sm:gap-4`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-medium`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `w-2 h-2 rounded-full bg-emerald-600 animate-pulse`,
                }),
                (0, k.jsx)(`span`, { children: `Live Chat Active` }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `hidden sm:flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200`,
              children: [
                (0, k.jsx)(we, { className: `w-3.5 h-3.5 text-emerald-700` }),
                (0, k.jsx)(`span`, {
                  className: `font-mono text-[11px] font-semibold`,
                  children: `AES-256 Vault Active`,
                }),
              ],
            }),
            (0, k.jsxs)(`button`, {
              onClick: n,
              className: `text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer`,
              title: `Return to Marketing Landing Page`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `hidden sm:inline`,
                  children: `Marketing Site`,
                }),
                (0, k.jsx)(ve, { className: `w-3.5 h-3.5` }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-2 pl-2 border-l border-slate-200`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs`,
                  children: `MS`,
                }),
                (0, k.jsxs)(`div`, {
                  className: `hidden md:block text-left`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-xs font-bold text-slate-900 leading-tight`,
                      children: `Marcus Sterling`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-[10px] text-slate-400`,
                      children: `Managing Director`,
                    }),
                  ],
                }),
                (0, k.jsx)(`button`, {
                  onClick: t,
                  className: `p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer ml-1`,
                  title: `Lock Vault & Log Out`,
                  "aria-label": `Log Out`,
                  children: (0, k.jsx)(Te, { className: `w-4 h-4` }),
                }),
              ],
            }),
          ],
        }),
      ],
    })),
  (_t = ({
    currentTab: e,
    onSelectTab: t,
    onExitToWebsite: n,
    isOpenMobile: r,
    onCloseMobile: i,
  }) =>
    (0, k.jsxs)(k.Fragment, {
      children: [
        r &&
          (0, k.jsx)(`div`, {
            onClick: i,
            className: `fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs md:hidden`,
          }),
        (0, k.jsxs)(`aside`, {
          className: `fixed md:sticky top-0 z-50 md:z-20 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 transition-transform duration-200 ${r ? `translate-x-0` : `-translate-x-full md:translate-x-0`}`,
          children: [
            (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsxs)(`div`, {
                  className: `h-16 px-4 flex items-center justify-between border-b border-slate-800`,
                  children: [
                    (0, k.jsx)(Ye, { variant: `dark`, size: `sm` }),
                    i &&
                      (0, k.jsx)(`button`, {
                        onClick: i,
                        className: `md:hidden p-1 text-slate-400 hover:text-white`,
                        "aria-label": `Close navigation`,
                        children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                      }),
                  ],
                }),
                (0, k.jsxs)(`nav`, {
                  className: `p-4 space-y-1.5`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2`,
                      children: `Client Workspace`,
                    }),
                    [
                      { id: `overview`, label: `Overview`, icon: Ce },
                      {
                        id: `assistant`,
                        label: `Dedicated Assistant`,
                        icon: Ue,
                        indicator: !0,
                      },
                      {
                        id: `tasks`,
                        label: `Tasks & Delegation`,
                        icon: ze,
                        badge: `2 Active`,
                      },
                      {
                        id: `documents`,
                        label: `Documents & Files`,
                        icon: ye,
                        badge: `4`,
                      },
                      { id: `billing`, label: `Plan & Billing`, icon: he },
                    ].map((n) => {
                      let r = n.icon,
                        a = e === n.id;
                      return (0, k.jsxs)(
                        `button`,
                        {
                          onClick: () => {
                            (t(n.id), i && i());
                          },
                          className: `w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${a ? `bg-emerald-700 text-white shadow-sm` : `text-slate-400 hover:text-white hover:bg-slate-800`}`,
                          children: [
                            (0, k.jsxs)(`div`, {
                              className: `flex items-center gap-2.5`,
                              children: [
                                (0, k.jsx)(r, { className: `w-4 h-4` }),
                                (0, k.jsx)(`span`, { children: n.label }),
                              ],
                            }),
                            n.badge &&
                              (0, k.jsx)(`span`, {
                                className: `text-[10px] px-2 py-0.5 rounded-full font-bold ${a ? `bg-emerald-950/80 text-emerald-100` : `bg-slate-800 text-slate-300`}`,
                                children: n.badge,
                              }),
                            n.indicator &&
                              (0, k.jsx)(`span`, {
                                className: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`,
                              }),
                          ],
                        },
                        n.id,
                      );
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `p-4 border-t border-slate-800 space-y-3`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `px-3 py-2.5 rounded-xl bg-slate-800/60 flex items-center gap-3`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-xs`,
                      children: `MS`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `text-xs`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `font-semibold text-white`,
                          children: `Marcus Sterling`,
                        }),
                        (0, k.jsx)(`div`, {
                          className: `text-[11px] text-slate-400`,
                          children: `Apex Partners`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`button`, {
                  onClick: n,
                  className: `w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer`,
                  children: [
                    (0, k.jsx)(re, { className: `w-3.5 h-3.5` }),
                    (0, k.jsx)(`span`, { children: `Return to Website` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })),
  (vt = ({ documents: e, tasks: t, onNavigateTab: n, onOpenUpload: r }) => {
    let i = t.filter((e) => e.status !== `Completed`);
    return (0, k.jsxs)(`div`, {
      className: `p-4 sm:p-6 lg:p-8 space-y-6`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `relative z-10 max-w-2xl space-y-2`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800/80 text-emerald-200 text-xs font-medium`,
                  children: [
                    (0, k.jsx)(we, {
                      className: `w-3.5 h-3.5 text-emerald-300`,
                    }),
                    (0, k.jsx)(`span`, {
                      children: `Secure Client Workspace · Islamabad Operations`,
                    }),
                  ],
                }),
                (0, k.jsx)(`h2`, {
                  className: `text-2xl sm:text-3xl font-extrabold tracking-tight text-white`,
                  children: `Welcome back, Marcus.`,
                }),
                (0, k.jsxs)(`p`, {
                  className: `text-sm text-emerald-100/90 leading-relaxed`,
                  children: [
                    `Your dedicated assistant `,
                    (0, k.jsx)(`strong`, {
                      className: `text-white`,
                      children: `Ayesha Khan`,
                    }),
                    ` is on shift at our Islamabad operations hub, actively handling your calendar, email triaging, and weekly briefings.`,
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 flex flex-wrap items-center gap-3`,
                  children: [
                    (0, k.jsxs)(`button`, {
                      onClick: () => n(`assistant`),
                      className: `inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer`,
                      children: [
                        (0, k.jsx)(Ee, { className: `w-3.5 h-3.5` }),
                        (0, k.jsx)(`span`, { children: `Message Ayesha` }),
                      ],
                    }),
                    (0, k.jsxs)(`button`, {
                      onClick: () => n(`documents`),
                      className: `inline-flex items-center gap-2 px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-700/60 transition-colors cursor-pointer`,
                      children: [
                        (0, k.jsx)(He, { className: `w-3.5 h-3.5` }),
                        (0, k.jsx)(`span`, { children: `Upload Document` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-emerald-800/30 rounded-full blur-2xl pointer-events-none`,
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`,
          children: [
            (0, k.jsxs)(`div`, {
              onClick: () => n(`tasks`),
              className: `bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer space-y-2 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between text-slate-500 text-xs`,
                  children: [
                    (0, k.jsx)(`span`, { children: `Cycle Capacity` }),
                    (0, k.jsx)(me, { className: `w-4 h-4 text-emerald-700` }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-2xl font-bold font-mono text-slate-900 tabular-nums`,
                  children: `58.5 / 80 hrs`,
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-emerald-700 font-medium`,
                  children: `21.5 hours remaining in cycle`,
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              onClick: () => n(`tasks`),
              className: `bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer space-y-2 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between text-slate-500 text-xs`,
                  children: [
                    (0, k.jsx)(`span`, { children: `Active Delegations` }),
                    (0, k.jsx)(ze, { className: `w-4 h-4 text-emerald-700` }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `text-2xl font-bold font-mono text-slate-900 tabular-nums`,
                  children: [i.length, ` In Progress`],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-slate-500 font-medium`,
                  children: `2 completed this week`,
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              onClick: () => n(`documents`),
              className: `bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer space-y-2 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between text-slate-500 text-xs`,
                  children: [
                    (0, k.jsx)(`span`, { children: `Shared Files` }),
                    (0, k.jsx)(ye, { className: `w-4 h-4 text-emerald-700` }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `text-2xl font-bold font-mono text-slate-900 tabular-nums`,
                  children: [e.length, ` Files`],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-emerald-700 font-medium`,
                  children: `Protected under NDA`,
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              onClick: () => n(`assistant`),
              className: `bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer space-y-2 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between text-slate-500 text-xs`,
                  children: [
                    (0, k.jsx)(`span`, { children: `Dedicated Assistant` }),
                    (0, k.jsx)(`span`, {
                      className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                    }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-base font-bold text-slate-900`,
                  children: `Ayesha Khan`,
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-slate-500 font-medium`,
                  children: `Pakistan Work Partner · 08:00–17:00 EST`,
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-6`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, k.jsx)(`h3`, {
                      className: `text-base font-bold text-slate-900`,
                      children: `Active Delegations & Queue`,
                    }),
                    (0, k.jsxs)(`button`, {
                      onClick: () => n(`tasks`),
                      className: `text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer`,
                      children: [
                        (0, k.jsx)(`span`, { children: `View All` }),
                        (0, k.jsx)(C, { className: `w-3.5 h-3.5` }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `space-y-2.5`,
                  children: t.slice(0, 3).map((e) =>
                    (0, k.jsxs)(
                      `div`,
                      {
                        className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3 text-xs`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`div`, {
                                className: `font-semibold text-slate-900`,
                                children: e.title,
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `text-slate-500 text-[11px] mt-0.5`,
                                children: [
                                  `Assigned: `,
                                  e.assignedTo,
                                  ` · Due `,
                                  e.dueDate,
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`span`, {
                            className: `px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 ${e.status === `Completed` ? `bg-emerald-100 text-emerald-800` : `bg-amber-100 text-amber-800`}`,
                            children: e.status,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, k.jsx)(`h3`, {
                      className: `text-base font-bold text-slate-900`,
                      children: `Recent Documents`,
                    }),
                    (0, k.jsxs)(`button`, {
                      onClick: () => n(`documents`),
                      className: `text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer`,
                      children: [
                        (0, k.jsx)(`span`, { children: `View All` }),
                        (0, k.jsx)(C, { className: `w-3.5 h-3.5` }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `space-y-2.5`,
                  children: e.slice(0, 3).map((e) =>
                    (0, k.jsxs)(
                      `div`,
                      {
                        className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-2.5 min-w-0`,
                            children: [
                              (0, k.jsx)(ye, {
                                className: `w-4 h-4 text-emerald-700 shrink-0`,
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `truncate`,
                                children: [
                                  (0, k.jsx)(`div`, {
                                    className: `font-semibold text-slate-900 truncate`,
                                    children: e.name,
                                  }),
                                  (0, k.jsxs)(`div`, {
                                    className: `text-[10px] text-slate-400`,
                                    children: [e.category, ` · `, e.size],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[10px] text-slate-500 font-medium shrink-0`,
                            children: e.uploadedAt,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  (yt = ({
    documents: e,
    onUploadDocument: t,
    onDeleteDocument: n,
    onLogAction: r,
  }) => {
    let [i, a] = (0, x.useState)(``),
      [o, s] = (0, x.useState)(`All`),
      [c, l] = (0, x.useState)(!1),
      [u, d] = (0, x.useState)(``),
      [f, p] = (0, x.useState)(`Executive Briefs`),
      m = [
        `All`,
        `Legal & NDAs`,
        `Financial & Tax`,
        `Standard Operating Procedures`,
        `Executive Briefs`,
      ],
      h = e.filter((e) => {
        let t = e.name.toLowerCase().includes(i.toLowerCase()),
          n = o === `All` || e.category === o;
        return t && n;
      }),
      g = (e) => {
        if ((e.preventDefault(), !u.trim())) return;
        let n = u.includes(`.`) ? u.trim() : `${u.trim()}.pdf`,
          i = {
            id: `doc-${Date.now()}`,
            name: n,
            category: f,
            size: `${(Math.random() * 2 + 0.5).toFixed(1)} MB`,
            uploadedAt: `Just now`,
            checksumSha256: `Verified`,
            encryptionStatus: `AES-256-GCM Encrypted`,
            uploadedBy: `Marcus Sterling (Client)`,
            accessLevel: `Confidential`,
          };
        (t(i), r && r(`FILE_UPLOADED`, i.name), d(``), l(!1));
      },
      _ = (e) => {
        r && r(`FILE_DOWNLOADED`, e.name);
        let t = new Blob(
            [
              `Virtual Assistants Pro Document Archive\nDocument: ${e.name}\nCategory: ${e.category}\nDate: ${new Date().toLocaleDateString()}`,
            ],
            { type: `text/plain` },
          ),
          n = URL.createObjectURL(t),
          i = document.createElement(`a`);
        ((i.href = n),
          (i.download = e.name),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i),
          URL.revokeObjectURL(n));
      };
    return (0, k.jsxs)(`div`, {
      className: `p-4 sm:p-6 lg:p-8 space-y-6`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsx)(`h2`, {
                  className: `text-2xl font-extrabold text-slate-900 tracking-tight`,
                  children: `Client Documents & Files`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-sm text-slate-500 mt-1`,
                  children: `Securely share spreadsheets, SOPs, receipts, and briefs directly with your Islamabad assistant.`,
                }),
              ],
            }),
            (0, k.jsxs)(`button`, {
              onClick: () => l(!0),
              className: `inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer self-start sm:self-auto`,
              children: [
                (0, k.jsx)(O, { className: `w-4 h-4` }),
                (0, k.jsx)(`span`, { children: `Upload New Document` }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `relative flex-1 max-w-md`,
              children: [
                (0, k.jsx)(Ne, {
                  className: `w-4 h-4 text-slate-400 absolute left-3 top-3`,
                }),
                (0, k.jsx)(`input`, {
                  type: `text`,
                  placeholder: `Search documents by name...`,
                  value: i,
                  onChange: (e) => a(e.target.value),
                  className: `w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent`,
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `flex flex-wrap gap-1.5`,
              children: m.map((e) =>
                (0, k.jsx)(
                  `button`,
                  {
                    onClick: () => s(e),
                    className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${o === e ? `bg-emerald-50 text-emerald-800 border border-emerald-200` : `text-slate-600 hover:bg-slate-100`}`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, k.jsx)(`div`, {
          className: `bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs`,
          children:
            h.length === 0
              ? (0, k.jsx)(`div`, {
                  className: `py-12 text-center text-slate-500 text-sm`,
                  children: `No documents found matching your criteria.`,
                })
              : (0, k.jsx)(`div`, {
                  className: `divide-y divide-slate-100`,
                  children: h.map((e) =>
                    (0, k.jsxs)(
                      `div`,
                      {
                        className: `p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-start sm:items-center gap-3.5`,
                            children: [
                              (0, k.jsx)(`div`, {
                                className: `w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-700`,
                                children: (0, k.jsx)(ye, {
                                  className: `w-5 h-5`,
                                }),
                              }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`div`, {
                                    className: `text-sm font-bold text-slate-900 flex items-center gap-2`,
                                    children: (0, k.jsx)(`span`, {
                                      children: e.name,
                                    }),
                                  }),
                                  (0, k.jsxs)(`div`, {
                                    className: `flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500`,
                                    children: [
                                      (0, k.jsx)(`span`, {
                                        className: `bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium`,
                                        children: e.category,
                                      }),
                                      (0, k.jsx)(`span`, { children: `·` }),
                                      (0, k.jsx)(`span`, { children: e.size }),
                                      (0, k.jsx)(`span`, { children: `·` }),
                                      (0, k.jsx)(`span`, {
                                        children: e.uploadedAt,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-2 self-end sm:self-center`,
                            children: [
                              (0, k.jsxs)(`button`, {
                                onClick: () => _(e),
                                className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer`,
                                children: [
                                  (0, k.jsx)(_e, {
                                    className: `w-3.5 h-3.5 text-slate-600`,
                                  }),
                                  (0, k.jsx)(`span`, { children: `Download` }),
                                ],
                              }),
                              (0, k.jsx)(`button`, {
                                onClick: () => n(e.id),
                                className: `p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer`,
                                title: `Delete Document`,
                                children: (0, k.jsx)(Ve, {
                                  className: `w-4 h-4`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
        }),
        c &&
          (0, k.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, k.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl animate-in fade-in zoom-in-95 duration-150`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                  children: [
                    (0, k.jsx)(`h3`, {
                      className: `text-base font-bold text-slate-900`,
                      children: `Upload New File`,
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => l(!1),
                      className: `text-slate-400 hover:text-slate-600`,
                      children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
                (0, k.jsxs)(`form`, {
                  onSubmit: g,
                  className: `space-y-4`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`label`, {
                          className: `block text-xs font-semibold text-slate-700 mb-1`,
                          children: `Document Title / File Name`,
                        }),
                        (0, k.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          placeholder: `e.g. Q4_Executive_Summary.pdf`,
                          value: u,
                          onChange: (e) => d(e.target.value),
                          className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`label`, {
                          className: `block text-xs font-semibold text-slate-700 mb-1`,
                          children: `Category`,
                        }),
                        (0, k.jsxs)(`select`, {
                          value: f,
                          onChange: (e) => p(e.target.value),
                          className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent`,
                          children: [
                            (0, k.jsx)(`option`, {
                              value: `Executive Briefs`,
                              children: `Executive Briefs`,
                            }),
                            (0, k.jsx)(`option`, {
                              value: `Legal & NDAs`,
                              children: `Legal & NDAs`,
                            }),
                            (0, k.jsx)(`option`, {
                              value: `Financial & Tax`,
                              children: `Financial & Tax`,
                            }),
                            (0, k.jsx)(`option`, {
                              value: `Standard Operating Procedures`,
                              children: `Standard Operating Procedures`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `pt-3 flex items-center justify-end gap-2`,
                      children: [
                        (0, k.jsx)(`button`, {
                          type: `button`,
                          onClick: () => l(!1),
                          className: `px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer`,
                          children: `Cancel`,
                        }),
                        (0, k.jsx)(`button`, {
                          type: `submit`,
                          className: `px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer`,
                          children: `Upload File`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  }),
  (bt = ({ messages: e, onSendMessage: t, onLogAction: n }) => {
    let [r, i] = (0, x.useState)(``),
      a = (0, x.useRef)(null);
    return (
      (0, x.useEffect)(() => {
        a.current?.scrollIntoView({ behavior: `smooth` });
      }, [e]),
      (0, k.jsxs)(`div`, {
        className: `p-4 sm:p-6 lg:p-8 space-y-6`,
        children: [
          (0, k.jsxs)(`div`, {
            children: [
              (0, k.jsx)(`h2`, {
                className: `text-2xl font-extrabold text-slate-900 tracking-tight`,
                children: `Your Dedicated Executive Assistant`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-sm text-slate-500 mt-1`,
                children: `Direct encrypted channel to your hand-matched remote partner operating from our Islamabad operations facility.`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-12 gap-6 items-start`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-2xs`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center gap-4`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, k.jsx)(`img`, {
                            src: `/src/assets/images/portrait_executive_va_ayesha_1790219322998.jpg`,
                            alt: `Ayesha Khan - Senior Executive VA`,
                            className: `w-20 h-20 rounded-2xl object-cover border-2 border-emerald-600/30`,
                            referrerPolicy: `no-referrer`,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, k.jsx)(`h3`, {
                                className: `text-lg font-bold text-slate-900`,
                                children: `Ayesha Khan`,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded`,
                                children: `Active`,
                              }),
                            ],
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-xs text-slate-600 font-medium`,
                            children: `Senior Executive Virtual Assistant`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `text-[11px] text-slate-400 mt-1 font-mono`,
                            children: `Matched 3 Months Ago · 99.8% SLA`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `space-y-3 pt-2 text-xs`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200`,
                        children: [
                          (0, k.jsxs)(`span`, {
                            className: `text-slate-500 flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(me, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              `Shift Alignment:`,
                            ],
                          }),
                          (0, k.jsx)(`span`, {
                            className: `font-semibold text-slate-900`,
                            children: `08:00 AM – 05:00 PM EST (New York)`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200`,
                        children: [
                          (0, k.jsxs)(`span`, {
                            className: `text-slate-500 flex items-center gap-1.5`,
                            children: [
                              (0, k.jsx)(ae, {
                                className: `w-3.5 h-3.5 text-emerald-700`,
                              }),
                              `Education & Credentials:`,
                            ],
                          }),
                          (0, k.jsx)(`span`, {
                            className: `font-semibold text-slate-900`,
                            children: `M.Sc. Admin (NUST), Certified Executive VA`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `text-xs font-bold uppercase tracking-wider text-slate-500 mb-2`,
                        children: `Primary Responsibilities for Apex`,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `flex flex-wrap gap-1.5`,
                        children: [
                          `Executive Calendar Sync`,
                          `VIP Flight Coordination`,
                          `Zero-Inbox Email Triage`,
                          `Board Briefing Decks`,
                          `CRM Contact Updating`,
                        ].map((e) =>
                          (0, k.jsx)(
                            `span`,
                            {
                              className: `px-2.5 py-1 bg-emerald-50 text-emerald-900 text-xs rounded-md border border-emerald-200/80 font-medium`,
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-slate-900 text-white text-xs space-y-1`,
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `font-semibold text-emerald-300`,
                        children: `Operational Contingency Guarantee:`,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] text-slate-300 leading-relaxed`,
                        children: `In the unlikely event of planned leave, your dedicated Client Success Manager (Hassan Raza) and cross-trained backup assistant ensure zero disruption to your daily calendar.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `lg:col-span-7 bg-white rounded-2xl border border-slate-200 flex flex-col h-[560px] shadow-2xs overflow-hidden`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-3 h-3 rounded-full bg-emerald-500 animate-pulse`,
                          }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`h4`, {
                                className: `text-xs font-bold text-slate-900`,
                                children: `Direct Channel: Marcus & Ayesha`,
                              }),
                              (0, k.jsx)(`div`, {
                                className: `text-[10px] text-slate-400 font-mono`,
                                children: `AES-256 Symmetric Session Key: 0x98bf...33aa`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200`,
                        children: [
                          (0, k.jsx)(we, {
                            className: `w-3 h-3 text-emerald-700`,
                          }),
                          (0, k.jsx)(`span`, {
                            children: `End-to-End Encrypted`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/40`,
                    children: [
                      e.map((e) =>
                        (0, k.jsxs)(
                          `div`,
                          {
                            className: `flex flex-col ${e.sender === `client` ? `items-end` : `items-start`}`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                className: `text-[10px] text-slate-400 mb-1 px-1 flex items-center gap-1`,
                                children: [
                                  (0, k.jsx)(`span`, {
                                    children: e.senderName,
                                  }),
                                  (0, k.jsx)(`span`, { children: `·` }),
                                  (0, k.jsx)(`span`, { children: e.timestamp }),
                                ],
                              }),
                              (0, k.jsx)(`div`, {
                                className: `max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${e.sender === `client` ? `bg-emerald-700 text-white rounded-br-xs` : `bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs`}`,
                                children: e.content,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                      (0, k.jsx)(`div`, { ref: a }),
                    ],
                  }),
                  (0, k.jsxs)(`form`, {
                    onSubmit: (e) => {
                      (e.preventDefault(),
                        r.trim() &&
                          (t(r),
                          n(`ENCRYPTED_MESSAGE_SENT`, `Ayesha Khan (VA)`),
                          i(``)));
                    },
                    className: `p-3 bg-white border-t border-slate-200 flex items-center gap-2`,
                    children: [
                      (0, k.jsx)(`button`, {
                        type: `button`,
                        className: `p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors cursor-pointer`,
                        title: `Attach Encrypted File`,
                        children: (0, k.jsx)(De, { className: `w-4 h-4` }),
                      }),
                      (0, k.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Message Ayesha (e.g. Please reschedule my 2 PM meeting)...`,
                        value: r,
                        onChange: (e) => i(e.target.value),
                        className: `flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50 focus:bg-white`,
                      }),
                      (0, k.jsxs)(`button`, {
                        type: `submit`,
                        disabled: !r.trim(),
                        className: `px-4 py-2 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer`,
                        children: [
                          (0, k.jsx)(`span`, { children: `Send` }),
                          (0, k.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }),
  (xt = ({ tasks: e, onAddTask: t, onToggleTaskStatus: n, onLogAction: r }) => {
    let [i, a] = (0, x.useState)(!1),
      [o, s] = (0, x.useState)(``),
      [c, l] = (0, x.useState)(`Inbox & Calendar`),
      [u, d] = (0, x.useState)(`High`),
      [f, p] = (0, x.useState)(`Tomorrow`),
      m = e.reduce((e, t) => e + t.hoursSpent, 48.5),
      h = Math.min(100, Math.round((m / 80) * 100));
    return (0, k.jsxs)(`div`, {
      className: `p-4 sm:p-6 lg:p-8 space-y-6`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsx)(`h2`, {
                  className: `text-2xl font-extrabold text-slate-900 tracking-tight`,
                  children: `Delegation & Task Command`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-sm text-slate-500 mt-1`,
                  children: `Track active initiatives, deliverable progress, and monthly capacity utilization in real time.`,
                }),
              ],
            }),
            (0, k.jsxs)(`button`, {
              onClick: () => a(!0),
              className: `inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer self-start sm:self-auto`,
              children: [
                (0, k.jsx)(O, { className: `w-4 h-4` }),
                (0, k.jsx)(`span`, { children: `Delegate New Task` }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row sm:items-center justify-between gap-2`,
              children: [
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-xs font-bold uppercase tracking-wider text-slate-500`,
                      children: `September 2026 Billing Cycle Capacity`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `text-xl font-bold text-slate-900 font-mono tabular-nums mt-0.5`,
                      children: [
                        m.toFixed(1),
                        ` / `,
                        80,
                        ` Hours Utilized (`,
                        h,
                        `%)`,
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-slate-500 font-medium`,
                  children: `Renews Oct 1, 2026 · Rollover: Up to 10 unused hours`,
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `w-full bg-slate-100 rounded-full h-3 overflow-hidden`,
              children: (0, k.jsx)(`div`, {
                className: `bg-emerald-600 h-full rounded-full transition-all duration-500`,
                style: { width: `${h}%` },
              }),
            }),
            (0, k.jsxs)(`div`, {
              className: `grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `p-3 bg-slate-50 rounded-xl border border-slate-200/80`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-slate-500 block`,
                      children: `Dedicated Assistant`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `font-bold text-slate-900`,
                      children: `Ayesha Khan (42.0 hrs)`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-3 bg-slate-50 rounded-xl border border-slate-200/80`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-slate-500 block`,
                      children: `Financial Specialist`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `font-bold text-slate-900`,
                      children: `Bilal Tariq (12.5 hrs)`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-3 bg-slate-50 rounded-xl border border-slate-200/80`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-slate-500 block`,
                      children: `Remaining Balance`,
                    }),
                    (0, k.jsxs)(`span`, {
                      className: `font-bold text-emerald-800 font-mono tabular-nums`,
                      children: [(80 - m).toFixed(1), ` hours`],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-3 bg-slate-50 rounded-xl border border-slate-200/80`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-slate-500 block`,
                      children: `On-Demand Surge`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `font-bold text-slate-700`,
                      children: `Available at base rate`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `text-xs font-bold text-slate-700 uppercase tracking-wider`,
                  children: [`Active Delegations & Queue (`, e.length, `)`],
                }),
                (0, k.jsx)(`div`, {
                  className: `text-xs text-slate-500`,
                  children: `Click checkbox to mark completed`,
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `divide-y divide-slate-100`,
              children: e.map((e) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, k.jsx)(`button`, {
                            onClick: () => {
                              (n(e.id),
                                r(
                                  e.status === `Completed`
                                    ? `TASK_MARKED_IN_PROGRESS`
                                    : `TASK_MARKED_COMPLETED`,
                                  e.title,
                                ));
                            },
                            className: `mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${e.status === `Completed` ? `bg-emerald-600 border-emerald-600 text-white` : `border-slate-300 hover:border-emerald-600 text-transparent`}`,
                            "aria-label": `Toggle task status`,
                            children: (0, k.jsx)(w, { className: `w-4 h-4` }),
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, k.jsx)(`div`, {
                                className: `text-sm font-semibold transition-all ${e.status === `Completed` ? `line-through text-slate-400` : `text-slate-900`}`,
                                children: e.title,
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `flex flex-wrap items-center gap-2 text-xs text-slate-500`,
                                children: [
                                  (0, k.jsx)(`span`, {
                                    className: `font-medium text-slate-700`,
                                    children: e.category,
                                  }),
                                  (0, k.jsx)(`span`, { children: `·` }),
                                  (0, k.jsxs)(`span`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, k.jsx)(Ue, {
                                        className: `w-3 h-3 text-emerald-700`,
                                      }),
                                      e.assignedTo,
                                    ],
                                  }),
                                  (0, k.jsx)(`span`, { children: `·` }),
                                  (0, k.jsxs)(`span`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, k.jsx)(se, {
                                        className: `w-3 h-3 text-slate-400`,
                                      }),
                                      `Due `,
                                      e.dueDate,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-4 self-end sm:self-auto`,
                        children: [
                          (0, k.jsxs)(`span`, {
                            className: `text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${e.priority === `High` ? `bg-rose-50 text-rose-700 border border-rose-200` : e.priority === `Medium` ? `bg-amber-50 text-amber-700 border border-amber-200` : `bg-slate-100 text-slate-600`}`,
                            children: [e.priority, ` Priority`],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `text-right`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                className: `text-xs font-mono font-bold text-slate-900 tabular-nums`,
                                children: [e.hoursSpent, ` hrs`],
                              }),
                              (0, k.jsx)(`div`, {
                                className: `text-[10px] text-slate-400`,
                                children: `Logged`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
        i &&
          (0, k.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150`,
            children: (0, k.jsxs)(`div`, {
              className: `w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `bg-slate-900 text-white p-5 flex items-center justify-between`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, k.jsx)(ze, {
                          className: `w-5 h-5 text-emerald-400`,
                        }),
                        (0, k.jsx)(`h3`, {
                          className: `text-base font-bold text-white`,
                          children: `Delegate New Task to Assistant`,
                        }),
                      ],
                    }),
                    (0, k.jsx)(`button`, {
                      onClick: () => a(!1),
                      className: `text-slate-400 hover:text-white p-1 rounded-lg`,
                      children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
                (0, k.jsxs)(`form`, {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !o.trim())) return;
                    let n = {
                      id: `tsk-${Date.now()}`,
                      title: o.trim(),
                      category: c,
                      status: `In Progress`,
                      priority: u,
                      dueDate: f,
                      assignedTo:
                        c === `Bookkeeping` ? `Bilal Tariq` : `Ayesha Khan`,
                      hoursSpent: 0.5,
                    };
                    (t(n), r(`TASK_DELEGATED_TO_HUB`, n.title), s(``), a(!1));
                  },
                  className: `p-6 space-y-4`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`label`, {
                          className: `block text-xs font-semibold text-slate-700 mb-1`,
                          children: `Task Title & Outcome *`,
                        }),
                        (0, k.jsx)(`textarea`, {
                          rows: 2,
                          required: !0,
                          placeholder: `e.g. Schedule Zoom calls with 4 London clients and prepare executive briefs...`,
                          value: o,
                          onChange: (e) => s(e.target.value),
                          className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-4`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`label`, {
                              className: `block text-xs font-semibold text-slate-700 mb-1`,
                              children: `Category`,
                            }),
                            (0, k.jsxs)(`select`, {
                              value: c,
                              onChange: (e) => l(e.target.value),
                              className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white`,
                              children: [
                                (0, k.jsx)(`option`, {
                                  value: `Inbox & Calendar`,
                                  children: `Inbox & Calendar`,
                                }),
                                (0, k.jsx)(`option`, {
                                  value: `Bookkeeping`,
                                  children: `Bookkeeping`,
                                }),
                                (0, k.jsx)(`option`, {
                                  value: `Research`,
                                  children: `Research & Prep`,
                                }),
                                (0, k.jsx)(`option`, {
                                  value: `Operations`,
                                  children: `Operations`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`label`, {
                              className: `block text-xs font-semibold text-slate-700 mb-1`,
                              children: `Priority`,
                            }),
                            (0, k.jsxs)(`select`, {
                              value: u,
                              onChange: (e) => d(e.target.value),
                              className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white`,
                              children: [
                                (0, k.jsx)(`option`, {
                                  value: `High`,
                                  children: `High (Next Shift)`,
                                }),
                                (0, k.jsx)(`option`, {
                                  value: `Medium`,
                                  children: `Medium (Within 48h)`,
                                }),
                                (0, k.jsx)(`option`, {
                                  value: `Routine`,
                                  children: `Routine`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`label`, {
                          className: `block text-xs font-semibold text-slate-700 mb-1`,
                          children: `Desired Due Date`,
                        }),
                        (0, k.jsx)(`input`, {
                          type: `text`,
                          placeholder: `e.g. Sep 26, 2026 by 5 PM EST`,
                          value: f,
                          onChange: (e) => p(e.target.value),
                          className: `w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600`,
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `pt-2 flex gap-3`,
                      children: [
                        (0, k.jsx)(`button`, {
                          type: `submit`,
                          className: `flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg cursor-pointer`,
                          children: `Confirm & Delegate to Ayesha`,
                        }),
                        (0, k.jsx)(`button`, {
                          type: `button`,
                          onClick: () => a(!1),
                          className: `px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer`,
                          children: `Cancel`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  }),
  (St = ({ onLogAction: e }) => {
    let t = [
        {
          id: `INV-2026-09`,
          date: `Sep 01, 2026`,
          amount: `$1,600.00`,
          status: `Paid`,
          plan: `Executive Growth Tier (80 Dedicated Hours)`,
        },
        {
          id: `INV-2026-08`,
          date: `Aug 01, 2026`,
          amount: `$1,600.00`,
          status: `Paid`,
          plan: `Executive Growth Tier (80 Dedicated Hours)`,
        },
        {
          id: `INV-2026-07`,
          date: `Jul 01, 2026`,
          amount: `$1,600.00`,
          status: `Paid`,
          plan: `Executive Growth Tier (80 Dedicated Hours)`,
        },
      ],
      n = (t) => {
        e(`INVOICE_RECEIPT_DOWNLOADED`, t);
        let n = new Blob(
            [
              `Virtual Assistants Pro Invoice Receipt\nInvoice ID: ${t}\nCompany: Apex Capital Partners\nStatus: Paid via Stripe Wire`,
            ],
            { type: `text/plain` },
          ),
          r = URL.createObjectURL(n),
          i = document.createElement(`a`);
        ((i.href = r),
          (i.download = `${t}_Receipt.txt`),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i),
          URL.revokeObjectURL(r));
      };
    return (0, k.jsxs)(`div`, {
      className: `p-4 sm:p-6 lg:p-8 space-y-6`,
      children: [
        (0, k.jsxs)(`div`, {
          children: [
            (0, k.jsx)(`h2`, {
              className: `text-2xl font-extrabold text-slate-900 tracking-tight`,
              children: `Billing, Subscription & Service Agreements`,
            }),
            (0, k.jsx)(`p`, {
              className: `text-sm text-slate-500 mt-1`,
              children: `Review your current dedicated staffing capacity, payment methods, and historical receipts.`,
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100`,
              children: [
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-xs font-bold uppercase tracking-wider text-emerald-800`,
                      children: `Active Agreement`,
                    }),
                    (0, k.jsx)(`h3`, {
                      className: `text-2xl font-bold text-slate-900 mt-0.5`,
                      children: `Executive Growth Tier`,
                    }),
                    (0, k.jsx)(`p`, {
                      className: `text-xs text-slate-500 mt-1`,
                      children: `Dedicated Executive Assistant (Ayesha Khan) + Fractional Financial Specialist (Bilal Tariq)`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `text-left sm:text-right`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `text-3xl font-extrabold text-slate-900 font-mono tabular-nums`,
                      children: [
                        `$1,600 `,
                        (0, k.jsx)(`span`, {
                          className: `text-xs font-normal text-slate-500`,
                          children: `/ month`,
                        }),
                      ],
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200`,
                      children: `Active · Renews Oct 1, 2026`,
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-3 gap-4 text-xs`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-slate-500 mb-1`,
                      children: `Monthly Hours Quota`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-base font-bold text-slate-900 font-mono tabular-nums`,
                      children: `80 Dedicated Hours`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-[11px] text-emerald-700 font-medium mt-1`,
                      children: `Rollover allowed up to 10 hours`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-slate-500 mb-1`,
                      children: `Payment Method`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `text-base font-bold text-slate-900 flex items-center gap-1.5`,
                      children: [
                        (0, k.jsx)(he, { className: `w-4 h-4 text-slate-700` }),
                        (0, k.jsx)(`span`, {
                          children: `Amex ending in •••• 4092`,
                        }),
                      ],
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-[11px] text-slate-400 mt-1`,
                      children: `Auto-debit processed via Stripe Enterprise`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `text-slate-500 mb-1`,
                      children: `Contract Term`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-base font-bold text-slate-900`,
                      children: `Month-to-Month`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `text-[11px] text-emerald-700 font-medium mt-1`,
                      children: `Zero long-term lock-in · 14-day notice`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs`,
          children: [
            (0, k.jsx)(`div`, {
              className: `p-4 bg-slate-50 border-b border-slate-200`,
              children: (0, k.jsx)(`h4`, {
                className: `text-xs font-bold text-slate-800 uppercase tracking-wider`,
                children: `Billing History & Receipts`,
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `divide-y divide-slate-100`,
              children: t.map((e) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `font-mono text-xs font-bold text-slate-900`,
                                children: e.id,
                              }),
                              (0, k.jsx)(`span`, {
                                className: `text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200`,
                                children: e.status,
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `text-xs text-slate-500 mt-0.5`,
                            children: [e.plan, ` · `, e.date],
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [
                          (0, k.jsx)(`span`, {
                            className: `font-mono font-bold text-sm text-slate-900 tabular-nums`,
                            children: e.amount,
                          }),
                          (0, k.jsxs)(`button`, {
                            onClick: () => n(e.id),
                            className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer`,
                            children: [
                              (0, k.jsx)(_e, { className: `w-3.5 h-3.5` }),
                              (0, k.jsx)(`span`, {
                                children: `Download Receipt`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  }),
  (Ct = ({ onExitToWebsite: e }) => {
    let [t, n] = (0, x.useState)(!0),
      [r, i] = (0, x.useState)(`overview`),
      [a, o] = (0, x.useState)(!1),
      [s, c] = (0, x.useState)(Qe),
      [l, u] = (0, x.useState)($e),
      [d, f] = (0, x.useState)(et);
    return t
      ? (0, k.jsxs)(`div`, {
          className: `min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans`,
          children: [
            (0, k.jsx)(_t, {
              currentTab: r,
              onSelectTab: i,
              onExitToWebsite: e,
              isOpenMobile: a,
              onCloseMobile: () => o(!1),
            }),
            (0, k.jsxs)(`div`, {
              className: `flex-1 flex flex-col min-w-0`,
              children: [
                (0, k.jsx)(gt, {
                  currentTab: r,
                  onLogout: () => {
                    n(!1);
                  },
                  onExitToWebsite: e,
                  onToggleSidebar: () => o(!a),
                }),
                (0, k.jsxs)(`main`, {
                  className: `flex-1 overflow-y-auto`,
                  children: [
                    r === `overview` &&
                      (0, k.jsx)(vt, {
                        documents: s,
                        tasks: l,
                        messages: d,
                        onNavigateTab: i,
                        onOpenUpload: () => i(`documents`),
                      }),
                    r === `assistant` &&
                      (0, k.jsx)(bt, {
                        messages: d,
                        onSendMessage: (e) => {
                          let t = {
                            id: `msg-${Date.now()}`,
                            sender: `client`,
                            senderName: `Marcus Sterling`,
                            timestamp: new Date().toLocaleTimeString([], {
                              hour: `2-digit`,
                              minute: `2-digit`,
                            }),
                            content: e,
                            isEncrypted: !0,
                          };
                          (f((e) => [...e, t]),
                            setTimeout(() => {
                              let e = [
                                  `Received and noted, Marcus! I am taking care of this immediately from the Islamabad hub.`,
                                  `Understood. I will update the calendar invite and upload the revised summary to your vault within the hour.`,
                                  `Got it! I am on it right away. You will receive an update in your inbox.`,
                                  `Confirmed! I've updated the task tracker and synchronized our notes.`,
                                ],
                                t = e[Math.floor(Math.random() * e.length)],
                                n = {
                                  id: `msg-asst-${Date.now()}`,
                                  sender: `assistant`,
                                  senderName: `Ayesha Khan (Dedicated VA)`,
                                  timestamp: new Date().toLocaleTimeString([], {
                                    hour: `2-digit`,
                                    minute: `2-digit`,
                                  }),
                                  content: t,
                                  isEncrypted: !0,
                                };
                              f((e) => [...e, n]);
                            }, 1e3));
                        },
                        onLogAction: () => {},
                      }),
                    r === `tasks` &&
                      (0, k.jsx)(xt, {
                        tasks: l,
                        onAddTask: (e) => {
                          u((t) => [e, ...t]);
                        },
                        onToggleTaskStatus: (e) => {
                          u((t) =>
                            t.map((t) =>
                              t.id === e
                                ? {
                                    ...t,
                                    status:
                                      t.status === `Completed`
                                        ? `In Progress`
                                        : `Completed`,
                                  }
                                : t,
                            ),
                          );
                        },
                        onLogAction: () => {},
                      }),
                    r === `documents` &&
                      (0, k.jsx)(yt, {
                        documents: s,
                        onUploadDocument: (e) => {
                          c((t) => [e, ...t]);
                        },
                        onDeleteDocument: (e) => {
                          c((t) => t.filter((t) => t.id !== e));
                        },
                      }),
                    r === `billing` &&
                      (0, k.jsx)(St, { onLogAction: () => {} }),
                  ],
                }),
              ],
            }),
          ],
        })
      : (0, k.jsx)(`div`, {
          className: `min-h-screen bg-slate-100 flex items-center justify-center p-4`,
          children: (0, k.jsxs)(`div`, {
            className: `bg-white max-w-md w-full rounded-2xl border border-slate-200 p-8 shadow-lg text-center space-y-5`,
            children: [
              (0, k.jsx)(`div`, {
                className: `w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto`,
                children: (0, k.jsx)(we, { className: `w-6 h-6` }),
              }),
              (0, k.jsxs)(`div`, {
                children: [
                  (0, k.jsx)(`h2`, {
                    className: `text-xl font-bold text-slate-900`,
                    children: `Client Portal Login`,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-xs text-slate-500 mt-1`,
                    children: `Secure client workspace for One Stop Business Shop`,
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `font-semibold text-slate-700`,
                    children: `Demo Client Account:`,
                  }),
                  (0, k.jsx)(`div`, {
                    className: `text-slate-500`,
                    children: `Name: Marcus Sterling (Apex Partners)`,
                  }),
                  (0, k.jsx)(`div`, {
                    className: `text-slate-500`,
                    children: `Dedicated Assistant: Ayesha Khan (Pakistan Work Partner)`,
                  }),
                ],
              }),
              (0, k.jsxs)(`button`, {
                onClick: () => n(!0),
                className: `w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer`,
                children: [
                  (0, k.jsx)(`span`, { children: `Sign In to Client Portal` }),
                  (0, k.jsx)(C, { className: `w-4 h-4` }),
                ],
              }),
              (0, k.jsxs)(`button`, {
                onClick: e,
                className: `w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 transition-colors cursor-pointer`,
                children: [
                  (0, k.jsx)(re, { className: `w-3.5 h-3.5` }),
                  (0, k.jsx)(`span`, { children: `Return to Public Website` }),
                ],
              }),
            ],
          }),
        });
  }),
  (zt = ({ isOpen: e, onClose: t }) =>
  e
    ? (0, k.jsx)(`div`, {
        className: `fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200`,
        children: (0, k.jsxs)(`div`, {
          className: `relative w-full max-w-2xl max-h-[88vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `bg-slate-950 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 shrink-0`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center gap-2.5`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm`,
                      children: (0, k.jsx)(Fe, { className: `w-4 h-4` }),
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`h3`, {
                          className: `text-base font-black text-white`,
                          children: `Terms and Conditions`,
                        }),
                        (0, k.jsx)(`p`, {
                          className: `text-[11px] text-emerald-400 font-medium`,
                          children: `OneManShow (One Stop Business Shop) · Standard Client Agreement & SLA`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)(`button`, {
                  onClick: t,
                  className: `text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer`,
                  "aria-label": `Close terms`,
                  children: (0, k.jsx)(We, { className: `w-5 h-5` }),
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `overflow-y-auto p-5 sm:p-6 space-y-4 text-xs text-slate-600 leading-relaxed font-normal divide-y divide-slate-100`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1 mb-2`,
                  children: [
                    (0, k.jsx)(`p`, {
                      className: `font-bold text-[11px] uppercase tracking-wider text-emerald-900`,
                      children: `Key Summary for Business Founders & Clients`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `100% Client Intellectual Property (IP) Ownership · Strict Bilateral NDA & Zero-Knowledge Credential Security · 48-Hour Backup Continuity Matching · 100% Money-Back Guarantee during onboarding.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `1. Engagement & Service Model`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `OneManShow connects clients with vetted, dedicated Virtual Assistants and digital execution teams in Pakistan. Services are provided on a flat monthly retainer basis according to agreed weekly hours (10, 20, or 40 hours/week) or specific custom scopes. Assistants operate under client direction while complying with verified Standard Operating Procedures (SOPs).`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1.5`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `2. Special Promotional Offers & Package Terms`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`p`, {
                              className: `font-bold text-emerald-800`,
                              children: `A. Special Limited Time Start Up Offer (PKR 9,999/- All Inclusive):`,
                            }),
                            (0, k.jsx)(`p`, {
                              children: `Available exclusively to new Pakistan-based businesses (with or without an existing website). This package includes complete AI-assisted website creation, 1 full year of managed cloud hosting on US-based servers, and a 99.99% network uptime commitment. Domain name purchase and registration is explicitly NOT included in the package price and must be provided or purchased separately by the client.`,
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`p`, {
                              className: `font-bold text-emerald-800`,
                              children: `B. Global Start Up Offer ($49 All Inclusive):`,
                            }),
                            (0, k.jsx)(`p`, {
                              children: `Designed for startups, new or small businesses globally (USA, UK, Australia, Canada, Europe, and worldwide). Package includes custom AI website development, 1 year of managed US cloud hosting with 99.99% uptime guarantee, plus setup and optimization of up to three (3) official social media business pages integrated and linked to the website. Domain name registration is NOT included in the price.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `3. 100% Client Intellectual Property (IP) Ownership`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `All deliverables, custom software, source code, graphic designs, marketing copy, spreadsheets, workflows, and database entries created by your dedicated assistant belong 100% exclusively to the Client as work-made-for-hire upon settlement of invoice. OneManShow claims zero ownership or licensing rights over your proprietary assets.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `4. Strict Confidentiality & Bilateral NDA`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `All staff and partner assistants execute legally binding Non-Disclosure Agreements prior to assignment. We enforce bank-level data confidentiality; client passwords and API credentials must be shared through encrypted password managers (Bitwarden, 1Password, or LastPass) with least-privilege role permissions. We never sell, share, or store client data beyond operational necessity.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `5. Invoicing, Cancellation & 100% Money-Back Guarantee`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `Retainer subscriptions renew monthly with zero lock-in contracts. You may pause, adjust hours, or cancel anytime before your next billing cycle. If during your first 14 days of onboarding you are not satisfied with your assistant's competency, communication, or work quality, we will either provide an immediate 48-hour rematch or issue a 100% full refund with no questions asked.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `6. 48-Hour Continuity & Backup Guarantee`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `In the event of unforeseen assistant illness, personal emergency, or skill incompatibility, OneManShow guarantees a seamless transition to a fully vetted replacement assistant within 48 business hours, maintaining task tracking and playbook continuity.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `7. Independent Contractor Classification`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `Assistants are engaged as independent contractors via OneManShow. Clients bear no liability for local employee taxes, social security, medical insurance, or overseas statutory severance obligations.`,
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `pt-3 space-y-1`,
                  children: [
                    (0, k.jsx)(`h4`, {
                      className: `font-bold text-slate-900 text-sm`,
                      children: `8. US Hosting SLA & Server Uptime Commitment`,
                    }),
                    (0, k.jsx)(`p`, {
                      children: `Cloud hosting provided under promotional or standard packages is hosted in enterprise US Tier-3/Tier-4 data centers with 99.99% target uptime, redundant daily/weekly snapshots, and Cloudflare CDN integration. Scheduled maintenance windows will be communicated 48 hours in advance.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs text-slate-500`,
              children: [
                (0, k.jsx)(`span`, {
                  children: `Questions? Contact legal@onemanshow.pro · Last updated: September 2026`,
                }),
                (0, k.jsx)(`button`, {
                  onClick: t,
                  className: `px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-all cursor-pointer`,
                  children: `I Understand & Accept`,
                }),
              ],
            }),
          ],
        }),
      })
    : null));
function wt() {
  let [e, t] = (0, x.useState)(`website`),
    [n, r] = (0, x.useState)(!1),
    [i, a] = (0, x.useState)(void 0),
    [isTermsOpen, setIsTermsOpen] = (0, x.useState)(!1),
    [heroSlideIndex, setHeroSlideIndex] = (0, x.useState)(0),
    o = (e) => {
      (a(e), r(!0));
    };
  return e === `portal`
    ? (0, k.jsx)(Ct, { onExitToWebsite: () => t(`website`) })
    : (0, k.jsxs)(`div`, {
        className: `min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900`,
        children: [
          (0, k.jsx)(tt, {
            onOpenPortal: () => t(`portal`),
            onOpenConsultation: () => o(),
            onOpenSpecialOffer: () => {
              setHeroSlideIndex(1);
              document.getElementById(`hero-slider`)?.scrollIntoView({ behavior: `smooth` });
            },
          }),
          (0, k.jsxs)(`main`, {
            children: [
              (0, k.jsx)(nt, {
                onOpenConsultation: (e) => o(e),
                onOpenPortal: () => t(`portal`),
                slideIndex: heroSlideIndex,
                setSlideIndex: setHeroSlideIndex,
              }),
              (0, k.jsx)(rt, {}),
              (0, k.jsx)(ct, { onOpenConsultation: (e) => o(e) }),
              (0, k.jsx)(it, { onSelectService: (e) => o(e) }),
              (0, k.jsx)(at, { onOpenConsultation: () => o() }),
              (0, k.jsx)(ot, { onOpenConsultation: () => o() }),
              (0, k.jsx)(st, { onOpenConsultation: (e) => o(e) }),
              (0, k.jsx)(lt, { onOpenConsultation: () => o() }),
              (0, k.jsx)(dt, { onOpenConsultation: () => o() }),
              (0, k.jsx)(ft, {}),
            ],
          }),
          (0, k.jsx)(pt, {
            onOpenPortal: () => t(`portal`),
            onOpenConsultation: () => o(),
            onOpenTerms: () => setIsTermsOpen(!0),
          }),
          (0, k.jsx)(mt, {
            isOpen: n,
            onClose: () => r(!1),
            preselectedService: i,
          }),
          (0, k.jsx)(zt, {
            isOpen: isTermsOpen,
            onClose: () => setIsTermsOpen(!1),
          }),
          (0, k.jsx)(ht, {}),
        ],
      });
}

export default function App() {
  return wt();
}
