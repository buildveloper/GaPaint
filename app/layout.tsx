import './globals.css'; import Nav from '@/components/Nav'; import Footer from '@/components/Footer'; import ChatWidget from '@/components/ChatWidget';
export const metadata={title:'Georgia Paint & Body | Suwanee Collision Repair',description:'Premium collision repair and auto painting in Suwanee, GA.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><Nav/>{children}<Footer/><ChatWidget/></body></html>}
