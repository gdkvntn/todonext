import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Layout from "@/layout/Layout";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@600&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
