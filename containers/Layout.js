import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout ({children}){
    return (<div>
    <Table>
    <thead>
        <Tr>
            <Td><Header/></Td>
        </Tr>
    </thead>
    <tbody>
        <Tr>
            <Td>{children}</Td>
        </Tr>
        <Tr>
            <Td><Footer/></Td>
        </Tr>
    </tbody>
    </Table>
    </div>)
}
const Table = styled.table`
    border: 1px solid black;
    width: 500px;
    height: 500px;
    margin: auto;
`
const Tr = styled.tr`
    border: 1px solid black;
`
const Th = styled.th`
    border: 1px solid black;
`
const Td = styled.td`
    border: 1px solid black;
`