/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { About } from "./sections/About";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
