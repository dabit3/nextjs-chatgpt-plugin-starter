## Next.js Boilerplate for a simple ChatGPT Plugin

This is essentially the JavaScript version of the Python app documented in the OpenAI Chat GPT docs.

I originally had trouble getting the headers and cors working properly so I figured I'd document how to do this here.

### Prerequisites

This app has no user interface, instead it's meant to use with GhatGPT's UI so therefore you must have access to ChatGPT plugins, which at the moment are still in beta.

### Project setup

1. Clone the repo, install depdendencies:

```sh
git clone git@github.com:dabit3/nextjs-chatgpt-starter.git

cd nextjs-chatgpt-starter

yarn # or npm install, pnpm
```

2. Run the server

```sh
npm run dev
```

3. Set up your GPT Plugin in the ChatGPT Plugin UI.

When prompted for your website domain, type in 'http://localhost:3000'

### Usage

Ask for your list of todos:

```sh
what are my todos?
# or anything like that
```

Add a todo:

```sh
add book flight to my todos
```

Summarize todos:

```
How many todos do I have left?
```

Or any other questions you might have.

### Configuration

To add more routes:

1. Create new route in `pages/api` directory.

2. Update `openapi.yaml` with new path

3. Update `openapi.yaml` with schema for any data model coming back or being passed in.