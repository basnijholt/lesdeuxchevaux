# List available recipes
default:
    @just --list

# Install dependencies
install:
    bun install

# Run development server
dev:
    bun run dev

# Build for production
build:
    bun run build

# Start production server
start:
    bun run start

# Run linter
lint:
    bun run lint

# Format code
format:
    bun run format

# Type check
typecheck:
    bun run typecheck

# Clean build artifacts
clean:
    rm -rf .next out node_modules/.cache
