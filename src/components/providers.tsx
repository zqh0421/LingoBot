"use client";
import { ReactNode } from "react";
// store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store"; // Import your Redux store and persistor
import { ThemeProvider } from "next-themes";
// progress
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
          <ProgressBar height="2px" color="#4F46E5" options={{ showSpinner: false }} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
