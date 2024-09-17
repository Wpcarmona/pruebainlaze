import React from 'react';
import { Inter } from 'next/font/google'; // Si estás usando fuentes

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mi Aplicación de Películas',
  description: 'Aplicación para buscar y ver películas',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <h1>Mi Aplicación de Películas</h1>
          {/* Puedes añadir tu menú de navegación aquí */}
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Mi Aplicación de Películas</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
