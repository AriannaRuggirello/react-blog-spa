
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {

return (
    <div>
    <Header />
    <main className='min-h-screen'>
    <Outlet />
    </main>
    <Footer />
    </div>
);
}