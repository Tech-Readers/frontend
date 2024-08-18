import React from 'react';
import { Nav } from './style';
import { Button } from '@mui/material';




export const MenuNav = () => {
   
    return (
    <>
        <div>
            <Nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Avaliações</a></li>
                    <li>
                        <Subscribe>
                            Inscreva-se
                        </Subscribe>
                    </li>
                </ul> 
            </Nav>
        </div>
    </>
)
}