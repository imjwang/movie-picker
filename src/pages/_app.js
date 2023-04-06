import { FormProvider } from "@/context/formStore";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </UserProvider>
  );
}
