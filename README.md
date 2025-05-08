# Match Genius

## What is it?:

* This is an app that uses AI to generate pick up lines for men to date women.
* The users will copy the message provided by the app, then they can paste in their own dating apps.

## How does it work?:

* The user will enter some information regarding their dating prospects into the chat box. 
* An api using a special prompt designed to understand the woman's profile will send a request to the desired AI Provider (that could be either Anthropic, OpenAI or DeepSeek)
* Then the app will receive the response containing the curated "message" that the user needs to answer to the girl. 
* Then the user provides new messages from the girl and the app returns his curated responses.

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
  - Built-in optimizations for images, fonts, and static assets
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports OpenAI (default), Anthropic, Cohere, and other model providers
  - Built-in streaming support for real-time AI responses
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
  - Customizable themes and dark mode support
- [Supabase](https://supabase.com) Integration
  - [Supabase Postgres DB](https://supabase.com/docs/guides/database) for robust chat history and user data storage
  - [Supabase File Storage](https://supabase.com/docs/guides/storage) for efficient file management and uploads
  - [Supabase Auth](https://supabase.com/docs/guides/auth) with multiple authentication providers and row-level security
  - Real-time subscriptions for live updates