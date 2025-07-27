// __mocks__/next/navigation.ts
export const useRouter = () => ({
  push: (url: string) => console.log("[MOCK] router.push:", url),
  prefetch: () => Promise.resolve(),
  pathname: "/",
  query: {},
  asPath: "/",
});
