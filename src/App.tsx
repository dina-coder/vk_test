import React from "react";
import cl from './App.module.scss';
import PaymentForm from "./components/pages/paymentFormPage/PaymentForm";

const App = () => {
    return <div className={cl.container}><PaymentForm /></div>
}

export default App