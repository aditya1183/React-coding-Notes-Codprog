import React from "react";
import  ReactDOM  from "react-dom/client";

import App from './app';
const root=ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(<prachi vashistha />);


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
