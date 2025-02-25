import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="container">{children}</body>
        </html>
    );
}
