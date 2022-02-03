import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import Tos from "./routes/wordle-bot/tos";
import Pp from "./routes/wordle-bot/pp";

ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/wordle-bot/terms-of-service" element={<Tos />} />
            <Route path="/wordle-bot/privacy-policy" element={<Pp />} />
        </Routes>
    </HashRouter>,
  document.getElementById('root')
);
