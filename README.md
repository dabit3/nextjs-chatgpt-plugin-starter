## Next.js Boilerplate for a simple ChatGPT Plugin

This is essentially the JavaScript version of the Python app documented in the OpenAI Chat GPT docs.

I originally had trouble getting the headers and cors working properly so I figured I'd document how to do this here.

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

