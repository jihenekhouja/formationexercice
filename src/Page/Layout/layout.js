import Menu from "../Menu/menu";


function Layout( {children , role}) {
    return ( <div className="layoute">
        <header>


        <Menu role={role}/>

        
        </header>
        <main>
        {children}
        </main>
        <footer>
            <div> coopyright 2023</div>
        </footer>
        </div> );
}

export default Layout;