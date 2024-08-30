import Header from "./header"
import Footer from "./footer"
import Container from '@mui/material/Container';
<<<<<<< HEAD

=======
>>>>>>> 253e6d00c75adb2957d61248bc3afcf75c728236

export default function Layout({children}){
    return(
        <>
<<<<<<< HEAD
           <Header></Header>
           <Container fixed>
            <div>{children}</div>
           </Container>
           <Footer></Footer>
=======
            <Header></Header>
            <Container fixed>
                <div>{children}</div>
            </Container>
            <Footer></Footer>
>>>>>>> 253e6d00c75adb2957d61248bc3afcf75c728236
        </>
    )
}