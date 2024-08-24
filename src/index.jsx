// index.js
import React from "react"
import { createRoot } from 'react-dom/client';

import Container from "./component/Container";

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Container />);