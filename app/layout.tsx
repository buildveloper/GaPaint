import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
export const metadata={title:'Georgia Paint & Body | Suwanee Collision Repair',description:'Premium collision repair, auto body, and painting in Suwanee, GA. Family-owned since 1989.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><Nav />{children}<Footer /><ChatWidget /></body></html>}
