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

## Docker Usage

**Important:** You must build the image first before running it with environment variables.

When using Docker, you can pass environment variables directly:

```bash
# Build first (only need to do this once)
docker build -t zoo-dashboard . --build-arg NEXTAUTH_URL=http://localhost:3000

# Run with environment variables
docker run -p 3000:3000 \
  -e NEXTAUTH_SECRET=your-secret-here \
  -e NEXTAUTH_URL=http://localhost:3000 \
  zoo-dashboard
```

**Important:** The `NEXTAUTH_URL` environment variable is required for authentication to work correctly. In Docker environments, this should match the URL where the application is accessible.

Or create a `.env` file and mount it:

```bash
# Build first (only need to do this once)
docker build -t zoo-dashboard . --build-arg NEXTAUTH_URL=http://localhost:3000

# Run with env file
docker run -p 3000:3000 --env-file .env zoo-dashboard
```

Example `.env` file for Docker:
```env
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

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
