"use client";

import * as React from "react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {IconMoon, IconSun} from "@/components/ui/icons";

export function ThemeToggle() {
  const {setTheme, theme} = useTheme();
  const [_, startTransition] = React.useTransition();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // 如果还不是客户端，或者主题还没有确定，则不显示图标
  if (!isClient || !theme) {
    return (
      <Button variant="ghost" size="icon" onClick={() => {}}>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "light" ? "dark" : "light");
        });
      }}
    >
      {theme === "dark" ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
