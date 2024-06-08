import Layout from "../components/Layout/layout"
import { Route, Routes } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Layout>
                <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/admin" element={<Admin />} /> */}
                </Routes>
            </Layout>
            <h2>Home</h2>
            <p>Welcome to the home page</p>
        </div>
    )
}