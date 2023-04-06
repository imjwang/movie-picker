import { FormProvider } from "@/context/formStore";
import { GlobalProvider } from "@/context/globalStore";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <GlobalProvider>
        <FormProvider>
          <Component {...pageProps} />
        </FormProvider>
      </GlobalProvider>
    </UserProvider>
  );
}
