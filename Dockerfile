FROM node:23-alpine AS builder
LABEL authors="huynguyen"

# Install dependencies for canvas module 
RUN apk add --no-cache build-base cairo-dev jpeg-dev pango-dev giflib-dev
# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy project files
COPY . .


# Install dependencies
RUN pnpm install

ENV NEXTAUTH_URL=${NEXTAUTH_URL}

# Build the Next.js app
RUN pnpm run build

# Stage 2: Create the final image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage

COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public

# Expose the port the app runs on
EXPOSE 3000



# Start the Next.js app
CMD ["node", "server.js"]