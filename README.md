# Soundcloud DJ Playlist Manager

This is a tool for enhanced SoundCloud playlist management, offering features like merging multiple playlists into new ones and simplifying the organization of DJ sets.

## Table of Contents

- [Getting Started](#getting-started)
- [Starting the App with Docker](#starting-the-app-with-docker)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [Accessing the App](#accessing-the-app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Starting the App with Docker

To start the app using Docker, you can use the provided `start-dev.sh` and `start-prod.sh` scripts.

### Development Mode

To start the app in development mode with Docker:

```bash
./start-dev.sh --build
# or if you don't want to rebuild the images
./start-dev.sh
```

This will start the development server using Docker.

### Production Mode

To start the app in production mode with Docker:

```bash
./start-prod.sh --logs
# or if you don't want to see the logs
./start-prod.sh
```

This will start the production server using Docker.

## Accessing the App

The app is accessible at [https://www.soundcloud-dj-playlist-manager.com/](https://www.soundcloud-dj-playlist-manager.com/)
