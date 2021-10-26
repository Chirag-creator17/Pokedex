import React from "react";
import styled from "styled-components";
import PokemonList from "../pokemon/PokemonList.js";
const Dashboard=()=>{
    return (
        <div className="row">
            <div className="col">
                <PokemonList />
            </div>
        </div>
    )
}
export default Dashboard;