import React from "react";
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

import HomePage from "./components/Home.page";
import SuperHerosPage from "./components/SuperHeros.page";
import RQSuperHerosPage from "./components/RQSuperHeros.page";
import SuperHeroPage from "./components/SuperHero.page";
import ParalelPage from "./components/Paralel.page";
import DynamicParalelPage from "./components/DynamicParalel.page";
import DependentPage from "./components/DependentQuery.page";
import PaginatedQueries from "./components/PaginatedQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heros">SuperHerosPage</Link>
              </li>
              <li>
                <Link to="/rq-super-heros">RQSuperHerosPage</Link>
              </li>
              <li>
                <Link to="/rq-paralel">Paralel</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-paralel">Dynamic Queries</Link>
              </li>
              <li>
                <Link to="/rq-dependent">Dependent query</Link>
              </li>
              <li>
                <Link to="/rq-colors">Colors</Link>
              </li>
              
              
              
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heros" element={<SuperHerosPage />} />
            <Route path="/rq-paralel" element={<ParalelPage />} />
            <Route path="/rq-dynamic-paralel" element={<DynamicParalelPage heroIds={[1, 3]} />} />
            <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
            <Route path="/rq-super-heros/:id" element={<SuperHeroPage />} />
            <Route path="/rq-dependent" element={<DependentPage email={"info@ibrokhim.uz"} />} />
            <Route path="/rq-colors" element={<PaginatedQueries />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>

    </BrowserRouter>
  );
}

export default App;
