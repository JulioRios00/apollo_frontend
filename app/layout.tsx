// app/layout.tsx
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Gerenciador de Produtos',
  description: 'Aqui seu produto vale mais :D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> 
        <main style={{ paddingTop: '60px' }}> 
          {children}
        </main>
      </body>
    </html>
  );
}
