import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardElement from "../components/CardElement";
import CarouselElement from "../components/CarouselElement";


export default function Home() {
  return (
    <div>
    <NavBar />
    <CarouselElement />
    <div>
    <CardElement />
    <CardElement />
    </div>
    <Footer />
    </div>
  );
}
