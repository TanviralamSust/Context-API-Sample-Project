import Navbar from "./Navbar";

export default function Layout({children}) {
    return(
        <>
            <Navbar></Navbar>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}