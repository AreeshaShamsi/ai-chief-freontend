# AI Chief Frontend
A modern, highly customizable Real Estate CRM and Operations Dashboard frontend application built to demonstrate a complete CRM-style user interface, rich data grid interactions, and frontend application architecture.

## Project Overview

AI Chief Frontend is a frontend user interface implementation designed for real estate teams, sales agents, and campaign managers. The application demonstrates a comprehensive CRM workflow interface, featuring interactive deal pipelines, lead management views, call activity logs with simulated transcripts, campaign tracking interfaces, meeting scheduling dialogs, and platform integration screens.

The project is structured entirely as a client-side React single-page application (SPA) focused on frontend engineering challenges, including:

- CRM dashboard user interfaces
- Deal pipeline and lead management views
- Contact directory views
- Campaign management interfaces
- Call activity logs and transcript viewing layouts
- Meeting scheduling dialogs
- Knowledge base and objection handling screens
- Integration modal flows for property portals and ad platforms
- Dynamic data table views powered by AG Grid
- Customizable column schemas and field permissions
- Reusable modal dialogs and form components
- Responsive UI layouts and design system tokenization

## Live Demo

The application frontend is deployed and available at:  
https://ai-chief-frontend1.vercel.app/

---

## What I Built

The application implements a set of modular frontend interfaces accessible via a primary navigation sidebar:

### CRM Dashboard
- Summary metric cards displaying call statistics, balance values, base rates, and call minutes remaining.
- Progress bars rendering minute utilization and balance ratios.
- Hot lead cards highlighting follow-up priority with tag lists, budget labels, and next action timestamps.
- Active campaign monitoring cards showing live versus completed status tags and progress indicators.

### Deals Management
- Tabular deal workspace built with AG Grid, featuring custom cell renderers for deal names, lead scores, call outcomes, budgets, timelines, assigned agents, statuses, and next actions.
- Expandable row controls that open detailed deal view drawers.
- Lead category definition section rendering reference cards for Hot, Warm, and Cold intent criteria.
- Frontend flows for creating deal sources and configuring table field schemas.

### Contacts Management
- Centralized contact directory table displaying contact names, business details, access roles, and activity timestamps.
- Custom cell renderers for user role pills and tags with customizable table schemas.

### Campaign Management
- Dual-tab view for Cold Outreach Campaigns and CRM Campaigns.
- Visual status cards rendering lead counts (Total Leads, Hot Leads, Warm Leads, Junk Leads).
- Multi-step campaign creation wizard modal for configuring outreach strategies.

### Call Logs
- Call statistic cards tracking total call counts, pickup rate percentages, and average duration metrics.
- Stage filter control for switching between Initial Call, Discovery, and Follow-Up stages.
- Search input with live autocomplete dropdown for filtering call records by lead name.
- Call detail panel rendering structured call outcomes, follow-up dates, AI-generated summary layouts, and conversational transcript threads with AI versus User message bubbles.
- Action buttons for triggering call retry states in the UI.

### Meetings and Scheduling
- Integrated meeting schedule modal (`ScheduleMeetingModal`) with input fields for title, date, time, host, attendee selection, and meeting link entry.

### Knowledge Base
- Inventory and FAQ/Objections management interface (`FaqObjectionsSection`) supporting real estate script organization and objection handling reference cards.

### Integrations
- Connector UI interface providing setup modals for major real estate and marketing platforms:
  - 99acres (credentials and API configuration dialog)
  - Housing.com (API token and seller ID connector flow)
  - MagicBricks (account key connector interface)
  - Google Ads (customer ID and developer token form)
  - Google Calendar (OAuth authorization sync flow layout)
  - Meta / Facebook Lead Ads (integrated via Facebook JS SDK loader `useFacebookSdk` and `window.FB.login`)

### Tasks and Staff Management
- Workspace views and modals for managing team tasks (`AddTaskModal`, `EditTaskModal`) and staff member profiles (`AddStaffMemberModal`, `EditStaffMemberModal`).

### Modals and Forms
- Over 20 specialized modal components providing isolated state management for field additions, deal details, column configurations, campaign creation, and connector settings.

---

## Dynamic Columns

The dynamic column system is a key frontend technical highlight of the project, allowing users to customize table views and field definitions dynamically in client state:

- **Field Schema System**: Tables store columns as dynamic field objects containing attributes such as `id`, `name`, `type`, `options`, `value`, and `editorKind`.
- **Supported Field Types**:
  - Single Line Text
  - Single Select
  - Multiple Select
  - Currency
  - Date
  - Date Time
  - User / Assigned Agent
- **Column Management Operations**:
  - **Adding Columns**: Users can select field types in `AddColumnModal` or define choice options in `FieldConfigurationModal` to insert new columns into the data grid.
  - **Column Actions Menu**: Clicking column header action triggers opens `ColumnActionsModal`, enabling users to sort ascending/descending, move columns left or right, edit field properties, duplicate columns, or delete columns.
  - **Manage Fields Modal**: `ManageFieldsModal` renders a tabular summary of active fields with type metadata icons and edit triggers.
  - **Column Permissions**: Permission check rules (`columnPermissions.js` -> `canModifyColumn`) evaluate whether a column can be renamed, edited, or deleted based on workspace and field type constraints.
  - **Column Reordering**: Implemented via header move actions and `EditColumnsPopover` with interactive drag handles.
  - **AG Grid Integration**: Custom header component (`ColumnHeaderWrapper`) bridges dynamic column state with AG Grid header rendering and sorting controls.

---



## Technology Stack

| Technology | Version | Purpose in Project |
| :--- | :--- | :--- |
| React | ^18.2.0 | Core UI library for component structure and client state management. |
| Vite | ^8.1.3 | Fast frontend build tool and local development server with HMR. |
| React Router DOM | ^7.17.0 | Client-side routing across dashboard sections and workspace views. |
| AG Grid React | ^36.0.0 | Data grid library used for interactive deal and workspace tables. |
| @dnd-kit/core | ^6.3.1 | Drag and drop primitives for column and UI reordering. |
| @dnd-kit/sortable | ^10.0.0 | Sortable list utilities for drag and drop interactions. |
| Tailwind CSS | ^4.3.2 | Utility-first CSS framework for layout and component styling. |
| React Icons | ^5.7.0 | Icon library used throughout navigation, buttons, and status indicators. |
| ESLint | ^8.45.0 | Linting framework for maintaining code quality and consistency. |

---

## Frontend Architecture

The codebase is organized as a modular React single-page application (SPA):

- **Component Architecture**: Structured hierarchy separating layout wrappers (`AppLayout`), section containers (`DashboardMain`, `LeadsSection`, `CallLogSection`), table wrappers (`AgGridTable`, `Workspace`), and UI primitives (`AppButton`, `AppCard`, `Modal`).
- **SPA Routing**: `App.jsx` handles client routing using React Router DOM. All primary application paths render within `AppLayout.jsx`, which pairs a fixed sidebar (`Sidebar.jsx`) with a scrollable main view.
- **Modal Architecture**: Over 20 specialized modal components manage their own form state independently, keeping top-level views clean.
- **AG Grid Wrapper**: `AgGridTable` wraps AG Grid Community with custom column header components (`ColumnHeaderWrapper`), custom cell renderers (`WorkspaceCell`, `PrimaryNameCell`), and selection logic.
- **Dynamic Field Management Engine**: Client-side state functions handle adding, updating, duplicating, deleting, and reordering table columns while updating data rows accordingly.
- **Frontend API Structure & Mock Data**: `src/api/endpoints.js` defines structured REST endpoint paths, and `src/api/client.js` provides client request wrappers. The frontend consumes structured mock datasets (`src/data/mockData.js`) to support full UI interaction without requiring an active backend service.
- **Design Tokens**: Standardized design tokens in `src/components/design-tokens/tokens.js` export color palettes (`C`) and layout tokens (`T`) for uniform styling across components.

---

## Key Technical Highlights

1. **Dynamic Column and Field Management System**: Client-side field schema state handling dynamic schema mutations across table views.
2. **Custom AG Grid Integration**: Embedded custom React header components (`ColumnHeaderWrapper`) with sorting, type icons, and popup menus.
3. **Column Actions and Permissions**: Dynamic permission rules (`columnPermissions.js`) governing field editing based on workspace rules.
4. **Drag and Drop Column Reordering**: Column reordering utilizing drag handles and `@dnd-kit` primitives in `EditColumnsPopover`.
5. **Reusable Modal Architecture**: Standardized modal backdrop wrapper and 20+ specialized modal form dialogs.
6. **Complex CRM Form Dialogs**: Multi-step wizard dialogs for campaign creation, task editing, and staff assignment.
7. **Interactive Call Transcript Interface**: Dual-panel call log layout pairing call selection with a scrollable message transcript thread.
8. **Live Search and Auto-complete**: Search input filtering call records in real time with an autocomplete dropdown overlay.
9. **Tokenized UI Component Library**: Modular UI primitives (`AppButton`, `AppCard`, `AppPill`, `AppIconCircle`) styled via centralized tokens.
10. **API-Ready Frontend Layer**: Structured endpoint catalog (`endpoints.js`) and API client interface ready for backend integration.

---

## Integrations

The integration screens in AI Chief Frontend are implemented as **frontend connector UI flows**:

- **Property Portals**: Modal dialogs for 99acres, Housing.com, and MagicBricks render credential inputs, API key fields, and connection status toggles.
- **Ad Platforms**: Google Ads and Meta Ads screens provide customer ID inputs and authentication trigger buttons.
- **Google Calendar**: Connector modal renders calendar sync options and authorization buttons.
- **Facebook SDK Loader**: `useFacebookSdk.jsx` dynamically loads the official Facebook JavaScript SDK script and handles `window.FB.login` authorization triggers on the frontend.

These integration flows demonstrate the user interface for connecting third-party services. Third-party API data processing is not executed in this repository.

---

## Data Handling
The codebase is structured with API client definitions (`src/api/client.js` and `src/api/endpoints.js`) so that it can be connected to a live REST API backend in the future.
---

## Future Improvements

The following items represent potential future work beyond the current frontend implementation:

- **Real-Time API Synchronization**: Integrating WebSockets for real-time lead updates and live call status feeds.
- **Third-Party API Integration**: Connecting real estate portals and advertising platforms to active backend webhooks.
- **Automated Testing**: Adding Vitest and Playwright test suites for unit, component, and end-to-end UI testing.
- **Kanban Deal Board**: Adding an interactive drag-and-drop Kanban view mode for deal pipeline stages.
