# Zoo Dashboard

A comprehensive zoo management dashboard built with Next.js, featuring real-time animal status monitoring, authentication, and interactive UI components.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zoo-dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp example.env .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Authentication

The application uses mock authentication for development purposes. You can log in with the following test accounts:

### Admin Account
- **Email:** `admin@zoo.com`
- **Password:** `zooadmin123`
- **Role:** Zoo Administrator

### Keeper Account
- **Email:** `keeper@zoo.com`
- **Password:** `keeper123`
- **Role:** Zoo Keeper

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS + DaisyUI
- **Authentication:** NextAuth.js
- **Icons:** React Icons
- **Form Validation:** Zod
- **Data Fetching:** TanStack Query
- **Package Manager:** pnpm
