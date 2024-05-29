'use client';
// esse é um codigo para resolver o problema de renderização
// esse codigo não está sendo usado por enquanto
import React, { useEffect } from 'react';

interface IProp {
  children: React.ReactNode;
}

const RouterMounting = ({ children }: IProp) => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <>{children}</>;
};

export default RouterMounting;
