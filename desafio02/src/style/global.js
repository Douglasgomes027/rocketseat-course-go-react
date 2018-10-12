import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        outline: none;
    }

    body{
        background: #f5f5f5;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }

    html, 
    body,
    #root{
        height: 100%;
    }

    strong{
        font-size: 16px;
    }

    small{
        font-size: 13px;
        color: #666;
    }
`;