import "./App.css";
import Action from "./components/Action";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

const groceries = [
    {
        id: 1,
        name: "Kopi",
        quantity: 5,
        checked: true,
    },
    {
        id: 2,
        name: "Gula Pasir",
        quantity: 5,
        checked: false,
    },
    {
        id: 3,
        name: "Air Mineral",
        quantity: 5,
        checked: false,
    },
];

export default function App() {
    return (
        <>
            <Header />
            <Form />
            <List data={groceries} />
            <Action />
            <Footer />
        </>
    );
}
