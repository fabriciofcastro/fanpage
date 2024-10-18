import theme from '@/providers/ThemeProvider/mui-theme';
import { ThemeProvider as ThemeProviderMui } from '@mui/material';
import { SessionProvider } from "next-auth/react";
import { SaasSidebar } from './components/navbar/sidebar';

export default function LayoutSaas({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex gap-6 pt-28 max-w-screen-2xl m-auto pb-8 px-3">
      <div className="w-full space-y-6">
        <ThemeProviderMui theme={ theme }>
          {/* SessionProvider precisa do session que foi passado como prop */ }
          <SessionProvider>
            { children }
          </SessionProvider>
        </ThemeProviderMui>
      </div>
    </div>
  );
}
